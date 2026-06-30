"use client";

import { use } from "react";
import { CSSProperties } from "react";

import type { DrawerSheetContentPropsT } from "./drawerSheetTypes";
import { useDrawerSheetScrollTouchAction } from "./useDrawerSheetScrollTouchAction";
import {
  DrawerSheetBodyContext,
  DrawerSheetContext,
} from "./DrawerSheetContext";

export function DrawerSheetContent({
  style,
  onScroll,
  onPointerDown,
  ...p
}: DrawerSheetContentPropsT) {
  const { dragControls } = use(DrawerSheetContext);
  const { position, gesture } = use(DrawerSheetBodyContext);
  const {
    ref,
    canStartDrag,
    onScroll: updateTouchAction,
  } = useDrawerSheetScrollTouchAction(position, gesture);

  const styles: CSSProperties = {
    overflowY: "auto",
    overscrollBehavior: "contain",
    WebkitOverflowScrolling: "touch",
    ...style,
  };

  return (
    <div
      ref={ref}
      style={styles}
      data-drawer-sheet-content
      onScroll={(ev) => {
        updateTouchAction(ev.currentTarget);
        onScroll?.(ev);
      }}
      onPointerDown={(ev) => {
        if (canStartDrag(ev.currentTarget)) {
          dragControls.start(ev);
        }

        ev.stopPropagation();
        onPointerDown?.(ev);
      }}
      {...p}
    />
  );
}
