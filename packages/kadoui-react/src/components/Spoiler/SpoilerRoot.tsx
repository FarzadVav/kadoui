"use client";

import { CSSProperties } from "react";

import { SpoilerContext } from "./SpoilerContext";
import type { SpoilerRootProps } from "./spoilerTypes";
import { useControllableState } from "../shared/useControllableState";

export function SpoilerRoot({
  isOpen: isOpenProp,
  setOpen: setOpenProp,
  defaultOpen = false,
  style,
  ...p
}: SpoilerRootProps) {
  const [isOpen, setOpen] = useControllableState({
    value: isOpenProp,
    defaultValue: defaultOpen,
    onChange: setOpenProp,
  });

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
