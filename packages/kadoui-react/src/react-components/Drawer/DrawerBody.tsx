"use client";

import { motion } from "framer-motion";
import { ReactNode, use, useEffect, useRef } from "react";

import { FRAMER_MOTION_DURATION } from "../../configs";
import { DrawerContext } from "./DrawerContext";
import type { DrawerBodyPropsT } from "./drawerTypes";

export function DrawerBody({ position, dir, children, ...p }: DrawerBodyPropsT) {
  const { isOpen } = use(DrawerContext);

  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        const focusableElement = bodyRef.current?.querySelector("[data-drawer='focus']") as
          HTMLElement | null | undefined;
        focusableElement?.focus();
      }, FRAMER_MOTION_DURATION);
    };
  }, [isOpen]);

  const currentDir: "ltr" | "rtl" = (dir || document.documentElement.getAttribute("dir") || "ltr") as ("ltr" | "rtl");
  const currentPosition = position || (currentDir === "ltr" ? "left" : "right");
  const direction = ["right", "left"].includes(currentPosition) ? "y" : "x";

  const width = direction === "y" ? "clamp(300px,30%,30%)" : undefined;
  const height = direction === "y" ? undefined : "50%";

  return (
    <motion.div
      ref={bodyRef}
      onClick={ev => ev.stopPropagation()}
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
      style={{
        width,
        height,
        ...(
          currentPosition === "top"
            ? { top: 0, left: 0, right: 0 }
            : currentPosition === "right"
              ? { top: 0, bottom: 0, right: 0 }
              : currentPosition === "bottom"
                ? { bottom: 0, left: 0, right: 0 }
                : { top: 0, bottom: 0, left: 0 }
        )
      }}
      transition={{ ease: "easeInOut", duration: FRAMER_MOTION_DURATION }}
      {...p}
    >
      {children as ReactNode}
    </motion.div>
  );
};