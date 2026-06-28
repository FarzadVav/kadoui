"use client";

import { type CSSProperties, use } from "react";

import { ShowMoreContext } from "./ShowMoreContext";
import type { ShowMoreContentPropsT } from "./showMoreTypes";

export function ShowMoreContent({ style, ...p }: ShowMoreContentPropsT) {
  const { contentRef, shouldShowMore, isShowMore, clampedHeight, fullHeight } =
    use(ShowMoreContext);

  const styles: CSSProperties = {
    overflow: "hidden",
    transition: shouldShowMore ? "height 150ms ease" : undefined,
    height: shouldShowMore
      ? isShowMore
        ? fullHeight > 0
          ? `${fullHeight}px`
          : "auto"
        : clampedHeight > 0
          ? `${clampedHeight}px`
          : "auto"
      : "auto",
    ...style,
  };

  return <div ref={contentRef} style={styles} {...p} />;
}
