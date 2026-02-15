"use client";

import { use } from "react";

import { AccordionContext } from "./AccordionContext";
import type { AccordionTogglePropsT } from "./accordionTypes";

export function AccordionToggle({ onClick, ...p }: AccordionTogglePropsT) {
  const { isOpen, setOpen } = use(AccordionContext);

  return (
    <button
      type="button"
      data-state={isOpen}
      onClick={(ev) => {
        onClick?.(ev);
        setOpen((prev) => !prev);
      }}
      {...p}
    />
  );
}
