"use client";

import { use } from "react";
import { HTMLMotionProps, motion, useDragControls } from "framer-motion";

import { SheetContext } from "./SheetContext";

export type SheetBodyPropsT = HTMLMotionProps<"div">;

export function SheetBody({ onPointerDown, ...p }: SheetBodyPropsT) {
  const controls = useDragControls();
  const { y, closeHandler: handleClose } = use(SheetContext);

  return (
    <motion.div
      id="sheet"
      onClick={(ev) => ev.stopPropagation()}
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      exit={{ y: "100%" }}
      style={{ y }}
      drag="y"
      dragListener={false}
      dragControls={controls}
      onPointerDown={(ev) => {
        ev.stopPropagation();
        controls?.start(ev);
        onPointerDown?.(ev);
      }}
      transition={{
        ease: "easeInOut",
      }}
      onDragEnd={() => {
        if ((y?.get() || 0) >= 100) {
          handleClose();
        }
      }}
      dragConstraints={{
        top: 0,
        bottom: 0,
      }}
      dragElastic={{
        top: 0,
        bottom: 0.5,
      }}
      {...p}
    />
  );
}
