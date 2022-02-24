import { PropsOf } from "@emotion/react";
import { Meta, Story } from "@storybook/react";

import { PictureDynamic } from "./picture-dynamic.component";

type Props = PropsOf<typeof PictureDynamic>;

export default {
  title: "Components/Picture Dynamic",
  component: PictureDynamic
} as Meta;

const Template: Story<Props> = args => <PictureDynamic {...args} />;

const args: Props = { src: "imagery/hh/2377601275.png", sizes: [100, 200] };

export const Standard = Template.bind({});
Standard.args = args;
