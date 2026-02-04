"use client";

import { HTMLAttributes, ReactNode, use } from "react";

import { AccordionContext } from "./AccordionContext";

export type AccordionTogglePropsT = HTMLAttributes<HTMLButtonElement> & {
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
