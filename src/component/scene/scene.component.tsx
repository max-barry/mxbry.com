import { PropsOf } from "@emotion/react";

import { HeadingTwo, Transition } from "../../styles/typography.styles";
import { Title, Frame, Interior } from "./scene.styles";

type TitleProps = PropsOf<typeof Title>;

interface Props {
  /** When? */
  super: string;
  /** Where? */
  ext: React.ReactNode;
  /** How we transition into this scene */
  transition: string;
  /** Props for the <Title /> */
  title: {
    /** Text to display */
    text: string;
    /** Color of the title */
    color: TitleProps["color"];
    /** Shift the prop of the title */
    as?: React.ElementType;
  };
}

export const Scene: React.FC<Props> = ({
  transition,
  ext,
  super: sup,
  title: { text: titleText, ...title },
  children
}) => (
  <Frame>
    <Transition>{transition}</Transition>
    <Interior>
      <div>
        <HeadingTwo>Super: “{sup}”</HeadingTwo>
        <HeadingTwo>Ext. {ext}</HeadingTwo>
      </div>
      <div>
        <Title {...title}>{titleText}</Title>
        {children}
      </div>
    </Interior>
  </Frame>
);
