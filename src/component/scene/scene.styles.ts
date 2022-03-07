import styled from "@emotion/styled";

import { COUNTER_RESET_NAME_SCENES } from "../../styles/tokens.styles";
import {
  HeadingOne,
  HeadingTwo,
  PARAGRAPH_BASE_MARGIN,
  rhythm
} from "../../styles/typography.styles";

export const Frame = styled.section`
  --core-margin: ${rhythm(1)};

  &:not(:last-of-type) {
    margin-bottom: calc(2 * var(--core-margin));
  }
`;

export const Interior = styled.div`
  position: relative;
  display: grid;
  grid-gap: var(--core-margin);
  margin-top: calc(2 * var(--core-margin));

  &::before {
    content: counter(${COUNTER_RESET_NAME_SCENES}) ".";
    counter-increment: ${COUNTER_RESET_NAME_SCENES};
    position: absolute;
    left: calc(-3 * var(--core-margin));
  }
`;

export const Title = styled(HeadingOne)`
  display: inline-block;

  & + p {
    display: inline;
  }

  & + p + * {
    margin-top: ${PARAGRAPH_BASE_MARGIN};
  }
`;

export const ExtHeading = styled(HeadingTwo)`
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-gap: 0 1ch;

  > span:not(:first-child) {
    grid-column: 2;
  }
`;
