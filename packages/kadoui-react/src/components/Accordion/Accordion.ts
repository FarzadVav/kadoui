import { AccordionBody } from "./AccordionBody";
import { AccordionItem } from "./AccordionItem";
import { AccordionToggle } from "./AccordionToggle";
import { AccordionContent } from "./AccordionContent";
import { AccordionStateRoot } from "./AccordionStateRoot";
import { AccordionSearchParamsRoot } from "./AccordionSearchParamsRoot";

const baseComponents = {
  Item: AccordionItem,
  Toggle: AccordionToggle,
  Body: AccordionBody,
  Content: AccordionContent,
};

export const AccordionWithState = Object.assign(AccordionStateRoot, baseComponents);

export const AccordionWithSearchParams = Object.assign(
  AccordionSearchParamsRoot,
  baseComponents,
);

/** @deprecated Use AccordionWithState */
export const Accordion = AccordionWithState;

export * from "./accordionTypes";
