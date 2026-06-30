"use client";

import { use } from "react";
import { motion } from "framer-motion";

import { ProgressContext } from "./ProgressContext";
import type { ProgressBarPropsT } from "./progressTypes";

export function ProgressBar({ duration, children, ...p }: ProgressBarPropsT) {
  const { value, maxValue } = use(ProgressContext);

  const percentage = Math.min(100, Math.max(0, (value / maxValue) * 100));

  return (
    <motion.div
      initial={{ width: 0 }}
      transition={{ duration: duration || 3 }}
      whileInView={{ width: `${percentage}%` }}
      {...p}
    >
      {children || <span>{percentage}%</span>}
    </motion.div>
  );
}
