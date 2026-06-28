"use client";

import { useCallback, useLayoutEffect, useRef, useState } from "react";

import { measureShowMoreHeights } from "./showMoreMeasure";

export function useShowMoreMeasure(maxLines: number) {
  const [shouldShowMore, setShouldShowMore] = useState(false);
  const [clampedHeight, setClampedHeight] = useState(0);
  const [fullHeight, setFullHeight] = useState(0);

  const contentRef = useRef<HTMLDivElement>(null);

  const measure = useCallback(() => {
    const element = contentRef.current;
    if (!element) return;

    const heights = measureShowMoreHeights(element, maxLines);
    if (!heights) return;

    const {
      fullHeight: measuredFullHeight,
      clampedHeight: measuredClampedHeight,
    } = heights;

    setClampedHeight(measuredClampedHeight);
    setFullHeight(measuredFullHeight);
    setShouldShowMore(measuredFullHeight > measuredClampedHeight + 1);
  }, [maxLines]);

  useLayoutEffect(() => {
    measure();

    const element = contentRef.current;
    if (!element) return;

    const observer = new ResizeObserver(measure);
    observer.observe(element);

    return () => observer.disconnect();
  }, [measure]);

  return {
    contentRef,
    shouldShowMore,
    clampedHeight,
    fullHeight,
  };
}
