import { PropsOf } from "@emotion/react";
import { Meta, Story } from "@storybook/react";

import { Headline } from "./headline.component";

type Props = PropsOf<typeof Headline>;

export default {
  title: "Components/Headline",
  component: Headline,
  parameters: { layout: "fullscreen" }
} as Meta;

const Template: Story<Props> = args => <Headline {...args} />;

const args: Props = {
  children: ""
};

export const Work = Template.bind({});
Work.args = { ...args, children: "Work" };

export const Contact = Template.bind({});
Contact.args = { ...args, children: "Contact" };
