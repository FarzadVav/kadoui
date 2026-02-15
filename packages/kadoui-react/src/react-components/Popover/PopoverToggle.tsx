"use client";

import { use } from "react";

import { PopoverContext } from "./PopoverContext";
import type { PopoverTogglePropsT } from "./popoverTypes";

export function PopoverToggle({ onClick, ...p }: PopoverTogglePropsT) {
  const { mode, toggleRef, isOpen, setOpen } = use(PopoverContext);

  return (
    <button
      type="button"
      ref={toggleRef}
      data-state={isOpen}
      onClick={(ev) => {
        onClick?.(ev);
        ev.stopPropagation();
        if (["click", "both"].includes(mode)) {
          setOpen((prev) => !prev);
        }
      }}
      {...p}
    />
  );
}
