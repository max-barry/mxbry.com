import { PropsOf } from "@emotion/react";

import { PictureDynamic } from "../picture-dynamic";
import { MediaElement, Frame, imgStyles } from "./media-frame.styles";

type PictureDynamicProps = PropsOf<typeof PictureDynamic>;

interface Props {
  mediaElements: Omit<PictureDynamicProps, "sizes">[];
}

export const MediaFrame: React.FC<Props> = ({ mediaElements }) => (
  <Frame>
    {mediaElements.map((props, i) => (
      <MediaElement key={props.src + i}>
        <PictureDynamic {...props} sizes={[315, 420]} css={imgStyles} />
      </MediaElement>
    ))}
  </Frame>
);
