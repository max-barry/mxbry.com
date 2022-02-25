import styled from "@emotion/styled";

import { container } from "../../helpers/components.helpers";
import { rhythm } from "../../styles/typography.styles";

export const Frame = styled.section`
  display: grid;
  grid-template-columns: 30% 1fr;
  grid-gap: ${rhythm(1 / 4)} ${rhythm(2)};

  ${container};
`;

export const Heading = styled.h1<{ headingGradient: string[] }>`
  margin-bottom: ${rhythm(0)};
  position: sticky;
  z-index: 1;

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
