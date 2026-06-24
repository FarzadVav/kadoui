"use client";

import {
  CSSProperties,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import { ShowMoreContext } from "./ShowMoreContext";
import { measureShowMoreHeights } from "./showMoreMeasure";
import type { ShowMoreRootPropsT } from "./showMoreTypes";

export function ShowMoreRoot({
  maxLines,
  defaultExpanded = false,
  style,
  ...p
}: ShowMoreRootPropsT) {
  const [shouldShowMore, setShouldShowMore] = useState(false);
  const [isShowMore, setIsShowMore] = useState(defaultExpanded);
  const [clampedHeight, setClampedHeight] = useState(0);
  const [fullHeight, setFullHeight] = useState(0);

  const contentRef = useRef<HTMLDivElement>(null);

  const styles: CSSProperties = {
    position: "relative",
    ...style,
  };

  const measure = useCallback(() => {
    const element = contentRef.current;
    if (!element) return;

    const heights = measureShowMoreHeights(element, maxLines);
    if (!heights) return;

    const { fullHeight: measuredFullHeight, clampedHeight: measuredClampedHeight } =
      heights;

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

  return (
    <ShowMoreContext
      value={{
        contentRef,
        isShowMore,
        setIsShowMore,
        clampedHeight,
        fullHeight,
        shouldShowMore,
      }}
    >
      <div style={styles} {...p} />
    </ShowMoreContext>
  );
}
