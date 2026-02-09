"use client";

import { useEffect, useRef } from "react";

import { AccessNavigation } from "../AccessNavigation/AccessNavigation";
import { OtpContext } from "./OtpContext";
import type { OtpRootPropsT } from "./otpTypes";

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
        direction="x"
        {...p}
      />
    </OtpContext>
  );
}
