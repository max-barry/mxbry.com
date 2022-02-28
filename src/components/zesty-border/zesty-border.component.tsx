import { useRef, useEffect, useCallback, useState } from "react";

import { useSpring, config } from "react-spring";

import { useIntersectionObserver } from "../../helpers/web.helpers";
import { COLORS } from "../../styles/css-variables.styles";
import { Frame } from "./zesty-border.styles";

interface Props {
  defaultBorderColor?: string;
}

const DATA_ZESTY_KEY = "data-zesty";

export const ZestyBorder: React.FC<Props> = ({
  defaultBorderColor = COLORS.primary[100],
  children
}) => {
  /** List of elements to observe */
  const [observed, setObserved] = useState<HTMLElement[] | null>(null);

  /** Store in state our target color */
  const [borderColor, setBorderColor] = useState<string | undefined>(
    defaultBorderColor
  );

  /** Create a spring on the border color */
  const spring = useSpring({
    to: { borderColor: borderColor || defaultBorderColor },
    config: config.gentle
  });

  /** Callback to run when we observe a new entry */
  const onObservation: IntersectionObserverCallback = useCallback(entries => {
    /** Find all of the intersecting entries and sort by their y */
    const [lastIntersectingEntry] = entries
      .filter(({ isIntersecting }) => isIntersecting)
      .sort((a, b) => b.boundingClientRect.y - a.boundingClientRect.y);

    /** Find the zest attribute of this */
    const nextColor =
      lastIntersectingEntry?.target.getAttribute(DATA_ZESTY_KEY) || undefined;

    /** Set this on state */
    !!lastIntersectingEntry && setBorderColor(nextColor);
  }, []);

  /** Callback for when you have a new DOM mutation */
  const onMutation: MutationCallback = useCallback(mutations => {
    /** Find all added mutations that match the data attribute */
    const addedElements = mutations
      .flatMap(
        ({ addedNodes }) => Array.from(addedNodes) as any as HTMLElement[]
      )
      .filter($el => "hasAttribute" in $el && $el.hasAttribute(DATA_ZESTY_KEY));

    /** Set this on the observed */
    setObserved(current => [...(current || []), ...addedElements]);
  }, []);

  /** Attach an intersection observer */
  useIntersectionObserver(observed, onObservation, { threshold: 0.6 });

  /** Ref to prevent double setup */
  const hasMutationObserver = useRef(false);

  /** When we mount attach a mutation observer for new zesty elements */
  useEffect(() => {
    /** Can you get the root? */
    const $root = document.getElementById("root");

    if (hasMutationObserver.current || !$root) return;
    hasMutationObserver.current = true;

    /** Get the initial selection */
    setObserved(
      Array.from(document.querySelectorAll<HTMLElement>(`[${DATA_ZESTY_KEY}]`))
    );

    /** Create a mutation observer */
    const mo = new MutationObserver(onMutation);

    /** Observe the body */
    mo.observe($root, {
      childList: true,
      subtree: true,
      attributes: false,
      characterData: false
    });

    return () => {
      mo.disconnect();
    };
  }, [onMutation]);

  return <Frame style={spring}>{children}</Frame>;
};

/** Returns the zesty attribute */
export function withZestyProp(color: string) {
  return { [DATA_ZESTY_KEY]: color };
}
