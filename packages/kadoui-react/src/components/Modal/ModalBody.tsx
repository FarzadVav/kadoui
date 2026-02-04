"use client";

import { use, useEffect, useRef } from "react";
import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion";

import { ModalContext } from "./ModalContext";

export type ModalBodyPropsT = HTMLMotionProps<"div">;

export function ModalBody(p: ModalBodyPropsT) {
  const { isOpen } = use(ModalContext);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      const indexElement = contentRef.current?.querySelector("[data-modal='index']") as
        | HTMLElement
        | null
        | undefined;
      indexElement?.focus();
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          ref={contentRef}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ ease: "easeInOut" }}
          {...p}
        />
      ) : null}
    </AnimatePresence>
  );
}
