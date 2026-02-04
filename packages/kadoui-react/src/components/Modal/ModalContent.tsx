"use client";

import type { HTMLAttributes } from "react";

export type ModalContentPropsT = HTMLAttributes<HTMLDivElement>;

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
