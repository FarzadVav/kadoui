"use client";

import { CSSProperties, use } from "react";

import { PopoverContext } from "./PopoverContext";
import { getPopoverPositionStyles } from "./popoverPositionStyles";
import type { PopoverBodyPropsT } from "./popoverTypes";

export function PopoverBody({
  offset,
  onClick,
  position,
  preventClose,
  style,
  ...p
}: PopoverBodyPropsT) {
  const { bodyRef, isOpen } = use(PopoverContext);

  const styles: CSSProperties = {
    zIndex: 10,
    position: "absolute",
    ...getPopoverPositionStyles(position, offset),
    ...(isOpen ? {} : { opacity: 0, visibility: "hidden" }),
    ...style,
  };

  return (
    <div
      ref={bodyRef}
      style={styles}
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
  );
}
