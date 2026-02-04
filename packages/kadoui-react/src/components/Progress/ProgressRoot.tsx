"use client"

import type { HTMLAttributes } from "react";

import { ProgressContext } from "./ProgressContext";

export type ProgressRootPropsT = HTMLAttributes<HTMLDivElement> & {
  value: number;
  maxValue?: number;
}

export function ProgressRoot({ value, maxValue = 100, ...p }: ProgressRootPropsT) {
  return (
    <ProgressContext value={{ value, maxValue }}>
      <div {...p} />
    </ProgressContext>
  )
}