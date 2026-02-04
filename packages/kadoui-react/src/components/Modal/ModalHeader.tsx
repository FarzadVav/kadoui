"use client";

import type { HTMLAttributes } from "react";

export type ModalHeaderPropsT = HTMLAttributes<HTMLDivElement>;

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
