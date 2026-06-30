"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { OtpContext } from "./OtpContext";
import type { OtpRootPropsT } from "./otpTypes";

export function OtpRoot({ autoFocus, ...p }: OtpRootPropsT) {
  const [value, setValue] = useState("");
  
  const inputs = useRef<(HTMLInputElement | null)[]>([]);
  const hiddenInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autoFocus) {
      inputs.current[0]?.focus();
    }
  }, [autoFocus]);

  const getInputsValue = () => {
    return inputs?.current.map((input) => input?.value || "").join("") || "";
  };

  const syncValue = useCallback(() => {
    const nextValue = getInputsValue();
    setValue(nextValue);

    if (hiddenInput.current) {
      hiddenInput.current.value = nextValue;
    }
  }, []);

  return (
    <OtpContext
      value={{ inputs, hiddenInput, getInputsValue, syncValue, value }}
    >
      <div dir="ltr" {...p} />
    </OtpContext>
  );
}
