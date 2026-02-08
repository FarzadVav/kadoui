"use client";

import { type ComponentProps, use } from "react";

import { ContextMenuContext } from "./ContextMenuContext";

export type ContextMenuBodyPropsT = ComponentProps<"div">;

export function ContextMenuBody({ onContextMenu, ...p }: ContextMenuBodyPropsT) {
  const { contentRef, position, isOpen } = use(ContextMenuContext);

  return (
    <div
      ref={contentRef}
      data-state={isOpen}
      onContextMenu={(ev) => {
        ev.stopPropagation();
        ev.preventDefault();
        onContextMenu?.(ev);
      }}
      style={{
        top: position?.y,
        left: position?.x,
      }}
      {...p}
    />
  );
}
