import { AccordionItemPropsT } from "./accordionTypes";
import { AccordionItemContext } from "./AccordionItemContext";

export function AccordionItem({ itemName, children }: AccordionItemPropsT) {
  return (
    <AccordionItemContext value={{ itemName }}>
      {children}
    </AccordionItemContext>
  )
}
