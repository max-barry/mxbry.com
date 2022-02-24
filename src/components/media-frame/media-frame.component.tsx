import { MediaElement, Frame } from "./media-frame.styles";

interface Props {
  mediaElements: { src: string; alt: string }[];
}

export const MediaFrame: React.FC<Props> = ({ mediaElements }) => (
  <Frame>
    {mediaElements.map(({ alt, src }, i) => (
      <MediaElement key={alt + i}>
        <img src={src} alt={alt} />
      </MediaElement>
    ))}
  </Frame>
);
