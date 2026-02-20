"use client";

import { use } from "react";

import { PopoverContext } from "./PopoverContext";
import type { PopoverBodyPropsT } from "./popoverTypes";

export function PopoverBody({ preventClose, onClick, ...p }: PopoverBodyPropsT) {
  const { bodyRef, isOpen } = use(PopoverContext);

  return (
    <div
      ref={bodyRef}
      data-state={isOpen}
      data-access-navigation={isOpen}
      onClick={(ev) => {
        if (preventClose) {
          ev.stopPropagation();
        }

        onClick?.(ev);
      }}
      {...p}
    />
  )
}
