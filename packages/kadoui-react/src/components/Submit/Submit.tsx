"use client";

import { useFormStatus } from "react-dom";

import type { SubmitPropsT } from "./submitTypes";

export function Submit({ children, disabled, ...p }: SubmitPropsT) {
  const { pending } = useFormStatus();

  return (
    <button disabled={disabled || pending} {...p}>
      {children?.(pending)}
    </button>
  );
}
