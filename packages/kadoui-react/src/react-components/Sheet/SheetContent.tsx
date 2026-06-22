"use client";

import { use } from "react";
import { CSSProperties } from "react";

import { SheetContext } from "./SheetContext";
import type { SheetContentPropsT } from "./sheetTypes";
import { useSheetScrollTouchAction } from "./useSheetScrollTouchAction";

export function SheetContent({
  style,
  onScroll,
  onPointerDown,
  ...p
}: SheetContentPropsT) {
  const { dragControls } = use(SheetContext);
  const { ref, onScroll: updateTouchAction } = useSheetScrollTouchAction();

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
      data-sheet-content
      style={styles}
      onScroll={(ev) => {
        updateTouchAction(ev.currentTarget);
        onScroll?.(ev);
      }}
      onPointerDown={(ev) => {
        const element = ev.currentTarget;

        if (element.scrollTop <= 0) {
          dragControls.start(ev);
        }

        ev.stopPropagation();
        onPointerDown?.(ev);
      }}
      {...p}
    />
  );
}
