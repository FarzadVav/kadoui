"use client";

import { use, useRef } from "react";

import { SelectBoxContext } from "./SelectBoxContext";
import { ignoreStyles, zIndexes } from "../../styles";
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
      width: "100%",
      overflowY: "auto",
      cursor: "default",
      maxHeight: "33dvh",
      position: "absolute",
      zIndex: zIndexes.smallOverlay,
      ...getPositionStyles(position, offset),
      ...(inputFocused ? {} : ignoreStyles),
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
