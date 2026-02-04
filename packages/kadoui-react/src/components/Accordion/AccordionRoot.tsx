"use client";

import { PropsWithChildren, useState } from "react";

import { AccordionContext } from "./AccordionContext";

export type AccordionRootPropsT = PropsWithChildren;

export function AccordionRoot({ children }: AccordionRootPropsT) {
  const [isOpen, setOpen] = useState(false);

  return (
    <AccordionContext value={{ isOpen, setOpen }}>
      {children}
    </AccordionContext>
  )
}