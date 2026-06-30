"use client";

import { CSSProperties } from "react";

import type { ModalContentPropsT } from "./modalTypes";

export function ModalContent({ onClick, style, ...p }: ModalContentPropsT) {
  const styles: CSSProperties = {
    overflowY: "auto",
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
