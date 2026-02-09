"use client";

import { useClipboard } from "@mantine/hooks";
import { MouseEvent } from "react";

import type { ClipboardPropsT } from "./clipboardTypes";

export function Clipboard({
  copiedChildren,
  onClick,
  children,
  text,
  title,
  "aria-label": ariaLabel,
  timeout = 3_000,
  ...props
}: ClipboardPropsT) {
  const { copy, copied } = useClipboard({ timeout });

  const handleClick = (ev: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    onClick?.(ev);
    copy(text.trim());
  };

  return (
    <button
      aria-label={ariaLabel || text}
      title={title || text}
      onClick={handleClick}
      {...props}>
      {copiedChildren && copied ? copiedChildren : children}
    </button>
  );
}
