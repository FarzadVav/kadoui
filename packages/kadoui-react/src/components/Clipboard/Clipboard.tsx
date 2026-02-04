"use client";

import { useClipboard } from "@mantine/hooks";
import { ButtonHTMLAttributes, MouseEvent, ReactNode } from "react";

export type ClipboardPropsT = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  timeout?: number;
  copiedChildren?: ReactNode;
};

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
