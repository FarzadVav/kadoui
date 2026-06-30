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

export const Accordion = Object.assign(AccordionStateRoot, baseComponents);

export const AccordionWithSearchParams = Object.assign(
  AccordionSearchParamsRoot,
  baseComponents,
);

export * from "./accordionTypes";
