import { PropsOf } from "@emotion/react";
import { Meta, Story } from "@storybook/react";

import { Scene } from "./scene.component";

type Props = PropsOf<typeof Scene>;

export default {
  title: "Components/Scene",
  component: Scene
} as Meta;

const Template: Story<Props> = args => (
  <div style={{ maxWidth: 480, margin: "0 auto" }}>
    <Scene {...args}>
      <p>
        lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iure
        perspiciatis totam asperiores dignissimos magni corporis voluptatibus
        rerum animi nostrum.
      </p>
    </Scene>
  </div>
);

const args: Props = {
  transition: "Fade in",
  super: "2022",
  ext: "Amsterdam",
  title: {
    color: "primary",
    text: "Max Barry",
    as: "h1"
  }
};

export const Standard = Template.bind({});
Standard.args = args;
