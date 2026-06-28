"use client";

import { CSSProperties, useState } from "react";

import { SpoilerContext } from "./SpoilerContext";
import type { SpoilerRootProps } from "./spoilerTypes";

export function SpoilerRoot({ style, ...p }: SpoilerRootProps) {
  const [isOpen, setOpen] = useState(false);

  const styles: CSSProperties = {
    transition: "all 150ms ease",
    ...(isOpen
      ? {}
      : {
          display: "inline",
          cursor: "pointer",
          overflow: "hidden",
        }),
    ...style,
  };

  return (
    <SpoilerContext value={{ isOpen, setOpen }}>
      <span
        style={styles}
        data-state={isOpen}
        onClick={() => setOpen(true)}
        {...p}
      />
    </SpoilerContext>
  );
}
