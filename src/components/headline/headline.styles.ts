import styled from "@emotion/styled";
import { up } from "styled-breakpoints";

import { rhythm } from "../../styles/typography.styles";

export const Frame = styled.div`
  overflow: hidden;
  position: relative;

  &:not(:first-child) {
    margin-top: ${rhythm(2)};

    ${up("medium")} {
      margin-top: ${rhythm(3)};
    }
  }

  &:not(:last-child) {
    margin-bottom: ${rhythm(2)};

    ${up("medium")} {
      margin-bottom: ${rhythm(3)};
    }
  }
`;

const DYNAMIC_FONT_SIZE_BASE_VW = 44;
const DYNAMIC_FONT_SIZE_SCALE_RATIO = 3.55;

export const H1 = styled.h1<{ leng: number }>`
  text-transform: uppercase;
  font-size: ${({ leng }) =>
    DYNAMIC_FONT_SIZE_BASE_VW - (leng - 1) * DYNAMIC_FONT_SIZE_SCALE_RATIO}vw;
  white-space: nowrap;
  color: var(--colors-neutral-90);
  user-select: none;
  pointer-events: none;
  // line-height: 0.75;
  margin-bottom: 0;
  transform: translateX(-2.5%);

  ${up("medium")} {
    color: var(--colors-primary-05);
  }
`;
