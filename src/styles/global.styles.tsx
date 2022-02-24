import { Global } from "@emotion/react/macro";

import { cssResetCustom, cssResetStandard } from "./css-resets.styles";
import { cssVariables } from "./css-variables.styles";
import {
  globalTypographyStyles as typographyStyles,
  fontFaces
} from "./typography.styles";

export const GlobalStyles = () => (
  <Global
    styles={[
      fontFaces,
      cssVariables,
      cssResetStandard,
      typographyStyles,
      cssResetCustom
    ]}
  />
);
