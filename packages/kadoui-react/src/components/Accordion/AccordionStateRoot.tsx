"use client";

import { AccordionContext } from "./AccordionContext";
import { AccessNavigation } from "../AccessNavigation/AccessNavigation";
import type { AccordionContextT, AccordionStateRootPropsT } from "./accordionTypes";

export function AccordionStateRoot({
  multiple,
  accordionState,
  onAccordionChange,
  ...p
}: AccordionStateRootPropsT) {
  return (
    <AccordionContext
      value={{ multiple, accordionState, onAccordionChange } as AccordionContextT}
    >
      <AccessNavigation {...p} />
    </AccordionContext>
  );
}
