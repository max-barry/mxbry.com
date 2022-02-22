import { MediaElement, Frame } from "./media-frame.styles";

interface Props {
  mediaElements: { src: string; alt: string }[];
}

export const MediaFrame: React.FC<Props> = ({ mediaElements }) => {
  return (
    <Frame>
      {mediaElements.map(({ alt, src }) => (
        <MediaElement key={alt}>
          <img src={src} alt={alt} />
        </MediaElement>
      ))}
    </Frame>
  );
};
