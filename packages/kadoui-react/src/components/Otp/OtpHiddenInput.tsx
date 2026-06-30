"use client";

import { use } from "react";

import { OtpContext } from "./OtpContext";
import type { OtpHiddenInputPropsT } from "./otpTypes";

export function OtpHiddenInput({ name, ...p }: OtpHiddenInputPropsT) {
  const { value, hiddenInput } = use(OtpContext);

  return (
    <input
      ref={hiddenInput}
      type="hidden"
      tabIndex={-1}
      name={name || "otp"}
      value={value}
      {...p}
    />
  );
}
