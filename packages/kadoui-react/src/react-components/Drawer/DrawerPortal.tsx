"use client";

import { use } from "react";
import { motion, AnimatePresence, MotionStyle } from "framer-motion";

import { Portal } from "../Portal/Portal";
import { DrawerContext } from "./DrawerContext";
import { ClientOnly } from "../ClientOnly/ClientOnly";
import type { DrawerPortalPropsT } from "./drawerTypes";

export function DrawerPortal({ onClick, style, ...p }: DrawerPortalPropsT) {
  const { isOpen, setOpen } = use(DrawerContext);

  const styles: MotionStyle = {
    inset: 0,
    zIndex: 50,
    position: "fixed",
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
