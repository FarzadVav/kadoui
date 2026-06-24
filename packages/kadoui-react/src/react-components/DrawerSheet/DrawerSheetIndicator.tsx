"use client";

import { CSSProperties } from "react";

import type { DrawerSheetIndicatorPropsT } from "./drawerSheetTypes";

export function DrawerSheetIndicator({ style, ...p }: DrawerSheetIndicatorPropsT) {
  const styles: CSSProperties = {
    padding: 10,
    backgroundColor: "var(--color-card)",
    ...style,
  };

  return <div data-drawer-sheet-indicator style={styles} {...p} />;
}
