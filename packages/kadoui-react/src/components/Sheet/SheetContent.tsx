"use client";

import { HTMLAttributes } from "react";

export type SheetContentPropsT = HTMLAttributes<HTMLDivElement>;

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
