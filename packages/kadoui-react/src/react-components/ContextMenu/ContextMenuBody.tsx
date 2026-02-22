"use client";

import { use } from "react";

import { ContextMenuContext } from "./ContextMenuContext";
import type { ContextMenuBodyPropsT } from "./contextMenuTypes";
import { AccessNavigation } from "../AccessNavigation/AccessNavigation";

export function ContextMenuBody({ onContextMenu, ...p }: ContextMenuBodyPropsT) {
  const { contentRef, position, isOpen } = use(ContextMenuContext);

  // useEffect(() => {
  //   contentRef.current?.focus();
  // }, [isOpen, position])

  return (
    <AccessNavigation
      ref={contentRef}
      data-state={isOpen}
      focusTrap={position}
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
