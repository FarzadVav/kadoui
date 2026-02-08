"use client";

import { type ComponentProps, useState } from "react";

import { SpoilerContext } from "./SpoilerContext";

export type SpoilerRootProps = ComponentProps<"span">;

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
