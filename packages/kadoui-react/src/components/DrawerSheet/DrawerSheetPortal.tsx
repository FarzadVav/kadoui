"use client";

import { use } from "react";
import { AnimatePresence, motion, MotionStyle } from "framer-motion";

import { Portal } from "../Portal/Portal";
import { DrawerSheetContext } from "./DrawerSheetContext";
import { ClientOnly } from "../ClientOnly/ClientOnly";
import type { DrawerSheetPortalPropsT } from "./drawerSheetTypes";
import { FRAMER_MOTION_DURATION } from "../../configs";

export function DrawerSheetPortal({ style, ...p }: DrawerSheetPortalPropsT) {
  const { isOpen, setOpen } = use(DrawerSheetContext);

  const styles: MotionStyle = {
    inset: 0,
    zIndex: 50,
    position: "fixed",
    backgroundColor:
      "color-mix(in oklab, var(--color-background) 75%, transparent)",
    ...style,
  };

  return (
    <ClientOnly>
      <Portal>
        <AnimatePresence>
          {isOpen ? (
            <motion.div
              style={styles}
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { when: "afterChildren" } }}
              transition={{
                ease: "easeInOut",
                duration: FRAMER_MOTION_DURATION,
              }}
              {...p}
            />
          ) : null}
        </AnimatePresence>
      </Portal>
    </ClientOnly>
  );
}
