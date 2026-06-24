"use client";

import { CSSProperties } from "react";

import type { ModalIndicatorPropsT } from "./modalTypes";

export function ModalIndicator({ onClick, style, ...p }: ModalIndicatorPropsT) {
  const styles: CSSProperties = {
    padding: 10,
    flexShrink: 0,
    backgroundColor: "var(--color-card)",
    ...style,
  };

  return (
    <div
      style={styles}
      onClick={(ev) => {
        onClick?.(ev);
        ev.stopPropagation();
      }}
      {...p}
    />
  );
}
