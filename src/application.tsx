import { GlobalStyles } from "./styles/global.styles";
import { MediaQueryTheme } from "./styles/media-queries.styles";

// @todo: lazy load
import { Home } from "./pages/home/pages-home.container";

export const Application: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <MediaQueryTheme>
        <main>
          <Home />
        </main>
      </MediaQueryTheme>
    </>
  );
};
