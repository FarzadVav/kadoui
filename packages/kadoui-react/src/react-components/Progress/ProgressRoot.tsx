"use client";

import { ProgressContext } from "./ProgressContext";
import type { ProgressRootPropsT } from "./progressTypes";

export function ProgressRoot({ value, maxValue = 100, ...p }: ProgressRootPropsT) {
  return (
    <ProgressContext value={{ value, maxValue }}>
      <div {...p} />
    </ProgressContext>
  )
}