"use client";

import { use } from "react";

import { ShowMoreContext } from "./ShowMoreContext";
import type { ShowMoreTogglePropsT } from "./showMoreTypes";

export function ShowMoreToggle({ onClick, style, ...p }: ShowMoreTogglePropsT) {
  const { setIsShowMore } = use(ShowMoreContext);

  return (
    <button
      style={{
        position: "relative",
        ...style
      }}
      onClick={ev => {
        onClick?.(ev);
        setIsShowMore(prev => !prev);
      }}
      {...p}
    />
  )
}