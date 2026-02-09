"use client";

import { use, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { FRAMER_MOTION_DURATION } from "../../configs";
import { ModalContext } from "./ModalContext";
import type { ModalBodyPropsT } from "./modalTypes";

export function ModalBody(p: ModalBodyPropsT) {
  const { isOpen } = use(ModalContext);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        const focusableElement = bodyRef.current?.querySelector("[data-modal='focus']") as
          HTMLElement | null | undefined;
        focusableElement?.focus();
      }, FRAMER_MOTION_DURATION);
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          ref={bodyRef}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ ease: "easeInOut", duration: FRAMER_MOTION_DURATION }}
          {...p}
        />
      ) : null}
    </AnimatePresence>
  );
}
