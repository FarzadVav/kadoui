"use client";

import { use } from "react";

import { OtpContext } from "./OtpContext";
import type { OtpHiddenInputPropsT } from "./otpTypes";

export function OtpHiddenInput({ name, ...p }: OtpHiddenInputPropsT) {
  const { getInputsValue } = use(OtpContext);

  return (
    <input type="hidden" tabIndex={-1} name={name || "otp"} value={getInputsValue()} {...p} />
  )
}