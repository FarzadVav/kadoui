"use client";

import { use } from "react";

import { ShowMoreContext } from "./ShowMoreContext";
import type { ShowMoreContentPropsT } from "./showMoreTypes";

export function ShowMoreContent({ children, style, ...p }: ShowMoreContentPropsT) {
  const { contentRef, shouldShowMore, isShowMore, maxHeight } = use(ShowMoreContext);

  return (
    <div
      ref={contentRef}
      style={{
        overflow: "hidden",
        transition: "all 150ms ease",
        height: shouldShowMore
          ? isShowMore
            ? contentRef.current?.scrollHeight
              ? `${contentRef.current.scrollHeight}px`
              : "auto"
            : maxHeight
          : "auto",
        ...style
      }}
      {...p}
    >
      {children}
    </div>
  )
}