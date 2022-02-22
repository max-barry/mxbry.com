import { Meta, Story } from "@storybook/react";

import { rhythm } from "../../styles/text.styles";
import { PropsOf } from "../../types/utils.types";
import { HistoryEntry } from "./history-entry.component";

type Props = PropsOf<typeof HistoryEntry>;

export default {
  title: "Components/History Entry",
  component: HistoryEntry,
  parameters: { layout: "fullscreen" }
} as Meta;

const args: Props = {
  name: "Hims, Inc.",
  timeframe: "Summer 2021 - Present",
  based: "🇳🇱 Amsterdam, Netherlands",
  headingGradient: ["red", "blue"]
};

const lorem = `
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores officia
deserunt amet sunt nemo fuga nam doloribus eveniet! Sint assumenda nostrum,
laboriosam, eum, voluptatem quisquam aspernatur minus optio officiis qui
eaque possimus ipsum sit sapiente deserunt molestiae atque eligendi quaerat
labore minima. Maxime enim necessitatibus, odio ipsum unde rem fugit dolore
explicabo! Distinctio perspiciatis voluptatibus nostrum veniam nam
reiciendis eos, magni consectetur ab quaerat quo iure perferendis autem,
explicabo suscipit nemo natus, placeat exercitationem velit maiores
sapiente. Temporibus, accusamus mollitia tempore laboriosam ipsum est
provident quaerat autem molestias ut quae aperiam? Unde velit pariatur quia
odio autem nobis aliquid minima quibusdam accusantium quidem accusamus
dolores nisi illum iure expedita, ratione veritatis quos. Impedit beatae
corrupti accusamus ullam sunt dolores deleniti ad cum repudiandae sapiente
voluptates, velit, consequatur ea omnis id consequuntur labore quo tempore
non necessitatibus. Veritatis alias, perspiciatis nihil illum quos laborum
est magnam, sed minima illo, expedita eius architecto laboriosam accusantium
perferendis fugit officia deserunt aut reprehenderit. Accusamus consequuntur
vero hic, nobis, vel dolorum labore ullam veniam, dolores fuga quidem
consectetur et earum explicabo. Ea, accusantium nobis. Quaerat esse odio
laborum quas maxime optio quasi dolores, debitis incidunt, est, culpa eum ex
recusandae? Fuga veniam harum quis quidem quia beatae similique. Rem
mollitia, voluptatum dolorem fuga illo sed dignissimos aliquid totam
eligendi quaerat accusamus sunt voluptates perspiciatis. Laudantium debitis
fugit vel ad aliquam? Quae dolores sint eveniet tempora earum quod iusto sit
natus tenetur libero quo recusandae numquam in temporibus laudantium
mollitia, nisi esse nostrum voluptatem cum. Iure pariatur deserunt natus
dolor. Distinctio, a odit, unde consequuntur, maiores facilis ab modi et
voluptatem deserunt dolore repellendus officia tempora fugit necessitatibus
qui consequatur possimus sit totam debitis aliquam? Recusandae, qui ipsum
ipsa eos rerum saepe nisi quasi dolore, illum vero sint debitis ex quidem
optio animi voluptatibus omnis a.
`;

const Template: Story<Props> = args => (
  <div style={{ maxWidth: rhythm(37), margin: "0 auto" }}>
    <p style={{ marginBottom: rhythm(1) }}>{lorem}</p>
    <HistoryEntry {...args}>
      <p>{lorem}</p>
    </HistoryEntry>
    <p style={{ marginTop: rhythm(1) }}>{lorem}</p>
    <p>{lorem}</p>
    <p>{lorem}</p>
  </div>
);

export const Standard = Template.bind({});
Standard.args = args;
