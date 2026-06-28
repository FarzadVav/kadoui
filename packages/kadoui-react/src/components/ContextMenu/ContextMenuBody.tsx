"use client";

import { CSSProperties, use } from "react";
import { AnimatePresence } from "framer-motion";

import { ContextMenuContext } from "./ContextMenuContext";
import type { ContextMenuBodyPropsT } from "./contextMenuTypes";
import { AccessNavigation } from "../AccessNavigation/AccessNavigation";

export function ContextMenuBody({
  style,
  onContextMenu,
  ...p
}: ContextMenuBodyPropsT) {
  const { contentRef, position, isOpen } = use(ContextMenuContext);

  const styles: CSSProperties = {
    zIndex: 10,
    top: position?.y,
    left: position?.x,
    position: "fixed",
    ...style,
  };

  return (
    <AnimatePresence>
      {isOpen ? (
        <AccessNavigation
          style={styles}
          autoFocusFirst
          ref={contentRef}
          data-state={isOpen}
          focusTrap={position}
          onContextMenu={(ev) => {
            ev.stopPropagation();
            ev.preventDefault();
            onContextMenu?.(ev);
          }}
          {...p}
        />
      ) : null}
    </AnimatePresence>
  );
}
