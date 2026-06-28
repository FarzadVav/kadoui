"use client";

import { CSSProperties, useEffect, useRef } from "react";

import { OtpContext } from "./OtpContext";
import type { OtpRootPropsT } from "./otpTypes";
import { AccessNavigation } from "../AccessNavigation/AccessNavigation";

export function OtpRoot({ autoFocus, style, ...p }: OtpRootPropsT) {
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  const styles: CSSProperties = {
    gap: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    ...style,
  };

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
      <AccessNavigation style={styles} dir="ltr" direction="x" {...p} />
    </OtpContext>
  );
}
