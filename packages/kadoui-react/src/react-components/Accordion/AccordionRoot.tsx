"use client";

import { useState } from "react";

import { AccordionContext } from "./AccordionContext";
import type { AccordionRootPropsT } from "./accordionTypes";

export function AccordionRoot({ children }: AccordionRootPropsT) {
  const [isOpen, setOpen] = useState(false);

  return (
    <AccordionContext value={{ isOpen, setOpen }}>
      {children}
    </AccordionContext>
  )
}