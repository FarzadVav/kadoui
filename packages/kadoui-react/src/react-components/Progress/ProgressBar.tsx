"use client";

import { use } from "react";
import { motion, MotionStyle } from "framer-motion";

import { ProgressContext } from "./ProgressContext";
import type { ProgressBarPropsT } from "./progressTypes";

export function ProgressBar({
  duration,
  children,
  style,
  ...p
}: ProgressBarPropsT) {
  const { value, maxValue } = use(ProgressContext);

  const percentage = Math.min(100, Math.max(0, (value / maxValue) * 100));

  const styles: MotionStyle = {
    padding: 3,
    height: "100%",
    maxWidth: "100%",
    borderRadius: "inherit",
    backgroundColor: "var(--color-primary)",
    color: "var(--color-primary-foreground)",
    ...style,
  };

  return (
    <motion.div
      style={styles}
      initial={{ width: 0 }}
      transition={{ duration: duration || 3 }}
      whileInView={{ width: `${percentage}%` }}
      {...p}
    >
      {children || <span>{percentage}%</span>}
    </motion.div>
  );
}
