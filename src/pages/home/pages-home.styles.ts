import styled from "@emotion/styled";
import { up } from "styled-breakpoints";
import { COUNTER_RESET_NAME_SCENES } from "../../styles/tokens.styles";

import { rhythm } from "../../styles/typography.styles";

export const Frame = styled.div`
  --pad-horizontal: ${rhythm(3 / 4)};
  --pad-vertical: ${rhythm(4)};

  max-width: var(--dimensions-container);
  width: 100%;
  margin: 0 auto;

  padding-top: var(--pad-vertical);
  padding-bottom: var(--pad-vertical);

  padding-left: var(--pad-horizontal);
  padding-right: var(--pad-horizontal);

  counter-reset: ${COUNTER_RESET_NAME_SCENES};

  ${up("large")} {
    --pad-vertical: 0;
    --pad-vertical: ${rhythm(4)};
  }
`;
