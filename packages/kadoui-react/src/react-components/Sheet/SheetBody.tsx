"use client";

import { use, useEffect, useRef } from "react";
import { motion, MotionStyle } from "framer-motion";

import { SheetContext } from "./SheetContext";
import type { SheetBodyPropsT } from "./sheetTypes";
import {
  SHEET_DISMISS_OFFSET_RATIO,
  SHEET_DISMISS_VELOCITY,
} from "./sheetTypes";
import { FRAMER_MOTION_DURATION } from "../../configs";

export function SheetBody({
  style,
  onPointerDown,
  offset = 0,
  ...p
}: SheetBodyPropsT) {
  const {
    isOpen,
    y,
    dragControls,
    closeHandler: handleClose,
  } = use(SheetContext);

  const bodyRef = useRef<HTMLDivElement>(null);

  const styles: MotionStyle = {
    y,
    left: offset,
    right: offset,
    height: "75%",
    bottom: offset,
    display: "flex",
    overflow: "hidden",
    touchAction: "none",
    position: "absolute",
    flexDirection: "column",
    ...style,
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        const focusableElement = bodyRef.current?.querySelector(
          "[data-sheet='focus']",
        ) as HTMLElement | null | undefined;
        focusableElement?.focus();
      }, FRAMER_MOTION_DURATION);
    }
  }, [isOpen]);

  return (
    <motion.div
      ref={bodyRef}
      style={styles}
      onClick={(ev) => ev.stopPropagation()}
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      exit={{ y: "100%" }}
      drag="y"
      dragListener={false}
      dragMomentum={false}
      dragControls={dragControls}
      onPointerDown={(ev) => {
        ev.stopPropagation();
        dragControls.start(ev);
        onPointerDown?.(ev);
      }}
      transition={{
        ease: "easeInOut",
        duration: FRAMER_MOTION_DURATION,
      }}
      onDragEnd={(_, info) => {
        const height = bodyRef.current?.offsetHeight ?? 0;
        const offset = info.offset.y;
        const velocity = info.velocity.y;
        const dragY = y.get();

        const shouldClose =
          dragY >= height * SHEET_DISMISS_OFFSET_RATIO ||
          offset >= height * SHEET_DISMISS_OFFSET_RATIO ||
          velocity >= SHEET_DISMISS_VELOCITY;

        if (shouldClose) {
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
