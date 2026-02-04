"use client"

import { use } from "react";
import { HTMLMotionProps, motion } from "framer-motion";

import { ProgressContext } from "./ProgressContext";

export type ProgressBarPropsT = HTMLMotionProps<"div"> & {
  duration?: number;
}

export function ProgressBar({ duration, children, ...p }: ProgressBarPropsT) {
  const { value, maxValue } = use(ProgressContext);

  const percentage = Math.min(100, Math.max(0, (value / maxValue) * 100));

  return (
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: `${percentage}%` }}
      transition={{ duration: duration || 3 }}
      {...p}
    >
      {children || <span className="text-xs">{percentage}%</span>}
    </motion.div>
  )
}