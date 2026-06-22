"use client";

import { CSSProperties } from "react";

import type { SheetHeaderPropsT } from "./sheetTypes";

export function SheetIndicator({ style, ...p }: SheetHeaderPropsT) {
  const styles: CSSProperties = {
    padding: 10,
    backgroundColor: "var(--color-card)",
    ...style,
  };

  return <div style={styles} {...p} />;
}
