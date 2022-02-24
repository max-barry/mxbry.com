interface Props {
  sizes: [mobile: number, tablet: number, desktop: number];
}

export const PictureDynamic: React.FC<Props> = ({ sizes }) => {
  return <picture></picture>;
};
