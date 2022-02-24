import styled from "@emotion/styled";

import { rhythm } from "../../styles/typography.styles";

export const Frame = styled.section`
  display: grid;
  grid-template-columns: 35% 1fr;
  grid-gap: 0 ${rhythm(2)};
`;

export const Heading = styled.h1<{ headingGradient: string[] }>`
  margin-bottom: ${rhythm(0)};
  position: sticky;

  // For the benefit of intersection observer
  top: -1px;

  [data-stuck="true"] & {
    @supports (-webkit-background-clip: text) {
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-image: linear-gradient(
        ${({ headingGradient }) => headingGradient.join(", ")}
      );
    }
  }
`;

export const Subheadings = styled.div`
  grid-column: 1;
  transition: 120ms opacity, 190ms transform ease-out;
  transform-origin: top left;

  [data-stuck="true"] & {
    opacity: 0.3;
    transform: scale(0.95);
  }
`;

export const Subheading = styled.p`
  margin-bottom: ${rhythm(0)};
`;
