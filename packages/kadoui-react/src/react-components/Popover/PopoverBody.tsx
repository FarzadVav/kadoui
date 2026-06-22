"use client";

import { use } from "react";

import { PopoverContext } from "./PopoverContext";
import type { PopoverBodyPropsT } from "./popoverTypes";
import {
  getPositionStyles,
  useViewportSafeArea,
} from "../../utils/positionStyles";

export function PopoverBody({
  offset,
  onClick,
  position,
  preventClose,
  style,
  ...p
}: PopoverBodyPropsT) {
  const { bodyRef, isOpen } = use(PopoverContext);

  const styles = useViewportSafeArea(
    bodyRef,
    {
      zIndex: 10,
      position: "absolute",
      ...getPositionStyles(position, offset),
      ...(isOpen ? {} : { opacity: 0, visibility: "hidden" }),
      ...style,
    },
    isOpen,
  );

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
