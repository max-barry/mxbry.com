import { PropsOf } from "@emotion/react";
import { Meta, Story } from "@storybook/react";

import { withZestyProp, ZestyBorder } from ".";

type Props = PropsOf<typeof ZestyBorder>;

export default {
  title: "Components/Zesty Border",
  component: ZestyBorder,
  parameters: { layout: "fullscreen" }
} as Meta;

let colors = ["red", "blue", "green", "black", "beige"];
colors = [...colors, ...colors];

const Template: Story<Props> = args => (
  <ZestyBorder {...args}>
    {Array.from({ length: 10 }).map((_, i) => (
      <p key={i} {...withZestyProp(colors[i])}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum a, aut
        enim architecto accusamus eaque dolore. Animi explicabo in repudiandae
        eaque, consequuntur, qui eligendi, quibusdam esse inventore odio totam
        iusto tenetur enim. Ab facilis alias beatae veritatis odio? Placeat,
        consectetur! Eligendi rerum impedit quasi optio, porro similique harum
        perspiciatis repellendus maiores consequuntur praesentium sit totam quis
        inventore, voluptatibus velit soluta saepe natus eveniet nulla illum
        aspernatur vel cum corrupti. Neque delectus mollitia, maxime deleniti
        laudantium illum porro nobis officiis suscipit id quae tempore impedit
        eaque earum cum illo quisquam eius officia? Quisquam ad pariatur tenetur
        incidunt assumenda quibusdam voluptas porro. Nemo molestias atque
        voluptatum animi perspiciatis commodi vitae id tempore fugit fuga
        pariatur alias unde, doloribus reiciendis aut vel architecto expedita
        vero, praesentium tenetur et cupiditate ducimus. Sunt tempora assumenda
        vitae corporis tempore a. Nihil eaque ad sit nostrum quasi possimus
        rerum officiis reiciendis officia vitae, pariatur optio dignissimos
        distinctio consequuntur at commodi architecto illum impedit ut totam
        aliquam nulla. Culpa eos omnis dolorem soluta unde fuga nihil, est,
        obcaecati sapiente reprehenderit vel ullam nulla, ab veniam sint. Velit
        perspiciatis dolores ratione enim beatae dolorum quasi id, possimus
        quaerat aperiam totam eaque incidunt unde voluptate numquam. Ullam
        adipisci quia deserunt!
      </p>
    ))}
  </ZestyBorder>
);

const args: Props = {};

export const Standard = Template.bind({});
Standard.args = args;
