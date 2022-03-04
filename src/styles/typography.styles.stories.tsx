import { PropsOf } from "@emotion/react";
import { Meta, Story } from "@storybook/react";

import { HeadingOne, HeadingTwo, Hr, Transition } from "./typography.styles";

export default {
  title: "Toolbox/Type"
} as Meta;

export const TransitionStory: Story = () => <Transition>Cut to</Transition>;
TransitionStory.storyName = "Transition";

export const HrStory: Story = () => <Hr />;
HrStory.storyName = "Horizontal Rule";

export const HeadingOneStory: Story = () => (
  <>
    <HeadingOne color="primary">Max Barry</HeadingOne>
    <p>
      , Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit veniam
      nobis distinctio, voluptates totam alias odio sunt commodi iusto
      perspiciatis, excepturi quo, harum qui itaque!
    </p>
  </>
);
HeadingOneStory.storyName = "Heading One";

export const HeadingTwoStory: Story = () => (
  <HeadingTwo>Ext. Amsterdam</HeadingTwo>
);
HeadingTwoStory.storyName = "Heading Two";
