"use client";

import { CSSProperties } from "react";

import type { ModalFooterPropsT } from "./modalTypes";

export function ModalFooter({ onClick, style, ...p }: ModalFooterPropsT) {
  const styles: CSSProperties = {
    gap: 3,
    padding: 10,
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: "var(--color-card)",
    ...style,
  };

  return (
    <footer
      style={styles}
      onClick={(ev) => {
        onClick?.(ev);
        ev.stopPropagation();
      }}
      {...p}
    />
  );
}
