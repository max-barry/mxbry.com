import { PropsOf } from "@emotion/react";
import raw from "raw.macro";

import { HistoryEntry } from "../../components/history-entry";
import { MediaFrame } from "../../components/media-frame";

type ContentElement =
  | {
      component: "history";
      props: PropsOf<typeof HistoryEntry> & { content: string };
    }
  | {
      component: "media-frame";
      props: PropsOf<typeof MediaFrame>;
    };

export const content: ContentElement[] = [
  {
    component: "history",
    props: {
      name: "Hims Inc.",
      based: ["🇺🇸 Portland, OR", "🇳🇱 Amsterdam"],
      timeframe: "Fall 2019 - Present",
      headingGradient: ["#e0b188", "#deddd9"],
      content: raw("./md/hh.md")
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
