import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { HEADING_COLORS } from "./tokens.styles";

// Import all font files
import fontSansBoldWoff from "../statics/fonts/sans/1078433590-bold.woff";
import fontSansBoldWoff2 from "../statics/fonts/sans/1078433590-bold.woff2";
import fontSansBoldItalicWoff from "../statics/fonts/sans/1078433590-bolditalic.woff";
import fontSansBoldItalicWoff2 from "../statics/fonts/sans/1078433590-bolditalic.woff2";
import fontSansRegularItalicWoff from "../statics/fonts/sans/1078433590-italic.woff";
import fontSansRegularItalicWoff2 from "../statics/fonts/sans/1078433590-italic.woff2";
import fontSansRegularWoff from "../statics/fonts/sans/1078433590-regular.woff";
import fontSansRegularWoff2 from "../statics/fonts/sans/1078433590-regular.woff2";

type FontFaceRecord = [
  woff: string,
  woff2: string,
  weight?: string,
  style?: string
];

const FONT_NAME_SANS = `"1078433590"`;
const FONT_FAMILIES_SANS = [FONT_NAME_SANS, "Courier", "sans-serif"].join(", ");

const FONT_BASE_SIZE = 20;
export const FONT_BASE_LINE_HEIGHT = 1.4;
export const PARAGRAPH_BASE_MARGIN = rhythm(1 / 2);

export const globalTypeStyles = css`
  html,
  body {
    color: var(--colors-text-primary);
    font-family: ${FONT_FAMILIES_SANS};
    font-size: ${FONT_BASE_SIZE}px;
    line-height: ${FONT_BASE_LINE_HEIGHT};
    text-rendering: optimizeLegibility;
    font-smooth: always;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  a {
    cursor: pointer;
    transition: opacity 120ms;

    &:hover,
    &:focus {
      opacity: 0.6;
    }
  }

  p,
  hr,
  a {
    &:not(:last-child) {
      margin-bottom: ${PARAGRAPH_BASE_MARGIN};
    }
  }

  // SVGs interior to text
  p,
  a,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    svg,
    [data-fallback-icon] {
      height: calc(1em * ${FONT_BASE_LINE_HEIGHT});
      vertical-align: middle;
      margin-right: 1ch;
      display: inline-block;
    }
  }
`;

/** Array of font faces to generate */
const fontFaceRecord: FontFaceRecord[] = [
  [fontSansRegularWoff, fontSansRegularWoff2],
  [fontSansRegularItalicWoff, fontSansRegularItalicWoff2, undefined, "italic"],
  [fontSansBoldWoff, fontSansBoldWoff2, "bold"],
  [fontSansBoldItalicWoff, fontSansBoldItalicWoff2, "bold", "italic"]
];

export const fontFaces = css`
  ${fontFaceRecord.map(([woff, woff2, weight = "normal", style = "normal"]) => {
    return `
      @font-face {
        font-family: ${FONT_NAME_SANS};
        src: url("${woff}") format("woff2"), url("${woff2}") format("woff");
        font-weight: ${weight};
        font-style: ${style};
        font-display: swap;
      }
`;
  })}
`;

/** Take a pixel, make it a rem */
export function rem(pixel: number) {
  return pixel / FONT_BASE_SIZE + "rem";
}

/** Take our magic number of BASE * LINE_HEIGHT and multiply by a scaler */
export function rhythm(scaler: number) {
  return rem(scaler * FONT_BASE_SIZE * FONT_BASE_LINE_HEIGHT);
}

/** Type components */

export const HeadingOne = styled.h2<{ color: HEADING_COLORS }>`
  text-transform: uppercase;
  color: var(--colors-headings-${({ color }) => color});
`;

export const HeadingTwo = styled.h3`
  font-weight: bold;
  text-transform: uppercase;
`;

export const Transition = styled.p`
  text-transform: uppercase;
  text-align: right;
`;

export const Hr = styled.hr`
  text-align: center;

  &::before {
    content: "--";
  }
`;

export const A = styled.a``;
A.defaultProps = { target: "_blank", rel: "noreferrer" };
