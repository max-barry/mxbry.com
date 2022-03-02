import { css } from "@emotion/react";
import { up } from "styled-breakpoints";

import { rhythm } from "../styles/typography.styles";

export const container = props => css`
  max-width: var(--dimensions-container);
  width: 100%;
  margin: 0 auto;

  padding-left: ${rhythm(3 / 4)};
  padding-right: ${rhythm(3 / 4)};

  ${up("large")(props)} {
    padding-left: 0;
    padding-right: 0;
  }
`;
