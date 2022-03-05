import { css } from "@emotion/react";

import { rhythm } from "./typography.styles";

type StyleTokenValues = string | number | string[];
type StyleTokenLibrary = Record<
  string,
  StyleTokenValues | Record<string, StyleTokenValues>
>;

export type HEADING_COLORS = keyof typeof COLORS["headings"];

/** Dimensions used across the application */
const DIMENSIONS = {
  container: rhythm(16)
};

/** Name for CSS counter used for scene */
export const COUNTER_RESET_NAME_SCENES = "scenes";

/** Colors used across the application */
export const COLORS = {
  white: "white",
  text: { primary: "hsl(0,0%,0%,0.8)" },
  headings: {
    primary: "var(--colors-primary-100)",
    hims: "#E0B188",
    narative: "#2a2597",
    velmer: "#39df88",
    route1: "#e59d19",
    havas: "#ce3118"
  },
  primary: {
    "100": "#30a395"
  },
  neutral: {
    "05": "#fafaff",
    "10": "#f1f1f7",
    "90": "#e0e0e7",
    "100": "#d8d7de",
    "110": "#c7c6ce"
  }
};

export const tokensAsVariables = css`
  :root {
    // Dimensions
    ${libraryToVariables("dimensions", "", DIMENSIONS)}
    // CSS colors
    ${libraryToVariables("colors", "", COLORS)}
  }
`;

/**
 * Turns our theme variables into a bunch of CSS variables.
 *
 * @example
 *  libraryToVariables(colors)
 *  `--color-black: #2b2b2b;
 *   --color-grey-0: #B1B1B1;`
 *
 * @param lib Namespace to shroud this object in e.g. colors
 * @param obj Object that should be converted to vars
 * @param unit Suffixes the object's value with that unit e.g. ms will turn 100 into 100ms
 * @param namespace Namespace of the parent object when recursing e.g. "greys" within "colors"
 *
 * @author Max Barry <mbarry@forhims.com>
 */
function libraryToVariables(
  lib: string,
  unit: string,
  obj: StyleTokenLibrary,
  namespace?: string
) {
  const s = ([key, value]) =>
    typeof value === "object"
      ? libraryToVariables(lib, unit, value, key)
      : `--${lib}-${namespace ? `${namespace}-` : ""}${key}: ${value}${unit};`;
  return Object.entries(obj).map(s).join("\n");
}
