import { Meta, Story } from "@storybook/react";
import { PropsOf } from "@emotion/react";

import { MediaFrame } from "./media-frame.component";
import { rhythm } from "../../styles/typography.styles";

type Props = PropsOf<typeof MediaFrame>;

export default {
  title: "Components/Media Frame",
  component: MediaFrame,
  parameters: { layout: "fullscreen" }
} as Meta;

const Template: Story<Props> = args => (
  <>
    <Buffing />
    <MediaFrame {...args} />
    <Buffing />
  </>
);

const args: Props = {
  mediaElements: [
    { src: "imagery/hh/6380691359.jpeg", alt: "" },
    { src: "imagery/hh/6380691359.jpeg", alt: "" },
    { src: "imagery/hh/6380691359.jpeg", alt: "" },
    { src: "imagery/hh/6380691359.jpeg", alt: "" },
    { src: "imagery/hh/6380691359.jpeg", alt: "" }
  ]
};

export const Standard = Template.bind({});
Standard.args = args;

function Buffing() {
  return (
    <p style={{ maxWidth: 1200, margin: `${rhythm(1)} auto` }}>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat aperiam
      vero pariatur voluptas sequi corporis debitis, nihil aspernatur tempore
      saepe nostrum facilis, alias magnam dolore dolorum necessitatibus
      blanditiis ducimus a molestias. Qui nobis repellat laborum nostrum sit
      blanditiis impedit vel non. Nihil, sint nulla aliquam deleniti quisquam
      expedita autem repellat est maiores amet enim, esse illum ullam! Fuga
      excepturi neque distinctio autem eius aut perferendis aliquid, incidunt
      doloribus pariatur unde vitae quisquam quibusdam ea deleniti nesciunt
      impedit numquam iusto expedita alias accusantium reiciendis soluta amet
      aspernatur. Delectus, commodi corporis rerum saepe harum, dolores sapiente
      optio obcaecati, repudiandae dolore fuga eum odio enim tempora asperiores
      ipsam illum. Corrupti sunt minima eaque, ea cum rerum, officiis placeat
      voluptate quia laudantium totam fuga incidunt cumque iste! Pariatur
      consectetur accusamus esse ut eveniet magni hic aspernatur blanditiis
      deserunt tempore cumque, obcaecati illum ipsa animi voluptates accusantium
      reiciendis autem praesentium quidem sit dolores modi debitis velit
      numquam? Eveniet ipsam in molestiae sint fuga reiciendis esse doloribus,
      suscipit labore exercitationem tenetur possimus. Magni optio molestias
      exercitationem voluptates magnam nesciunt voluptatum repellendus
      molestiae, aperiam distinctio odit quod vel aut quibusdam quia explicabo.
      Totam facilis ullam recusandae quia sunt minus consectetur atque magni
      ratione facere, numquam laudantium quasi!
    </p>
  );
}
