"use client";

import { use, useEffect, useRef } from "react";
import { HTMLMotionProps, motion, useDragControls } from "framer-motion";

import { SheetContext } from "./SheetContext";
import { FRAMER_MOTION_DURATION } from "../../configs";

export type SheetBodyPropsT = HTMLMotionProps<"div">;

export function SheetBody({ onPointerDown, ...p }: SheetBodyPropsT) {
  const controls = useDragControls();
  const { isOpen, y, closeHandler: handleClose } = use(SheetContext);

  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        const focusableElement = bodyRef.current?.querySelector("[data-sheet='focus']") as
          HTMLElement | null | undefined;
        focusableElement?.focus();
      }, FRAMER_MOTION_DURATION);
    }
  }, [isOpen]);

  return (
    <motion.div
      id="sheet"
      ref={bodyRef}
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
        duration: FRAMER_MOTION_DURATION
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
