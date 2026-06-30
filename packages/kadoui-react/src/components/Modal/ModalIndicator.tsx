"use client";

import type { ModalIndicatorPropsT } from "./modalTypes";

export function ModalIndicator({ onClick, ...p }: ModalIndicatorPropsT) {
  return (
    <div
      onClick={(ev) => {
        onClick?.(ev);
        ev.stopPropagation();
      }}
      {...p}
    />
  );
}
