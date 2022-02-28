import { HTMLAttributes } from "react";

import { Frame, H1, Logline } from "./headline.styles";

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const Headline: React.FC<Props> = props => (
  <Frame {...props}>
    <H1>mxbry</H1>
    <Logline>
      Product development &amp; engineering
      <br />
      <strong>Experienced in company building</strong>
    </Logline>
  </Frame>
);
