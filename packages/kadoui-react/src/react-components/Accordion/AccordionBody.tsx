"use client";

import { ReactNode, use } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { AccordionContext } from "./AccordionContext";
import type { AccordionBodyPropsT } from "./accordionTypes";

export function AccordionBody({ children, ...props }: AccordionBodyPropsT) {
  const { isOpen } = use(AccordionContext);

  return (
    <AnimatePresence>
      {isOpen ?
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          {...props}
        >
          {children as ReactNode}
        </motion.div>
        : null}
    </AnimatePresence>
  )
}