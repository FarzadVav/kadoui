"use client";

import { CSSProperties, use } from "react";

import { ShowMoreContext } from "./ShowMoreContext";
import type { ShowMoreTogglePropsT } from "./showMoreTypes";

export function ShowMoreToggle({
  style,
  onClick,
  children,
  ...p
}: ShowMoreTogglePropsT) {
  const { isShowMore, setIsShowMore } = use(ShowMoreContext);

  const styles: CSSProperties = {
    position: "relative",
    ...style,
  };

  return (
    <button
      type="button"
      style={styles}
      data-state={isShowMore}
      onClick={(ev) => {
        onClick?.(ev);
        setIsShowMore(!isShowMore);
      }}
      {...p}
    >
      {children ? children(isShowMore) : null}
    </button>
  );
}
