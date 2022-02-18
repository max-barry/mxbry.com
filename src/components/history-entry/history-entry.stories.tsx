import { Meta, Story } from "@storybook/react";

import { PropsOf } from "../../types/utils.types";
import { HistoryEntry } from "./history-entry.component";

type Props = PropsOf<typeof HistoryEntry>;

export default {
  title: "Components/History Entry",
  component: HistoryEntry,
  parameters: { layout: "fullscreen" }
} as Meta;

const args: Props = {
  name: ""
};

export const Standard: Story<Props> = args => <HistoryEntry {...args} />;
Standard.args = args;
