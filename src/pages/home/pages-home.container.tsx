import React from "react";

import { marked } from "marked";

import { HistoryEntry } from "../../components/history-entry";
import { MediaFrame } from "../../components/media-frame";
import { content } from "./pages-home.constants";

export const Home: React.FC = () => {
  return (
    <>
      {content.map((element, i) => {
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

        /** Key to set on the fragment. Could be better. */
        const key = element.component + i;

        return <React.Fragment key={key}>{result}</React.Fragment>;
      })}
    </>
  );
};
