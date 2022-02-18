import { css } from "@emotion/react";
import Typography, { TypographyOptions } from "typography";

const FONT_DIRECTORY = `${process.env.PUBLIC_URL}/fonts`;
const FONT_DIRECTORY_SERIF = `${FONT_DIRECTORY}/serif`;
const FONT_DIRECTORY_SANS = `${FONT_DIRECTORY}/sans`;

const FONT_FAMILIES = { serif: "wmdyjryhmm", sans: "xxipmmvzcb" };

const theme: TypographyOptions = {
  baseFontSize: "20",
  baseLineHeight: 1.75,
  scaleRatio: 1.333333,
  bodyFontFamily: [FONT_FAMILIES.sans, "Helvetica Neue", "sans-serif"],
  includeNormalize: false
};

const typography = new Typography(theme);

export const { scale, rhythm } = typography;

export const globalTypographyStyles = css`
  ${typography.toString()}
`;

export const fontFaces = css`
  @font-face {
    font-family: "${FONT_FAMILIES.serif}";
    src: url("${FONT_DIRECTORY_SERIF}/${FONT_FAMILIES.serif}.woff")
        format("woff2"),
      url("${FONT_DIRECTORY_SERIF}/${FONT_FAMILIES.serif}.woff2") format("woff");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "${FONT_FAMILIES.sans}";
    src: url("${FONT_DIRECTORY_SANS}/${FONT_FAMILIES.sans}-regularitalic.woff2")
        format("woff2"),
      url("${FONT_DIRECTORY_SANS}/${FONT_FAMILIES.sans}-regularitalic.woff")
        format("woff");
    font-weight: 400;
    font-style: italic;
  }

  @font-face {
    font-family: "${FONT_FAMILIES.sans}";
    src: url("${FONT_DIRECTORY_SANS}/${FONT_FAMILIES.sans}-regular.woff2")
        format("woff2"),
      url("${FONT_DIRECTORY_SANS}/${FONT_FAMILIES.sans}-regular.woff")
        format("woff");
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: "${FONT_FAMILIES.sans}";
    src: url("${FONT_DIRECTORY_SANS}/${FONT_FAMILIES.sans}-mediumitalic.woff2")
        format("woff2"),
      url("${FONT_DIRECTORY_SANS}/${FONT_FAMILIES.sans}-mediumitalic.woff")
        format("woff");
    font-weight: 500;
    font-style: italic;
  }

  @font-face {
    font-family: "${FONT_FAMILIES.sans}";
    src: url("${FONT_DIRECTORY_SANS}/${FONT_FAMILIES.sans}-medium.woff2")
        format("woff2"),
      url("${FONT_DIRECTORY_SANS}/${FONT_FAMILIES.sans}-medium.woff")
        format("woff");
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: "${FONT_FAMILIES.sans}";
    src: url("${FONT_DIRECTORY_SANS}/${FONT_FAMILIES.sans}-bolditalic.woff2")
        format("woff2"),
      url("${FONT_DIRECTORY_SANS}/${FONT_FAMILIES.sans}-bolditalic.woff")
        format("woff");
    font-weight: 600;
    font-style: italic;
  }

  @font-face {
    font-family: "${FONT_FAMILIES.sans}";
    src: url("${FONT_DIRECTORY_SANS}/${FONT_FAMILIES.sans}-bold.woff2")
        format("woff2"),
      url("${FONT_DIRECTORY_SANS}/${FONT_FAMILIES.sans}-bold.woff")
        format("woff");
    font-weight: 600;
    font-style: normal;
  }
`;
