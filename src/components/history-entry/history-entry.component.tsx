import { useRef, useState } from "react";

import { useIntersectionObserver } from "../../helpers/web.helpers";
import {
  Frame,
  Heading,
  Subheading,
  Subheadings
} from "./history-entry.styles";

interface Props {
  /** Name of the company */
  name: string;
  /** When did this job take place */
  timeframe: string;
  /** Where were you based for the job */
  based: string[];
  /** The linear-gradient of the heading on stick. e.g. [red, blue] or [red, blue, green, 45deg] */
  headingGradient: string[];
  /** Inner HTML to set as children */
  dangerouslySetInnerHTML?: React.DOMAttributes<Element>["dangerouslySetInnerHTML"];
  /** Should this have the sticky effect? default true */
  stickable?: boolean;
}

export const HistoryEntry: React.FC<Props> = ({
  headingGradient,
  name,
  based,
  timeframe,
  children,
  stickable = true,
  dangerouslySetInnerHTML: innerHTML
}) => {
  /** Ref for the frame */
  const $heading = useRef<HTMLHeadingElement>(null);

  /** State to check if the heading is stuck */
  const [isStuck, setIsStuck] = useState(false);

  /** Attach an intersection observer to the heading */
  useIntersectionObserver(
    stickable ? $heading : null,
    ([{ intersectionRatio }]) => setIsStuck(intersectionRatio < 1),
    { threshold: 1 }
  );

  return (
    <Frame data-stuck={isStuck}>
      <Heading
        ref={$heading}
        headingGradient={headingGradient}
        stickable={stickable}
      >
        {name}
      </Heading>
      <Subheadings>
        <Subheading>
          <strong>{timeframe}</strong>
        </Subheading>
        {based.map(where => (
          <Subheading key={where}>{where}</Subheading>
        ))}
      </Subheadings>
      {innerHTML && <div dangerouslySetInnerHTML={innerHTML} />}
      {!innerHTML && children && <div>{children}</div>}
    </Frame>
  );
};
