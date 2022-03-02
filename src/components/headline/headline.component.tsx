import { HTMLAttributes } from "react";

import { Frame, H1 } from "./headline.styles";

interface Props extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  children: string;
}

export const Headline: React.FC<Props> = ({ children, ...props }) => (
  <Frame {...props}>
    <H1 leng={children.length}>{children}</H1>
  </Frame>
);
