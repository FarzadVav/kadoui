"use client";

import { CSSProperties } from "react";
import { ProgressContext } from "./ProgressContext";
import type { ProgressRootPropsT } from "./progressTypes";

export function ProgressRoot({
  value,
  style,
  maxValue = 100,
  ...p
}: ProgressRootPropsT) {
  const styles: CSSProperties = {
    minHeight: 10,
    backgroundColor:
      "color-mix(in oklab, var(--color-primary) 10%, transparent)",
    ...style,
  };

  return (
    <ProgressContext value={{ value, maxValue }}>
      <div style={styles} {...p} />
    </ProgressContext>
  );
}
