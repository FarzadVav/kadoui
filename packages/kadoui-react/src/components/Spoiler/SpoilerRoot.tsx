"use client";

import { HTMLAttributes, useState } from "react";

import { cn } from "../../utils";
import { SpoilerContext } from "./SpoilerContext";

export type SpoilerRootProps = HTMLAttributes<HTMLSpanElement>;

export function SpoilerRoot({ className, ...p }: SpoilerRootProps) {
  const [isOpen, setOpen] = useState(false);

  return (
    <SpoilerContext value={{ isOpen, setOpen }}>
      <span
        onClick={() => setOpen(true)}
        className={cn(
          isOpen ? "spoiler-active" : null,
          className
        )}
        {...p}
      />
    </SpoilerContext>
  );
}
