"use client";

import { HTMLAttributes, use } from "react";

import { PopoverContext } from "./PopoverContext";

export type PopoverBodyPropsT = HTMLAttributes<HTMLDivElement> & {
  preventClose?: boolean;
};

export function PopoverBody({ preventClose, onClick, ...p }: PopoverBodyPropsT) {
  const { bodyRef, isOpen } = use(PopoverContext);

  return isOpen ? (
    <div
      ref={bodyRef}
      data-state={isOpen}
      onClick={(ev) => {
        if (preventClose) {
          ev.stopPropagation();
        }

        onClick?.(ev);
      }}
      {...p}
    />
  ) : null;
}
