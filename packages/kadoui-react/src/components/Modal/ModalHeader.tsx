"use client";

import type { ComponentProps } from "react";

export type ModalHeaderPropsT = ComponentProps<"div">;

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
