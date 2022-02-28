import styled from "@emotion/styled";

import { rhythm } from "../../styles/typography.styles";

export const Section = styled.section`
  &:not(:last-of-type) {
    margin-bottom: ${rhythm(2)};
  }
`;
