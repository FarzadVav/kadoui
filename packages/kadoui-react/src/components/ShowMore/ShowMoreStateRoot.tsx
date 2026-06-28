"use client";

import { CSSProperties, useState } from "react";

import { ShowMoreContext } from "./ShowMoreContext";
import { useShowMoreMeasure } from "./useShowMoreMeasure";
import type { ShowMoreStateRootPropsT } from "./showMoreTypes";

export function ShowMoreStateRoot({
  maxLines,
  defaultExpanded = false,
  style,
  ...p
}: ShowMoreStateRootPropsT) {
  const [isShowMore, setIsShowMore] = useState(defaultExpanded);
  const { contentRef, shouldShowMore, clampedHeight, fullHeight } =
    useShowMoreMeasure(maxLines);

  const styles: CSSProperties = {
    position: "relative",
    ...style,
  };

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
