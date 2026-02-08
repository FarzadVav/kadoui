"use client";

import { type ComponentProps, use } from "react";

import { SpoilerContext } from "./SpoilerContext";

export type SpoilerBlurPropsT = ComponentProps<"span">;

export function SpoilerBlur(p: SpoilerBlurPropsT) {
  const { isOpen } = use(SpoilerContext);

  return (
    <span
      data-state={isOpen}
      {...p}
    />
  )
}
