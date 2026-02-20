"use client";

import { AccordionContext } from "./AccordionContext";
import { AccessNavigation } from "../AccessNavigation/AccessNavigation";
import type { AccordionContextT, AccordionRootPropsT } from "./accordionTypes";

export function AccordionRoot({ multiple, accordionState, onAccordionChange, ...p }: AccordionRootPropsT) {
  return (
    <AccordionContext value={{ multiple, accordionState, onAccordionChange } as AccordionContextT}>
      <AccessNavigation {...p} />
    </AccordionContext>
  )
}