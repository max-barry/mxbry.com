import styled from "@emotion/styled";
import { animated } from "react-spring";

import { rhythm } from "../../styles/typography.styles";

export const Frame = styled(animated.div)`
  &::before {
    content: "";
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    border: ${rhythm(2 / 5)} solid;
    border-color: inherit;
    border-top: 0;
    border-bottom: 0;
    pointer-events: none;
    z-index: -1;
  }
`;
