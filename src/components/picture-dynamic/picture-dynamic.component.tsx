/** @jsxImportSource @emotion/react */
import React from "react";

import { css, SerializedStyles, useTheme } from "@emotion/react";

import { MEDIA_QUERY_BREAK_POINTS_MAP } from "../../styles/media-queries.styles";

type SizesRange = [small: number, medium?: number, large?: number];
type BreakpointsRange = [small: string, medium: string, large: string];

type SizesBreakpointMap = [
  small: [size: SizesRange[0], breakpoint: BreakpointsRange[0]],
  medium: [size: SizesRange[1], breakpoint: BreakpointsRange[1]],
  large: [size: SizesRange[2], breakpoint: BreakpointsRange[2]]
];

type SupportedFormats = ["avif", "webp"];

interface Props {
  /** Path to the image src on Cloud Storage */
  src: string;
  /** alt tag */
  alt: string;
  /** Styles tag to add to the <img /> tag */
  css?: SerializedStyles | SerializedStyles[];
  /**
   * Array of sizes the image will be set to on mobile, tablet, desktop.
   * If there is no larger size then it will be the size for all images up.
   */
  sizes: SizesRange;
}

/** What is the endpoint of the dynamic picture resizer? */
const PICTURE_DYNAMIC_ENDPOINT = process.env.REACT_APP_STATIC_IMAGERY_ENDPOINT;

/** Default styles we will attach to the image tag */
const defaultCss = css`
  width: 100%;
  user-select: none;
`;

export const PictureDynamic: React.FC<Props> = ({
  src,
  alt,
  css: extraCss = [],
  sizes: _sizes
}) => {
  /** Let's clone sizes to be have undefined or value for all 3 elements */
  const sizes: Required<SizesRange> = Array.from({
    ..._sizes,
    length: 3
  }) as any;

  /** Pull down the application theme */
  const theme = useTheme();

  /** Get the breakpoints from the theme */
  const breakpoints: MEDIA_QUERY_BREAK_POINTS_MAP =
    theme["styled-breakpoints"].breakpoints;
  const breakpointsRange: BreakpointsRange = [
    breakpoints.small,
    breakpoints.medium,
    breakpoints.large
  ];

  /** Marry the breakpoints to the sizes */
  const definedSizes: SizesBreakpointMap = sizes
    .map((size, i) => [size, breakpointsRange[i]] as SizesBreakpointMap[number])
    .filter(isSizeDefined) as any;

  /** We carve 2 parts from our sizes: the <source> and the <img> */
  const [imgSize] = definedSizes.pop() || [];

  /** The remaining elements will be the sources */
  const forSources = [...definedSizes];

  /** If we don't have any sizes then what's the point */
  if (!imgSize) return null;

  /** Create some simple props for our <img /> */
  const styles = [defaultCss, ...([] as SerializedStyles[]).concat(extraCss)];
  const role = alt === "" ? "presentation" : undefined;
  const srcSet = createSrcSet(appendParam(src, "w", imgSize));

  return (
    <picture>
      {forSources.filter(isSizeDefined).map(([size, breakpoint], i) => {
        /** Bundle props */
        const _props = { src, size, breakpoint };

        return (
          <React.Fragment key={breakpoint + size + i}>
            <Source {..._props} type={["avif", "webp"]} />
            <Source {..._props} />
          </React.Fragment>
        );
      })}
      <Source src={src} size={imgSize} type={["avif", "webp"]} />
      <img
        loading="lazy"
        alt={alt}
        role={role}
        css={styles}
        srcSet={srcSet}
        draggable={false}
      />
    </picture>
  );
};

/** Component for our <Source /> */
const Source: React.FC<{
  src: string;
  size: number;
  breakpoint?: BreakpointsRange[number];
  type?: SupportedFormats;
}> = ({ src: _src, size, breakpoint, type: types = [undefined] }) => {
  /** Remap the src with params */
  let src = _src;

  /** Add the size parameter */
  src = appendParam(src, "w", size);

  /** Create the media */
  const media = breakpoint && `(max-width: ${breakpoint})`;

  /** Map over the types and render a <source /> for each */
  return (
    <>
      {types.map((type: SupportedFormats[number] | undefined) => {
        /** Add the Webp format */
        if (type === "webp") src = appendParam(src, "f", "webp");

        /** Add the Avif format */
        if (type === "avif") src = appendParam(src, "f", "avif");

        /** Create the srcSet */
        const srcSet = createSrcSet(src);

        return (
          <source
            key={src}
            media={media}
            srcSet={srcSet}
            type={type && `image/${type}`}
          />
        );
      })}
    </>
  );
};

/** Create a 1.0 and 2.0 DPR query parameters */
function createSrcSet(src: string) {
  return `
    ${PICTURE_DYNAMIC_ENDPOINT}/${src},
    ${PICTURE_DYNAMIC_ENDPOINT}/${appendParam(src, "dpr", 2)} 2x
  `;
}

/** Append a URL parameter to an existing URL */
function appendParam(
  _url: string,
  key: "w" | "h" | "f" | "q" | "dpr",
  value: string | number
) {
  const url = new URL(_url, "https://google.com");
  url.searchParams.set(key, `${value}`);
  /** Return to pathname and query */
  const { pathname, search } = url;
  return `${pathname.replace(/^\//, "")}${search}`;
}

/** Typeguard to confirm defined */
function isSizeDefined(
  arg: SizesBreakpointMap[number]
): arg is [size: number, breakpoint: BreakpointsRange[number]] {
  return !!arg[0];
}
