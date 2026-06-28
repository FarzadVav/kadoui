"use client";

import { ReactNode, use } from "react";
import { AnimatePresence, motion, MotionStyle } from "framer-motion";

import { AccordionContext } from "./AccordionContext";
import type { AccordionBodyPropsT } from "./accordionTypes";
import { AccordionItemContext } from "./AccordionItemContext";

export function AccordionBody({ children, style, ...p }: AccordionBodyPropsT) {
  const { multiple, accordionState } = use(AccordionContext);
  const { itemName } = use(AccordionItemContext);

  const isOpen = multiple
    ? accordionState.includes(itemName)
    : accordionState === itemName;

  const styles: MotionStyle = {
    overflow: "hidden",
    ...style,
  };

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          style={styles}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          {...p}
        >
          {children as ReactNode}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
