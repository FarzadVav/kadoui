"use client";

import { useFormStatus } from "react-dom";

import { SubmitContext } from "./SubmitContext";
import type { SubmitRootPropsT } from "./submitTypes";

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
