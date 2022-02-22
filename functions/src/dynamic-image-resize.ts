import * as path from "path";
import * as zlib from "zlib";
import { PassThrough } from "stream";

import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as log from "firebase-functions/lib/logger";

import * as sharp from "sharp";

interface RequestParams {
  0?: string;
}

interface RequestQuery {
  w?: string;
  h?: string;
  q?: string;
  dpr?: string;
}

const SHARP_FORMATS = Object.values(sharp.format);
const SHARP_SUPPORTED_FORMATS = SHARP_FORMATS.filter(
  ({ input, output }) => input.buffer && output.buffer
).map(({ id }) => `image/${id}`);

const FORMAT_WEBP = "image/webp";

const DEFAULT_MAX_AGE = "31536000";
const DEFAULT_CACHE_CONTROL = `public, max-age=${DEFAULT_MAX_AGE}, s-maxage=${DEFAULT_MAX_AGE}`;

export const dynamicImageResize = functions.https.onRequest(
  async (request, response) => {
    const bucket = admin.storage().bucket();

    // From the URL we want to get some params
    const { query, params }: { query: RequestQuery; params: RequestParams } =
      request;
    const { 0: urlparam = "" } = params;

    // Parse these params to integers
    let width = query.w && parseInt(query.w);
    let height = query.h && parseInt(query.h);
    const quality = query.q && parseInt(query.q);
    const dpr = query.dpr && parseInt(query.dpr);

    if (dpr && !isNaN(dpr)) {
      width = width && !isNaN(width) ? width * dpr : width;
      height = height && !isNaN(height) ? height * dpr : width;
    }

    // We need to strip the leading "/" in he URL
    const filepath = urlparam.replace(/^\/+/, "");

    // If you don't have a filepath then return a 404
    if (!filepath || !filepath.length) {
      log.warn(
        `No filepath passed in URL. Params:`,
        request.params,
        "Query:",
        request.query && Object.keys(request.query).length
          ? request.query
          : "none provided"
      );
      response.sendStatus(400);
      return;
    }

    // Check that the request params can be made into numbers
    if (
      (width && isNaN(width as any)) ||
      (height && isNaN(height as any)) ||
      (quality && isNaN(quality as any))
    ) {
      log.warn(
        `Non NaN parameters in the query. Width: ${width} Height: ${height} Quality: ${quality}`
      );
      response.sendStatus(400);
      return;
    }

    log.info(
      `Resizing ${filepath} to width: ${width || "auto"} height: ${
        height || "auto"
      }`
    );

    // Get a ref to the file
    const ref = bucket.file(filepath);
    const [isExists] = await ref.exists();

    // If the file doesn't exist then we 404
    if (!isExists) {
      log.warn(`404 returned for ${filepath}`);
      response.sendStatus(404);
      return;
    }

    // Get the metadata we will need for this file
    const {
      contentType: sourceContentType,
      cacheControl: sourceCacheControl,
      name: sourcePath
    } = ref.metadata;

    // Does sharp accept this contentType
    const isSupportedBySharp =
      SHARP_SUPPORTED_FORMATS.includes(sourceContentType);
    // Will we be doing a transform
    const isTransformed = Boolean(
      isSupportedBySharp && (width || height || quality)
    );
    // What will our output format. Namely, can we send webp back.
    const isWebpTransform = !!request.accepts(FORMAT_WEBP) && isTransformed;

    // Get the filename and amend with webp if needed
    const contentType = isWebpTransform ? FORMAT_WEBP : sourceContentType;
    const sourceext = path.extname(sourcePath);
    const filename = path.basename(sourcePath, sourceext);

    // Create the content disposition
    const dispositionfilename = isWebpTransform
      ? filename + ".webp"
      : filename + sourceext;

    // Create some opts for Sharp
    // Do this seperately because the typing on it is bad
    const resizeOpts: any = { width, height, fit: "inside" };
    const formatOpts: any = { quality };
    const format = SHARP_FORMATS.find(
      f => f.id === contentType.replace("image/", "")
    );

    log.debug(formatOpts);

    // What sort of compression can we supply
    let encoder: zlib.BrotliCompress | zlib.Gzip | zlib.Deflate | PassThrough;
    let encodingAlogrithm: string | undefined;
    const encodingPreference = request.acceptsEncodings();

    // We start with brotli. Then we just pick your preference
    if (encodingPreference.includes("br")) {
      encoder = zlib.createBrotliCompress();
      encodingAlogrithm = "br";
    } else if (encodingPreference[0] === "gzip") {
      encoder = zlib.createGzip();
      encodingAlogrithm = "gzip";
    } else if (encodingPreference[0] === "deflate") {
      encoder = zlib.createDeflate();
      encodingAlogrithm = "deflate";
    } else encoder = new PassThrough();

    log.log(
      `Encoding with ${encodingAlogrithm} given encoding preference`,
      encodingPreference
    );

    // Create each header
    const cacheControl = sourceCacheControl || DEFAULT_CACHE_CONTROL;
    const contentDisposition = `inline; filename=${dispositionfilename}`;
    const contentEncoding = encodingAlogrithm;
    const xIsTransformed = isTransformed.toString();
    const xGeneration = new Date().toISOString();

    // Write our response headers
    response.setHeader("x-gfn-istransformed", xIsTransformed);
    response.setHeader("x-gfn-generation", xGeneration);
    response.setHeader("Cache-Control", cacheControl);
    response.setHeader("Content-Disposition", contentDisposition);
    contentEncoding && response.setHeader("Content-Encoding", contentEncoding);
    response.contentType(contentType);

    // If we want to do a transform then we pipe to Sharp.
    // Otherwise pipe direct to the response
    const pipeline = sharp();
    const destination = isTransformed ? pipeline : encoder;
    log.log(`Piping output to ${isTransformed ? "Sharp" : "response"}`);

    // Pipe the sharp stream back to the browser
    ref
      .createReadStream({ validation: !process.env.FUNCTIONS_EMULATOR })
      .pipe(destination);

    // Pipe the sharp pipeline to the response
    if (isTransformed) {
      pipeline.resize(resizeOpts).toFormat(format, formatOpts).pipe(encoder);

      /** Resave the image to Firebase storage */
      /** @todo: from here you need to check if this file exists before you serve it */
      const outref = bucket.file(filepath.replace("jpeg", "webp"));
      pipeline
        .resize(resizeOpts)
        .toFormat(format, formatOpts)
        .pipe(outref.createWriteStream());
    }

    // Pipe the encoder out to the response
    encoder.pipe(response);
  }
);
