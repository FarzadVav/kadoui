"use client";

import { ReactNode, use } from "react";
import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion";

import { AccordionContext } from "./AccordionContext";

export type AccordionBodyPropsT = HTMLMotionProps<"div">;

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