import { GlobalStyles } from "./styles/global.styles";
import { MediaQueryTheme } from "./styles/media-queries.styles";

// @todo: lazy load
import { Home } from "./pages/home/pages-home.container";

export const Application: React.FC = () => (
  <MediaQueryTheme>
    <GlobalStyles />
    <main>
      <Home />
    </main>
  </MediaQueryTheme>
);
