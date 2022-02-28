import React, { useEffect, useState } from "react";

/**
 * Watch when an element intersects with the viewport.
 *
 * @example
 *  const observe = useIntersectionObserver(onObservation, { root: ... })
 *  return <div {...observe}>Hi</div>
 *
 * @param {*} _$target What you wnat to observer the intersection of
 * @param {*} onIntersection Function to run on observation
 * @param {*} options Intersection observer function
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API}
 *
 * @author Max
 */
export function useIntersectionObserver<E extends HTMLElement>(
  _$target: E | E[] | React.RefObject<E> | null,
  intersectionObserverCallback?: IntersectionObserverCallback,
  options: IntersectionObserverInit = {}
) {
  /** Track if the _$target is visible or not */
  const [isVisible, setIsVisible] = useState(false);

  // Create an intersection observer
  const [io] = useState(
    () =>
      new window.IntersectionObserver((...args) => {
        /**
         * Run the resize function.
         * @todo: move to an idle frame callback
         */
        intersectionObserverCallback && intersectionObserverCallback(...args);
        /** Set if the object is visible */
        const [[{ isIntersecting }]] = args;
        setIsVisible(isIntersecting);
      }, options)
  );

  /** onMount attach the observer */
  useEffect(() => {
    if (!_$target || !io) return;

    /** Normalize the $target to a DOM element */
    const $target = [
      "current" in _$target ? _$target.current : _$target
    ].flat();

    /** Attach the observer */
    $target.forEach($el => $el && io.observe($el));

    /** onUnmount disconnect the observer */
    return () => {
      try {
        io.disconnect();
      } catch (error) {
        console.warn("Could not disconnect the Intersection Observer");
      }
    };
  }, [_$target, io]);

  return isVisible;
}
