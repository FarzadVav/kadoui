"use client";

import { type ComponentProps, use } from "react";

import { OtpContext } from "./OtpContext";

export type OtpHiddenInputPropsT = ComponentProps<"input">;

export function OtpHiddenInput({ name, ...p }: OtpHiddenInputPropsT) {
  const { getInputsValue } = use(OtpContext);

  return (
    <input type="hidden" tabIndex={-1} name={name || "otp"} value={getInputsValue()} {...p} />
  )
}