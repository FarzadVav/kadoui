import type { ComponentProps, ReactNode } from "react";

export type ClipboardPropsT = ComponentProps<"button"> & {
  text: string;
  timeout?: number;
  onCopy?: () => void;
  copiedChildren?: ReactNode;
};
