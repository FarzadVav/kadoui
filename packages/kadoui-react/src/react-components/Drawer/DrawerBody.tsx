"use client";

import { motion, MotionStyle } from "framer-motion";
import { ReactNode, use, useEffect, useRef } from "react";

import { DrawerContext } from "./DrawerContext";
import type { DrawerBodyPropsT } from "./drawerTypes";
import { FRAMER_MOTION_DURATION } from "../../configs";

export function DrawerBody({
  dir,
  style,
  children,
  position,
  ...p
}: DrawerBodyPropsT) {
  const { isOpen } = use(DrawerContext);

  const bodyRef = useRef<HTMLDivElement>(null);

  const currentDir: "ltr" | "rtl" = (dir ||
    document.documentElement.getAttribute("dir") ||
    "ltr") as "ltr" | "rtl";
  const currentPosition = position || (currentDir === "ltr" ? "left" : "right");
  const direction = ["right", "left"].includes(currentPosition) ? "y" : "x";

  const width = direction === "y" ? "clamp(300px,30%,30%)" : undefined;
  const height = direction === "y" ? undefined : "50%";

  const styles: MotionStyle = {
    width,
    height,
    padding: 10,
    overflowY: "auto",
    position: "absolute",
    backgroundColor: "var(--color-card)",
    ...(currentPosition === "top"
      ? { top: 0, left: 0, right: 0 }
      : currentPosition === "right"
        ? { top: 0, bottom: 0, right: 0 }
        : currentPosition === "bottom"
          ? { bottom: 0, left: 0, right: 0 }
          : { top: 0, bottom: 0, left: 0 }),
    ...style,
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        const focusableElement = bodyRef.current?.querySelector(
          "[data-drawer='focus']",
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
      initial={
        direction === "y"
          ? { x: currentPosition === "left" ? "-100%" : "100%" }
          : { y: currentPosition === "top" ? "-100%" : "100%" }
      }
      animate={{ y: 0, x: 0 }}
      exit={
        direction === "y"
          ? { x: currentPosition === "left" ? "-100%" : "100%" }
          : { y: currentPosition === "top" ? "-100%" : "100%" }
      }
      transition={{ ease: "easeInOut", duration: FRAMER_MOTION_DURATION }}
      {...p}
    >
      {children as ReactNode}
    </motion.div>
  );
}
