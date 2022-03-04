import { Global } from "@emotion/react";

import { cssResetCustom, cssResetStandard } from "./resets.styles";
import { tokensAsVariables } from "./tokens.styles";
import { globalTypeStyles, fontFaces } from "./typography.styles";

export const GlobalStyles = () => (
  <Global
    styles={[
      fontFaces,
      tokensAsVariables,
      cssResetStandard,
      cssResetCustom,
      globalTypeStyles
    ]}
  />
);
