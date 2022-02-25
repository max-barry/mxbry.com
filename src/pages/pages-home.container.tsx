import { PropsOf } from "@emotion/react";
import React from "react";

import { HistoryEntry } from "../components/history-entry";
import { MediaFrame } from "../components/media-frame";

type ContentElement =
  | {
      component: "history";
      props: PropsOf<typeof HistoryEntry>;
    }
  | {
      component: "media-frame";
      props: PropsOf<typeof MediaFrame>;
    };

const content: ContentElement[] = [
  {
    component: "history",
    props: {
      name: "Hims Inc.",
      based: ["🇺🇸 Portland, OR", "🇳🇱 Amsterdam"],
      timeframe: "Fall 2019 - Present",
      headingGradient: ["red", "blue"]
    }
  },
  {
    component: "media-frame",
    props: {
      mediaElements: [
        { src: "imagery/hh/2377601275.png", alt: "" },
        { src: "imagery/hh/3762754392.png", alt: "" },
        { src: "imagery/hh/6380691359.jpeg", alt: "" },
        { src: "imagery/hh/5588621125.png", alt: "" },
        { src: "imagery/hh/6828698345.jpg", alt: "" },
        { src: "imagery/hh/8554291298.png", alt: "" }
      ]
    }
  }
];

export const Home: React.FC = () => {
  return (
    <>
      {content.map((element, i) => {
        let result: React.ReactNode = null;

        if (element.component === "history")
          result = <HistoryEntry {...element.props} />;

        if (element.component === "media-frame")
          result = <MediaFrame {...element.props} />;

        /** Key to set on the fragment. Could be better. */
        const key = element.component + i;

        return <React.Fragment key={key}>{result}</React.Fragment>;
      })}
    </>
  );
};
