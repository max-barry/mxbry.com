import styled from "@emotion/styled";

import { container } from "../../helpers/style-shortcuts.helpers";

export const Frame = styled.div`
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const H1 = styled.h1`
  text-transform: uppercase;
  font-size: 32vw;
  white-space: nowrap;
  color: var(--colors-primary-05);
  user-select: none;
  pointer-events: none;
  line-height: 0.75;
  margin-bottom: 0;
  transform: translateY(-10%) translateX(-5%);
`;

export const Logline = styled.h4`
  text-align: right;
  transform: translateY(-100%);
  font-weight: 300;
  margin-bottom: 0;
  line-height: 1.75;
  ${container};

  > strong {
    font-weight: 500;
  }
`;
