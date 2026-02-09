import type { ComponentProps } from "react";
import type { HTMLMotionProps } from "framer-motion";

export type ProgressContextT = {
  value: number;
  maxValue: number;
};

export type ProgressRootPropsT = ComponentProps<"div"> & {
  value: number;
  maxValue?: number;
};

export type ProgressBarPropsT = HTMLMotionProps<"div"> & {
  duration?: number;
};
