"use client";

import { use } from "react";

import { ShowMoreContext } from "./ShowMoreContext";
import type { ShowMoreTogglePropsT } from "./showMoreTypes";

export function ShowMoreToggle({ onClick, style, ...p }: ShowMoreTogglePropsT) {
  const { isShowMore, setIsShowMore } = use(ShowMoreContext);

  return (
    <button
      type="button"
      data-state={isShowMore}
      style={{
        position: "relative",
        ...style
      }}
      onClick={ev => {
        onClick?.(ev);
        setIsShowMore(!isShowMore);
      }}
      {...p}
    />
  )
}