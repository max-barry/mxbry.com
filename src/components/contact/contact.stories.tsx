import { PropsOf } from "@emotion/react";
import { Meta, Story } from "@storybook/react";

import { Contact } from "./contact.component";

type Props = PropsOf<typeof Contact>;

export default {
  title: "Components/Contact",
  component: Contact,
  parameters: { layout: "fullscreen" }
} as Meta;

const Template: Story<Props> = args => <Contact {...args} />;

const args: Props = {
  children: ""
};

export const Standard = Template.bind({});
Standard.args = args;
