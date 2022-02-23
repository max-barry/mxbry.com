import * as path from "path";
import * as zlib from "zlib";
import { PassThrough } from "stream";
import { createHash } from "crypto";

import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as sharp from "sharp";

interface RequestParams {
  0?: string;
}

interface RequestQuery {
  /** Target width */
  w?: string;
  /** Target height */
  h?: string;
  /** Target quality 0-100 */
  q?: string;
  /** Target dpr e.g. 2 or 3 */
  dpr?: string;
  /** Target format */
  f?: "auto" | "webp" | "avif";
}

/** Shortcut to the logger */
const logger = functions.logger;

/** Are we running inside of the emulator environment? */
const GOOGLE_STORAGE_READ_STREAM_OPTS = {
  validation: !process.env.FUNCTIONS_EMULATOR
};

/** The content type for WebP */
const CONTENT_TYPE_WEBP = "image/webp";
const CONTENT_TYPE_AVIF = "image/avif";

/** Some setings for the cache */
const DEFAULT_CACHE_CONTROL = `public, max-age=31536000, s-maxage=31536000`;

/** Metadata keys we store on objects */
const METADATA_TRANSFORMATION_TIMESTAMP = "transformation-timestamp";

/** Useful regex */
const REGEX_LEADING_SLASH = /^\/+/;

export const dynamicImageResize = functions.https.onRequest(
  async (request, response) => {
    /** Get a reference to the bucket */
    const bucket = admin.storage().bucket();

    /** From the URL retrieve the params and query args */
    const query: RequestQuery = request.query;
    const params: RequestParams = request.params;
    const { 0: urlparam = "" } = params;

    // We need to strip the leading "/" in he URL
    const filepathFromUrl = urlparam.replace(REGEX_LEADING_SLASH, "");

    // If you don't have a filepath then return a 404
    if (!filepathFromUrl.length) {
      logger.warn("Bad request arguments", request.params, request.query);
      response.sendStatus(400);
      return;
    }

    /** Get a ref to the source file */
    const sourceRef = bucket.file(filepathFromUrl);
    const [isExists] = await sourceRef.exists();

    /** If the file doesn't exist then we 404 */
    if (!isExists) {
      logger.warn("Bad source", filepathFromUrl);
      response.sendStatus(404);
      return;
    }

    /** Get the metadata for the file */
    const {
      contentType: sourceContentType,
      cacheControl: sourceCacheControl,
      name: sourcePath,
      generate,
      metageneration
    } = sourceRef.metadata;

    /** Interrogate the source path a bit */
    const sourceDir = path.dirname(sourcePath).replace(".", "");
    const sourceExt = path.extname(sourcePath);
    const sourceFilename = path.basename(sourcePath, sourceExt);

    /** Turn the query into readable formatting args */
    const transformationNumericalArgs =
      queryToNumericalTransformationArguments(query);

    /** Turn the query into a format */
    const transformationFormat = queryToTransformationFormat(
      query,
      sourceContentType,
      request
    );

    /** Check we have numbers for everything we need for a transformation */
    if (
      (["width", "height", "quality"] as const).some(
        key =>
          typeof transformationNumericalArgs[key] !== "undefined" &&
          isNaN(transformationNumericalArgs[key] as any)
      )
    ) {
      logger.warn("Bad transformation arguments", transformationNumericalArgs);
      response.sendStatus(400);
      return;
    }

    /** Do we have everything we need for an image transformation? */
    const willBeTransformed = Boolean(
      /** Can sharp transform this type of image */
      findSharpFormatByContentType(sourceContentType)?.input.buffer &&
        findSharpFormatByContentType(sourceContentType)?.output.buffer &&
        /** Do we have an argument to transform here */
        Object.values(transformationNumericalArgs).some(Boolean)
    );

    /** Create a checksum for this request and this generation of image */
    const checksumStr = JSON.stringify(
      Object.entries({
        ...query,
        ...params,
        contentType: transformationFormat.contentType,
        generate,
        metageneration
      })
        .flat()
        .sort()
        .join("")
    );

    const checksum = createHash("sha1").update(checksumStr).digest("base64url");

    /** Append this checksum to the transformation checksum to give us the filepath */
    const transformedFilepath =
      `${sourceDir}/${sourceFilename}.${checksum}.${transformationFormat.ext}`.replace(
        REGEX_LEADING_SLASH,
        ""
      );

    /** See if we have transformed this file before */
    const transformedRef = bucket.file(transformedFilepath);

    /** Have we transformed this already? */
    const [hasTransformedBefore] = await transformedRef.exists();

    /** From the request work out what sort of compression we will return with */
    const compression = determineCompressionAlgorithm(request);

    /** Set up some defaults for our headers */
    const headers = {
      "x-gfn-istransformed": false,
      "x-gfn-transformation-timestamp": undefined as number | undefined,
      "Content-Disposition": `inline; filename=${sourceFilename}.${transformationFormat.ext}`,
      "Content-Encoding": compression.algorithm,
      "Cache-Control": sourceCacheControl || DEFAULT_CACHE_CONTROL
    };

    /** If a transformation is needed */
    if (willBeTransformed && !hasTransformedBefore) {
      logger.info("Image will be transformed and saved");

      /** Get the timestamp of now */
      const timestamp = new Date().valueOf();

      /** Create a sharp factory with our formatting options */
      const sharpFactory = sharp()
        .resize({
          width: transformationNumericalArgs.width,
          height: transformationNumericalArgs.height,
          fit: "inside"
        })
        .toFormat(transformationFormat.sharpFormat, {
          quality: transformationNumericalArgs.quality
        });

      /** Pipe from Google Storage source to Sharp */
      sourceRef
        .createReadStream(GOOGLE_STORAGE_READ_STREAM_OPTS)
        .pipe(sharpFactory);

      /** Pipe the factory to the compression pipe */
      sharpFactory.clone().pipe(compression.pipe);

      /** Pipe the factory to the storage write stream */
      sharpFactory.clone().pipe(
        transformedRef.createWriteStream({
          metadata: {
            cacheControl: headers["Cache-Control"],
            contentType: transformationFormat.contentType,
            metadata: { [METADATA_TRANSFORMATION_TIMESTAMP]: timestamp }
          }
        })
      );

      /** Update the headers */
      headers["x-gfn-transformation-timestamp"] = timestamp;
      headers["x-gfn-istransformed"] = true;
    } else if (hasTransformedBefore) {
      logger.info("Image will be read from previous transformation");

      /** If we have previously transformed this image, then read that to the compression pipe */
      transformedRef
        .createReadStream(GOOGLE_STORAGE_READ_STREAM_OPTS)
        .pipe(compression.pipe);

      /** Update the headers */
      headers["x-gfn-transformation-timestamp"] =
        transformedRef.metadata.metadata[METADATA_TRANSFORMATION_TIMESTAMP];
    } else {
      logger.info("Image will be read from source");

      /** If there's no transformation then we pipe the source direct to compression */
      sourceRef
        .createReadStream(GOOGLE_STORAGE_READ_STREAM_OPTS)
        .pipe(compression.pipe);
    }

    /** Write our response headers */
    response.set(headers);

    /** Set the content type */
    response.type(transformationFormat.contentType);

    /** Explain how we'll be compressing */
    logger.info(
      `Using "${compression.algorithm}" compression, given preference:`,
      request.accepts().join(", ")
    );

    // Pipe the compression to the response
    compression.pipe.pipe(response);
  }
);

/** Take the query arguments and clean them up, to turn them into formatting arguments  */
function queryToNumericalTransformationArguments({
  w,
  h,
  q,
  dpr: d
}: RequestQuery) {
  /** Parse the query as integers */
  let width = w ? parseInt(w) : undefined;
  let height = h ? parseInt(h) : undefined;
  const quality = q ? parseInt(q) : undefined;
  const dpr = d ? parseInt(d) : undefined;

  if (dpr && !isNaN(dpr)) {
    width = width && !isNaN(width) ? width * dpr : width;
    height = height && !isNaN(height) ? height * dpr : width;
  }

  return { width, height, quality, dpr };
}

/** Take the query argument and determine the format we'll server back */
function queryToTransformationFormat(
  { f: requestedFormat }: RequestQuery,
  sourceContentType: string,
  request: functions.Request
) {
  /** Default to the content type of source */
  let contentType = sourceContentType;
  let sharpFormat =
    findSharpFormatByContentType(sourceContentType) || sharp.format.jpeg;

  /** If the requested format is "auto" then really we're just checking if webp is supported */
  if (
    requestedFormat === "webp" ||
    (requestedFormat === "auto" && request.accepts(CONTENT_TYPE_WEBP))
  ) {
    contentType = CONTENT_TYPE_WEBP;
    sharpFormat = sharp.format.webp;
  } else if (requestedFormat === "avif") {
    contentType = CONTENT_TYPE_AVIF;
    sharpFormat = sharp.format.heif;
  }

  return { sharpFormat, contentType, ext: sharpFormat.id };
}

/** Determine what compression algorithm we'll use */
function determineCompressionAlgorithm(request: functions.Request) {
  /** What format will we pipe the output back to? Default to simple passthrough. */
  let pipe: zlib.BrotliCompress | zlib.Gzip | zlib.Deflate | PassThrough =
    new PassThrough();

  /** What encoding will the response be? */
  let algorithm: string | undefined;

  /** What encoding does the browser have a preference for? */
  const preference = request.acceptsEncodings();

  /** Switch over the encoding preferences and pick a response pipe and encoding algorithm */
  if (preference.includes("br")) {
    pipe = zlib.createBrotliCompress();
    algorithm = "br";
  } else if (preference[0] === "gzip") {
    pipe = zlib.createGzip();
    algorithm = "gzip";
  } else if (preference[0] === "deflate") {
    pipe = zlib.createDeflate();
    algorithm = "deflate";
  }

  return { pipe, algorithm };
}

/** Take a content type and return the sharp format */
function findSharpFormatByContentType(contentType: string) {
  const formats: sharp.AvailableFormatInfo[] = Object.values(sharp.format);
  return formats.find(format => `image/${format.id}` === contentType);
}
