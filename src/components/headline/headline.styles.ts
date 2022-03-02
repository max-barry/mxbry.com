import styled from "@emotion/styled";

import { rhythm } from "../../styles/typography.styles";

export const Frame = styled.div`
  overflow: hidden;
  position: relative;
  margin-bottom: ${rhythm(3)};
`;

const DYNAMIC_FONT_SIZE_BASE_VW = 44;
const DYNAMIC_FONT_SIZE_SCALE_RATIO = 3.55;

export const H1 = styled.h1<{ leng: number }>`
  text-transform: uppercase;
  font-size: ${({ leng }) =>
    DYNAMIC_FONT_SIZE_BASE_VW - (leng - 1) * DYNAMIC_FONT_SIZE_SCALE_RATIO}vw;
  white-space: nowrap;
  color: var(--colors-primary-05);
  user-select: none;
  pointer-events: none;
  line-height: 0.75;
  margin-bottom: 0;
  transform: translateX(-2.5%);
`;
