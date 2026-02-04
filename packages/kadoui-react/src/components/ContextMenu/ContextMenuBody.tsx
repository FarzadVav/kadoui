"use client";

import { HTMLAttributes, use, useEffect } from "react";

import { selectAccessibleChildren } from "../../utils";
import { ContextMenuContext } from "./ContextMenuContext";

export type ContextMenuBodyPropsT = HTMLAttributes<HTMLDivElement>;

export function ContextMenuBody({ onContextMenu, ...p }: ContextMenuBodyPropsT) {
  const { contentRef, position, isOpen } = use(ContextMenuContext);

  useEffect(() => {
    if (!contentRef.current) {
      return;
    }

    if (isOpen) {
      const children = selectAccessibleChildren(contentRef.current);
      const firstChild = children[0];

      if (!firstChild) {
        return;
      }

      firstChild.focus();
    }
  }, [isOpen, position, contentRef]);

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
