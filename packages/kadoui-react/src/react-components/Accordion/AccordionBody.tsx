"use client";

import { ReactNode, use } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { AccordionContext } from "./AccordionContext";
import type { AccordionBodyPropsT } from "./accordionTypes";
import { AccordionItemContext } from "./AccordionItemContext";

export function AccordionBody({ children, ...p }: AccordionBodyPropsT) {
  const { multiple, accordionState } = use(AccordionContext);
  const { itemName } = use(AccordionItemContext);

  const isOpen = multiple ? accordionState.includes(itemName) : accordionState === itemName;

  return (
    <AnimatePresence>
      {isOpen ?
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          {...p}
        >
          {children as ReactNode}
        </motion.div>
        : null}
    </AnimatePresence>
  )
}