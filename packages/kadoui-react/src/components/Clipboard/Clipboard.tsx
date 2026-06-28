"use client";

import { MouseEvent } from "react";
import { useClipboard } from "@mantine/hooks";

import type { ClipboardPropsT } from "./clipboardTypes";

export function Clipboard({
  text,
  title,
  onCopy,
  onClick,
  children,
  copiedChildren,
  timeout = 3_000,
  "aria-label": ariaLabel,
  ...p
}: ClipboardPropsT) {
  const { copy, copied } = useClipboard({ timeout });

  const handleClick = (
    ev: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  ) => {
    onClick?.(ev);
    copy(text.trim());
    onCopy?.();
  };

  return (
    <button
      title={title || text}
      onClick={handleClick}
      aria-label={ariaLabel || text}
      {...p}
    >
      {copiedChildren && copied ? copiedChildren : children}
    </button>
  );
}
