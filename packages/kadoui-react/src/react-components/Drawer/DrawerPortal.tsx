"use client";

import { use } from "react";
import { motion, AnimatePresence, HTMLMotionProps } from "framer-motion";

import { Portal } from "../Portal/Portal";
import { DrawerContext } from "./DrawerContext";
import { ClientOnly } from "../ClientOnly/ClientOnly";

export type DrawerPortalPropsT = HTMLMotionProps<"div">;

export function DrawerPortal({ onClick, ...p }: DrawerPortalPropsT) {
  const { isOpen, setOpen } = use(DrawerContext);

  return (
    <ClientOnly>
      <Portal>
        <AnimatePresence>
          {isOpen ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={ev => {
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