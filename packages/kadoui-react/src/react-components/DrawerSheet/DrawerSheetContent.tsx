"use client";

import { use } from "react";
import { CSSProperties } from "react";

import {
  DrawerSheetBodyContext,
  DrawerSheetContext,
} from "./DrawerSheetContext";
import type { DrawerSheetContentPropsT } from "./drawerSheetTypes";
import { useDrawerSheetScrollTouchAction } from "./useDrawerSheetScrollTouchAction";

export function DrawerSheetContent({
  style,
  onScroll,
  onPointerDown,
  ...p
}: DrawerSheetContentPropsT) {
  const { dragControls } = use(DrawerSheetContext);
  const { position, gesture } = use(DrawerSheetBodyContext);
  const { ref, canStartDrag, onScroll: updateTouchAction } =
    useDrawerSheetScrollTouchAction(position, gesture);

  const styles: CSSProperties = {
    flex: 1,
    padding: 10,
    overflowY: "auto",
    overscrollBehavior: "contain",
    WebkitOverflowScrolling: "touch",
    backgroundColor: "var(--color-card)",
    ...style,
  };

  return (
    <div
      ref={ref}
      data-drawer-sheet-content
      style={styles}
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
