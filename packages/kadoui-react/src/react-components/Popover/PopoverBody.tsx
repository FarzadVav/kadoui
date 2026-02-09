"use client";

import { use } from "react";

import { PopoverContext } from "./PopoverContext";
import type { PopoverBodyPropsT } from "./popoverTypes";

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
