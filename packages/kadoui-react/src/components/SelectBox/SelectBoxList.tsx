"use client";

import { use, useRef } from "react";

import { SelectBoxContext } from "./SelectBoxContext";
import type { SelectBoxListPropsT } from "./selectBoxTypes";
import {
  getPositionStyles,
  useViewportSafeArea,
} from "../../utils/positionStyles";

export default function SelectBoxList({
  style,
  offset,
  position = "bottom-left-in",
  ...p
}: SelectBoxListPropsT) {
  const { inputFocused } = use(SelectBoxContext);
  const listRef = useRef<HTMLDivElement>(null);

  const styles = useViewportSafeArea(
    listRef,
    {
      zIndex: 10,
      width: "100%",
      overflowY: "auto",
      cursor: "default",
      maxHeight: "33dvh",
      position: "absolute",
      ...getPositionStyles(position, offset),
      ...(inputFocused
        ? {}
        : {
            opacity: 0,
            visibility: "hidden",
          }),
      ...style,
    },
    inputFocused,
  );

  return (
    <div
      ref={listRef}
      style={styles}
      data-state={inputFocused}
      data-access-navigation={inputFocused}
      {...p}
    />
  );
}
