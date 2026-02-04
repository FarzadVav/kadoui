"use client"

import { HTMLAttributes, use } from "react";

import { ShowMoreContext } from "./ShowMoreContext";

export type ShowMoreContentPropsT = HTMLAttributes<HTMLDivElement>;

export function ShowMoreContent({ children, style, ...props }: ShowMoreContentPropsT) {
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
      {...props}
    >
      {children}
    </div>
  )
}