"use client";

import { useEffect, useRef } from "react";

import { OtpContext } from "./OtpContext";
import type { OtpRootPropsT } from "./otpTypes";
import { AccessNavigation } from "../AccessNavigation/AccessNavigation";

export function OtpRoot({ autoFocus, ...p }: OtpRootPropsT) {
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (autoFocus) {
      inputs.current[0]?.focus();
    }
  }, [autoFocus]);

  const getInputsValue = () => {
    return inputs?.current.map((input) => input?.value || "").join("") || "";
  };

  return (
    <OtpContext value={{ inputs, getInputsValue }}>
      <AccessNavigation
        dir="ltr"
        direction="x"
        {...p}
      />
    </OtpContext>
  );
}
