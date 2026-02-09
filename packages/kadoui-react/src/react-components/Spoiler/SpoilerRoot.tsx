"use client";

import { useState } from "react";

import { SpoilerContext } from "./SpoilerContext";
import type { SpoilerRootProps } from "./spoilerTypes";

export function SpoilerRoot(p: SpoilerRootProps) {
  const [isOpen, setOpen] = useState(false);

  return (
    <SpoilerContext value={{ isOpen, setOpen }}>
      <span
        onClick={() => setOpen(true)}
        data-state={isOpen}
        {...p}
      />
    </SpoilerContext>
  );
}
