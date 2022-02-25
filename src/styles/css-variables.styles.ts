import { css } from "@emotion/react";

import { rhythm } from "./typography.styles";

type StyleTokenValues = string | number | string[];
type StyleTokenLibrary = Record<
  string,
  StyleTokenValues | Record<string, StyleTokenValues>
>;

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

/** Dimensions used across the application */
const DIMENSIONS = {
  container: rhythm(33)
};

/** Colors used across the application */
const COLORS = {
  white: "white",
  text: {
    primary: "hsl(0,0%,0%,0.8)"
  },
  primary: {
    "05": "#fff9ee",
    "10": "#fffee6",
    "90": "#ffe79c",
    "100": "#fbda7d", // base
    "110": "#d8bb63"
  }
};

export const cssVariables = css`
  :root {
    // Dimensions
    ${libraryToVariables("dimensions", "", DIMENSIONS)}
    // CSS colors
    ${libraryToVariables("colors", "", COLORS)}
  }
`;
