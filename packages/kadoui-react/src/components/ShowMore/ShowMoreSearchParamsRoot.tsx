"use client";

import { CSSProperties } from "react";

import { ShowMoreContext } from "./ShowMoreContext";
import { useShowMoreMeasure } from "./useShowMoreMeasure";
import type { ShowMoreSearchParamsRootPropsT } from "./showMoreTypes";
import { useSearchParamsBooleanState } from "../../hooks/useSearchParamsBooleanState";

export function ShowMoreSearchParamsRoot({
  style,
  scroll,
  maxLines,
  openKey = "showMore",
  ...p
}: ShowMoreSearchParamsRootPropsT) {
  const [isShowMore, setIsShowMore] = useSearchParamsBooleanState(openKey, {
    scroll,
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
