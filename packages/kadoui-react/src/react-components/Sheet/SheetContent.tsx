"use client";

import type { SheetContentPropsT } from "./sheetTypes";

export function SheetContent({ style, onScroll, ...p }: SheetContentPropsT) {
  return (
    <div
      style={{
        touchAction: "pan-down",
        ...style,
      }}
      onScroll={(ev) => {
        if (ev.currentTarget.scrollTop > 0) {
          ev.currentTarget.style.touchAction = "pan-y";
        } else {
          ev.currentTarget.style.touchAction = "pan-down";
        }

        onScroll?.(ev);
      }}
      {...p}
    />
  );
}
