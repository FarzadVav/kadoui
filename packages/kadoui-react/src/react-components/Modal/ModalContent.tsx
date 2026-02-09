"use client";

import type { ModalContentPropsT } from "./modalTypes";

export function ModalContent({ onClick, ...p }: ModalContentPropsT) {
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
