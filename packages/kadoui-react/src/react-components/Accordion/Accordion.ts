import { AccordionBody } from "./AccordionBody";
import { AccordionRoot } from "./AccordionRoot";
import { AccordionItem } from "./AccordionItem";
import { AccordionToggle } from "./AccordionToggle";
import { AccordionContent } from "./AccordionContent";

export const Accordion = Object.assign(AccordionRoot, {
  Item: AccordionItem,
  Toggle: AccordionToggle,
  Body: AccordionBody,
  Content: AccordionContent,
});

export * from "./accordionTypes";