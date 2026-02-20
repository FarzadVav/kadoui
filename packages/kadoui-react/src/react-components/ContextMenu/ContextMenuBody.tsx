"use client";

import { use } from "react";

import { ContextMenuContext } from "./ContextMenuContext";
import type { ContextMenuBodyPropsT } from "./contextMenuTypes";

export function ContextMenuBody({ onContextMenu, ...p }: ContextMenuBodyPropsT) {
  const { contentRef, position, isOpen } = use(ContextMenuContext);

  return (
    <div
      ref={contentRef}
      data-state={isOpen}
      data-access-navigation={isOpen}
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
