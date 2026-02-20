"use client";

import { use } from "react";

import { AccordionContext } from "./AccordionContext";
import type { AccordionTogglePropsT } from "./accordionTypes";
import { AccordionItemContext } from "./AccordionItemContext";

export function AccordionToggle({ onClick, ...p }: AccordionTogglePropsT) {
  const { multiple, accordionState, onAccordionChange } = use(AccordionContext);
  const { itemName } = use(AccordionItemContext);

  const isOpen = multiple ? accordionState.includes(itemName) : accordionState === itemName;

  return (
    <button
      type="button"
      data-state={isOpen}
      onClick={(ev) => {
        onClick?.(ev);
        if (isOpen) {
          if (multiple) {
            onAccordionChange(accordionState.filter(item => item !== itemName));
          } else {
            onAccordionChange(null);
          }
        } else {
          if (multiple) {
            onAccordionChange([...accordionState, itemName]);
          } else {
            onAccordionChange(itemName);
          }
        }
      }}
      {...p}
    />
  );
}
