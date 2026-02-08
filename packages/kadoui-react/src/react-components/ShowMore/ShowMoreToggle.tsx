"use client";

import { type ComponentProps, use } from "react";

import { ShowMoreContext } from "./ShowMoreContext";

export type ShowMoreTogglePropsT = ComponentProps<"button">;

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