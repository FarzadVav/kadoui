"use client";

import { use } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Portal } from "../Portal/Portal";
import { SheetContext } from "./SheetContext";
import { ClientOnly } from "../ClientOnly/ClientOnly";
import type { SheetPortalPropsT } from "./sheetTypes";

export function SheetPortal(p: SheetPortalPropsT) {
  const { isOpen, closeHandler: handleClose, scope } = use(SheetContext);

  return (
    <ClientOnly>
      <Portal>
        <AnimatePresence>
          {isOpen ? (
            <motion.div
              ref={scope}
              onClick={handleClose}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              {...p}
            />
          ) : null}
        </AnimatePresence>
      </Portal>
    </ClientOnly>
  )
}