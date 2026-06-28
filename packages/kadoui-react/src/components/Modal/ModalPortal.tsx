"use client";

import { use } from "react";
import { motion, AnimatePresence, MotionStyle } from "framer-motion";

import { Portal } from "../Portal/Portal";
import { ModalContext } from "./ModalContext";
import type { ModalPortalPropsT } from "./modalTypes";
import { ClientOnly } from "../ClientOnly/ClientOnly";

export function ModalPortal({ onClick, style, ...p }: ModalPortalPropsT) {
  const { isOpen, setOpen } = use(ModalContext);

  const styles: MotionStyle = {
    inset: 0,
    zIndex: 50,
    padding: 10,
    display: "flex",
    position: "fixed",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:
      "color-mix(in oklab, var(--color-background) 50%, transparent)",
    ...style,
  };

  return (
    <ClientOnly>
      <Portal>
        <AnimatePresence>
          {isOpen ? (
            <motion.div
              style={styles}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={(ev) => {
                onClick?.(ev);
                setOpen(false);
              }}
              {...p}
            />
          ) : null}
        </AnimatePresence>
      </Portal>
    </ClientOnly>
  );
}
