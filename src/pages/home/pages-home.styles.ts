import styled from "@emotion/styled";

import { rhythm } from "../../styles/typography.styles";

export const Wrap = styled.div`
  z-index: 0;
  position: relative;

  &::before {
    content: "";
    z-index: -1;
    pointer-events: none;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border: ${rhythm(3 / 4)} solid var(--colors-primary-100);
    border-top: 0;
    border-bottom: 0;
  }
`;
