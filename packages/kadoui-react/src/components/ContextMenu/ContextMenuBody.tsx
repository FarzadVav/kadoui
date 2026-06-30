"use client";

import { CSSProperties, use } from "react";
import { AnimatePresence } from "framer-motion";

import { zIndexes } from "../../styles";
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
    position: "fixed",
    top: position?.y,
    left: position?.x,
    zIndex: zIndexes.smallOverlay,
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
