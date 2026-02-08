"use client";

import { useFormStatus } from "react-dom";
import type { ComponentProps, ReactNode } from "react";

import { SubmitContext } from "./SubmitContext";

export type SubmitRootPropsT = ComponentProps<"button"> & {
  loader?: ReactNode;
};

export function SubmitRoot({ disabled, ...p }: SubmitRootPropsT) {
  const { pending } = useFormStatus()

  return (
    <SubmitContext value={{ pending }}>
      <button
        disabled={disabled || pending}
        {...p}
      />
    </SubmitContext>
  )
}
