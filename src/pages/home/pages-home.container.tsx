import React from "react";

import { marked } from "marked";

import { Headline } from "../../components/headline";
import { HistoryEntry } from "../../components/history-entry";
import { MediaFrame } from "../../components/media-frame";
import { withZestyProp, ZestyBorder } from "../../components/zesty-border";
import { content } from "./pages-home.constants";
import { Section } from "./pages-home.styles";

export const Home: React.FC = () => (
  <ZestyBorder>
    <Headline {...withZestyProp("")} />
    {content.map(({ zest, elements }, i) => {
      /** Key to set on the fragment. Could be better. */
      const key = zest + i;

      return (
        <Section key={key} {...withZestyProp(zest)}>
          {elements.map(element => {
            /** Key to set on the fragment. Could be better. */
            const elementKey = element.component + i;

            let result: React.ReactNode = null;

            if (element.component === "history") {
              /** Pull apart the props */
              const { content, ...props } = element.props;

              /** Compile the markdown */
              const __html = marked.parse(content);

              result = (
                <HistoryEntry {...props} dangerouslySetInnerHTML={{ __html }} />
              );
            }

            if (element.component === "media-frame")
              result = <MediaFrame {...element.props} />;

            return <React.Fragment key={elementKey}>{result}</React.Fragment>;
          })}
        </Section>
      );
    })}
  </ZestyBorder>
);
