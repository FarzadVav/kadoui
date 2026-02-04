"use client";

import { HTMLAttributes, use } from "react";

import { PopoverContext } from "./PopoverContext";

export type PopoverTogglePropsT = HTMLAttributes<HTMLButtonElement>;

export function PopoverToggle({ onClick, ...props }: PopoverTogglePropsT) {
  const { mode, toggleRef, isOpen, setOpen } = use(PopoverContext);

  return (
    <button
      ref={toggleRef}
      data-state={isOpen}
      onClick={(ev) => {
        onClick?.(ev);
        ev.stopPropagation();
        if (["click", "both"].includes(mode)) {
          setOpen((prev) => !prev);
        }
      }}
      {...props}
    />
  );
}
