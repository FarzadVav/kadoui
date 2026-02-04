"use client"

import { HTMLAttributes, useEffect, useRef, useState } from "react";

import { ShowMoreContext } from "./ShowMoreContext";

export type ShowMoreRootPropsT = HTMLAttributes<HTMLDivElement> & {
  maxLines: number;
  defaultExpanded?: boolean;
}

export function ShowMoreRoot({ maxLines, defaultExpanded = false, style, ...p }: ShowMoreRootPropsT) {
  const [shouldShowMore, setShouldShowMore] = useState(false);
  const [isShowMore, setIsShowMore] = useState(defaultExpanded);
  const [maxHeight, setMaxHeight] = useState(0);

  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      const element = contentRef.current;
      const lineHeight = Number.parseInt(window.getComputedStyle(element).lineHeight);
      const maxHeight = lineHeight * maxLines;
      const actualHeight = element.scrollHeight;

      setMaxHeight(maxHeight);
      setShouldShowMore(actualHeight > maxHeight);
    }
  }, [maxLines])

  return (
    <ShowMoreContext value={{ contentRef, isShowMore, setIsShowMore, maxHeight, shouldShowMore }}>
      <div style={{ position: "relative", ...style }} {...p}></div>
    </ShowMoreContext>
  )
}