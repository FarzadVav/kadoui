"use client";

import { use } from "react";

import { SpoilerContext } from "./SpoilerContext";
import type { SpoilerBlurPropsT } from "./spoilerTypes";

export function SpoilerBlur(p: SpoilerBlurPropsT) {
  const { isOpen } = use(SpoilerContext);

  return (
    <span
      data-state={isOpen}
      {...p}
    />
  )
}
