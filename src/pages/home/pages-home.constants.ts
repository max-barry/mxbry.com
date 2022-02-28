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

interface ContentSection {
  zest: string;
  elements: ContentElement[];
}

export const content: ContentSection[] = [
  {
    zest: "#e0b188",
    elements: [
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
            { src: "imagery/hh/8554291298.png", alt: "" }
          ]
        }
      }
    ]
  },
  {
    zest: "#08070b",
    elements: [
      {
        component: "history",
        props: {
          name: "Narative",
          based: ["🇺🇸 Portland, OR", "🇵🇹 Lisbon"],
          timeframe: "Summer 2018 - Fall 2019",
          headingGradient: ["black", "black"],
          content: raw("./md/n.md"),
          stickable: false
        }
      }
    ]
  },
  {
    zest: "#08070b",
    elements: [
      {
        component: "history",
        props: {
          name: "Unamed",
          based: ["🇺🇸 Portland, OR"],
          timeframe: "Spring 2018",
          headingGradient: ["black", "black"],
          content: raw("./md/un.md"),
          stickable: false
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
    ]
  },
  {
    zest: "#4eac7b",
    elements: [
      {
        component: "history",
        props: {
          name: "Velmer",
          based: ["🇺🇸 Portland, OR", "🇬🇧 London"],
          timeframe: "Summer 2017 - Summer 2018",
          headingGradient: ["#4eac7b", "#a6ffd3"],
          content: raw("./md/v.md")
        }
      },
      {
        component: "media-frame",
        props: {
          mediaElements: [
            { src: "imagery/v/hy4L83yrfUrV5FXh.png", alt: "" },
            { src: "imagery/v/Tgn4RgHPzFvk8bdV.png", alt: "" },
            { src: "imagery/v/UzK2GzQnR5apHP8X.png", alt: "" },
            { src: "imagery/v/wjaR9uGKvTArEefn.png", alt: "" },
            { src: "imagery/v/ZV4GUXSHPs9vpuk5.png", alt: "" }
          ]
        }
      }
    ]
  },
  {
    zest: "#fe6124",
    elements: [
      {
        component: "history",
        props: {
          name: "Route1",
          based: ["🇬🇧 London"],
          timeframe: "Spring 2016 - Summer 2017",
          headingGradient: ["#316894", "#0d304b"],
          content: raw("./md/r.md")
        }
      },
      {
        component: "media-frame",
        props: {
          mediaElements: [
            { src: "imagery/r/5394285394.png", alt: "" },
            { src: "imagery/r/6107123711.png", alt: "" }
          ]
        }
      }
    ]
  },
  {
    zest: "#e6233d",
    elements: [
      {
        component: "history",
        props: {
          name: "Arnold Worldwide",
          based: ["🇺🇸 Boston, MA"],
          timeframe: "Fall 2015",
          headingGradient: ["black", "black"],
          content: raw("./md/arn.md"),
          stickable: false
        }
      }
    ]
  },
  {
    zest: "#e6233d",
    elements: [
      {
        component: "history",
        props: {
          name: "Havas Group",
          based: ["🇬🇧 London"],
          timeframe: "Spring 2013 - Spring 2016",
          headingGradient: ["black", "black"],
          content: raw("./md/hav.md"),
          stickable: false
        }
      },
      {
        component: "media-frame",
        props: {
          mediaElements: [
            { src: "imagery/hav/3877491966.png", alt: "" },
            { src: "imagery/hav/8423992683.png", alt: "" },
            { src: "imagery/hav/7648901920.png", alt: "" },
            { src: "imagery/hav/5099211551.png", alt: "" }
          ]
        }
      }
    ]
  }
];
