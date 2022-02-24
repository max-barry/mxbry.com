import { ThemeProvider, ThemeProviderProps } from "@emotion/react";
import { createTheme } from "styled-breakpoints";

/** Static constant containing the points we break at */
const MEDIA_QUERY_BREAK_POINTS = {
  small: "576px",
  medium: "768px",
  large: "992px",
  xlarge: "1200px"
};

/** The keys of this object */
export type MEDIA_QUERY_BREAK_POINT_KEYS =
  keyof typeof MEDIA_QUERY_BREAK_POINTS;

/** Create a theme for this */
const mediaQueryTheme: ThemeProviderProps["theme"] = theme => ({
  ...theme,
  ...createTheme(MEDIA_QUERY_BREAK_POINTS)
});

/** Component to wrap our app in, that sets this theme */
export const MediaQueryTheme: React.FC = ({ children }) => (
  <ThemeProvider theme={mediaQueryTheme}>{children}</ThemeProvider>
);
