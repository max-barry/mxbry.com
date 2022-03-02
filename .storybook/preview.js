import { ThemeProvider } from "@emotion/react";
import { GlobalStyles } from "../src/styles/global.styles";
import { MediaQueryTheme } from "../src/styles/media-queries.styles";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};

export const decorators = [
  Story => (
    <MediaQueryTheme>
      <GlobalStyles />
      <Story />
    </MediaQueryTheme>
  )
];
