"use client";

import { type ComponentProps, ReactNode, use } from "react";

import { AccordionContext } from "./AccordionContext";

export type AccordionTogglePropsT = ComponentProps<"button"> & {
  icon?: ReactNode;
};

export function AccordionToggle({ onClick, ...props }: AccordionTogglePropsT) {
  const { isOpen, setOpen } = use(AccordionContext);

  return (
    <button
      data-state={isOpen}
      onClick={(ev) => {
        onClick?.(ev);
        setOpen((prev) => !prev);
      }}
      {...props}
    />
  );
}
