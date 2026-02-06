"use client";

import type { ComponentProps } from "react";

export type ModalContentPropsT = ComponentProps<"div">;

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
