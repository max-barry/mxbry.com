import styled from "@emotion/styled";

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

export const Logline = styled.div`
  text-align: center;
  transform: translateY(-100%);
`;

export const H3 = styled.h3`
  &:first-of-type {
    font-weight: 300;
  }

  &:last-of-type {
    font-weight: 500;
  }
`;
