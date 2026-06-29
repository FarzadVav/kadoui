"use client";

import { CSSProperties } from "react";

import { ShowMoreContext } from "./ShowMoreContext";
import { useShowMoreMeasure } from "./useShowMoreMeasure";
import type { ShowMoreStateRootPropsT } from "./showMoreTypes";
import { useControllableState } from "../../hooks/useControllableState";

export function ShowMoreStateRoot({
  maxLines,
  isShowMore: isShowMoreProp,
  setIsShowMore: setIsShowMoreProp,
  defaultExpanded = false,
  style,
  ...p
}: ShowMoreStateRootPropsT) {
  const [isShowMore, setIsShowMore] = useControllableState({
    value: isShowMoreProp,
    defaultValue: defaultExpanded,
    onChange: setIsShowMoreProp,
  });
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
