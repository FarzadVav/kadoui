"use client";

import { use } from "react";

import { PopoverContext } from "./PopoverContext";
import { ignoreStyles, zIndexes } from "../../styles";
import type { PopoverBodyPropsT } from "./popoverTypes";
import {
  getPositionStyles,
  useViewportSafeArea,
} from "../../utils/positionStyles";

export function PopoverBody({
  style,
  offset,
  onClick,
  position,
  preventClose,
  ...p
}: PopoverBodyPropsT) {
  const { bodyRef, isOpen } = use(PopoverContext);

  const styles = useViewportSafeArea(
    bodyRef,
    {
      position: "absolute",
      zIndex: zIndexes.smallOverlay,
      ...getPositionStyles(position, offset),
      ...(isOpen ? {} : ignoreStyles),
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
