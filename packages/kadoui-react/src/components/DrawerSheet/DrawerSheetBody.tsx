"use client";

import { use, useEffect, useRef, useState } from "react";
import { motion, MotionStyle, PanInfo } from "framer-motion";

import { FRAMER_MOTION_DURATION } from "../../configs";
import type { DrawerSheetBodyPropsT } from "./drawerSheetTypes";
import {
  getDragAxis,
  getExit,
  getInitial,
  getPositionStyles,
  getSizeStyles,
  shouldCloseOnDrag,
} from "./drawerSheetUtils";
import {
  DrawerSheetBodyContext,
  DrawerSheetContext,
} from "./DrawerSheetContext";

export function DrawerSheetBody({
  style,
  offset = 0,
  onPointerDown,
  gesture = false,
  position = "bottom",
  ...p
}: DrawerSheetBodyPropsT) {
  const {
    isOpen,
    x,
    y,
    dragControls,
    closeHandler: handleClose,
  } = use(DrawerSheetContext);

  const bodyRef = useRef<HTMLDivElement>(null);
  const dragAxis = getDragAxis(position);
  const [viewportWidth, setViewportWidth] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth : 1024,
  );

  useEffect(() => {
    const onResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const styles: MotionStyle = {
    x,
    y,
    overflow: "hidden",
    position: "absolute",
    ...getPositionStyles(position, offset),
    ...getSizeStyles(viewportWidth, position),
    ...style,
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        const focusableElement = bodyRef.current?.querySelector(
          "[data-drawer-sheet='focus']",
        ) as HTMLElement | null | undefined;
        focusableElement?.focus();
      }, FRAMER_MOTION_DURATION);
    }
  }, [isOpen]);

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    const element = bodyRef.current;
    if (!element) return;

    const size = dragAxis === "y" ? element.offsetHeight : element.offsetWidth;
    const dragOffset = dragAxis === "y" ? info.offset.y : info.offset.x;
    const velocity = dragAxis === "y" ? info.velocity.y : info.velocity.x;
    const dragValue = dragAxis === "y" ? y.get() : x.get();

    if (shouldCloseOnDrag(position, size, dragOffset, velocity, dragValue)) {
      handleClose();
      return;
    }

    if (dragAxis === "x") {
      x.set(0);
    } else {
      y.set(0);
    }
  };

  const dragProps = gesture
    ? {
        drag: dragAxis,
        dragListener: false,
        dragMomentum: false,
        dragControls,
        onDragEnd: handleDragEnd,
        dragConstraints: { top: 0, bottom: 0, left: 0, right: 0 },
        dragElastic:
          position === "bottom"
            ? { top: 0, bottom: 0.5, left: 0, right: 0 }
            : position === "top"
              ? { top: 0.5, bottom: 0, left: 0, right: 0 }
              : position === "right"
                ? { top: 0, bottom: 0, left: 0, right: 0.5 }
                : { top: 0, bottom: 0, left: 0.5, right: 0 },
      }
    : {};

  return (
    <DrawerSheetBodyContext value={{ position, gesture }}>
      <motion.div
        ref={bodyRef}
        style={styles}
        data-drawer-sheet-body
        onClick={(ev) => ev.stopPropagation()}
        initial={getInitial(position)}
        animate={dragAxis === "x" ? { x: "0%" } : { y: "0%" }}
        exit={getExit(position)}
        transition={{
          ease: "easeInOut",
          duration: FRAMER_MOTION_DURATION,
        }}
        onPointerDown={(ev) => {
          if (gesture) {
            ev.stopPropagation();
            dragControls.start(ev);
          }
          onPointerDown?.(ev);
        }}
        {...dragProps}
        {...p}
      />
    </DrawerSheetBodyContext>
  );
}
