"use client";

import type { ModalHeaderPropsT } from "./modalTypes";

export function ModalHeader({ onClick, ...p }: ModalHeaderPropsT) {
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
