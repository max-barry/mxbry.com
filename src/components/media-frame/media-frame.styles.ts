import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { up } from "styled-breakpoints";

import { rhythm } from "../../styles/typography.styles";

export const Frame = styled.div`
  --gap: ${rhythm(1 / 2)};

  display: flex;
  gap: var(--gap);
  overflow: auto;
  padding: calc(var(--gap) * 2) 0;

  ${up("medium")} {
    --gap: ${rhythm(1)};
  }

  > * {
    flex-shrink: 0;
  }

  > *:first-child {
    margin-left: var(--gap);
  }

  > *:last-child {
    margin-right: var(--gap);
  }

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
`;

export const MediaElement = styled.div`
  max-width: ${rhythm(12)};
  max-height: ${rhythm(12)};
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.14),
    0 12px 4px -8px rgba(0, 0, 0, 0.2), 0 4px 20px 0 rgba(0, 0, 0, 0.12);
`;

/** Styles to set our picture to cover */
export const imgStyles = css`
  object-fit: cover;
  object-position: center;
  height: 100%;
`;
