"use client";

import { type ComponentProps, use } from "react";

import { cn } from "../../utils";
import { SpoilerContext } from "./SpoilerContext";

export type SpoilerBlurPropsT = ComponentProps<"span">;

export function SpoilerBlur({ className, ...p }: SpoilerBlurPropsT) {
  const { isOpen } = use(SpoilerContext);

  return (
    <span
      className={cn(
        isOpen ? "spoiler-active" : null,
        className
      )}
      {...p}
    />
  )
}
