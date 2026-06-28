"use client";

import { use, useEffect, useRef, useState } from "react";
import { motion, MotionStyle, PanInfo } from "framer-motion";

import { FRAMER_MOTION_DURATION } from "../../configs";
import {
  DrawerSheetBodyContext,
  DrawerSheetContext,
} from "./DrawerSheetContext";
import type {
  DrawerSheetBodyPropsT,
  DrawerSheetPositionT,
} from "./drawerSheetTypes";
import {
  DRAWER_SHEET_DISMISS_OFFSET_RATIO,
  DRAWER_SHEET_DISMISS_VELOCITY,
} from "./drawerSheetTypes";

function getSizeStyles(
  position: DrawerSheetPositionT,
  viewportWidth: number,
): MotionStyle {
  if (position === "top" || position === "bottom") {
    if (viewportWidth < 640) {
      return { height: "75vh" };
    }

    return { height: "50vh" };
  }

  if (viewportWidth < 640) {
    return { width: "80vw" };
  }

  if (viewportWidth < 1024) {
    return { width: "50vw" };
  }

  return { width: "30vw" };
}

function getPositionStyles(
  position: DrawerSheetPositionT,
  offset: number,
): MotionStyle {
  switch (position) {
    case "top":
      return { top: offset, left: offset, right: offset };
    case "right":
      return { top: offset, bottom: offset, right: offset };
    case "left":
      return { top: offset, bottom: offset, left: offset };
    case "bottom":
    default:
      return { bottom: offset, left: offset, right: offset };
  }
}

function getInitial(position: DrawerSheetPositionT) {
  switch (position) {
    case "top":
      return { y: "-100%" };
    case "right":
      return { x: "100%" };
    case "left":
      return { x: "-100%" };
    case "bottom":
    default:
      return { y: "100%" };
  }
}

function getExit(position: DrawerSheetPositionT) {
  return getInitial(position);
}

function getDragAxis(position: DrawerSheetPositionT): "x" | "y" {
  return position === "left" || position === "right" ? "x" : "y";
}

function shouldCloseOnDrag(
  position: DrawerSheetPositionT,
  size: number,
  offset: number,
  velocity: number,
  dragValue: number,
) {
  const threshold = size * DRAWER_SHEET_DISMISS_OFFSET_RATIO;

  switch (position) {
    case "bottom":
      return (
        dragValue >= threshold ||
        offset >= threshold ||
        velocity >= DRAWER_SHEET_DISMISS_VELOCITY
      );
    case "top":
      return (
        dragValue <= -threshold ||
        offset <= -threshold ||
        velocity <= -DRAWER_SHEET_DISMISS_VELOCITY
      );
    case "right":
      return (
        dragValue >= threshold ||
        offset >= threshold ||
        velocity >= DRAWER_SHEET_DISMISS_VELOCITY
      );
    case "left":
      return (
        dragValue <= -threshold ||
        offset <= -threshold ||
        velocity <= -DRAWER_SHEET_DISMISS_VELOCITY
      );
  }
}

export function DrawerSheetBody({
  style,
  onPointerDown,
  position = "bottom",
  offset = 0,
  gesture = false,
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
    display: "flex",
    overflow: "hidden",
    position: "absolute",
    flexDirection: "column",
    ...getSizeStyles(position, viewportWidth),
    ...getPositionStyles(position, offset),
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
        data-drawer-sheet-body
        style={styles}
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
