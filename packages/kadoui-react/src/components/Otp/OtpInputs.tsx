"use client";

import { ClipboardEvent, KeyboardEvent, use } from "react";

import { OtpContext } from "./OtpContext";
import type { OtpInputsPropsT } from "./otpTypes";

export function OtpInputs({
  name,
  length,
  onLastChange,
  ...p
}: OtpInputsPropsT) {
  const { inputs, getInputsValue, syncValue } = use(OtpContext);

  const handlePaste = (
    ev: ClipboardEvent<HTMLInputElement>,
    startIndex: number,
  ) => {
    ev.preventDefault();

    const pastedData = ev.clipboardData.getData("text").replace(/\s/g, ""); // Remove whitespace
    if (!pastedData) return;

    for (let i = 0; i < pastedData.length; i++) {
      const inputIndex = startIndex + i;
      if (inputIndex >= length) break; // Don't exceed OTP length

      const input = inputs?.current[inputIndex];
      const indexedPastedData = pastedData[i];
      if (input && indexedPastedData) {
        input.value = indexedPastedData;
      }
    }

    const nextIndex = Math.min(startIndex + pastedData.length, length - 1);
    const nextInput = inputs?.current[nextIndex];
    nextInput?.focus();
    nextInput?.select();

    syncValue();

    const otpValue = getInputsValue();
    if (otpValue.length === length) {
      onLastChange?.(otpValue);
    }
  };

  const handleInputChange = (value: string, index: number) => {
    if (value) {
      const currentInput = inputs?.current[index];
      const currentValue = currentInput?.value[currentInput.value.length - 1];
      if (currentValue) {
        currentInput.value = currentValue;
      }

      const nextInput = inputs?.current[index + 1];
      if (nextInput) {
        nextInput.focus();
        nextInput.select();
        syncValue();

        return;
      }

      syncValue();
      onLastChange?.(getInputsValue());
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !e.currentTarget.value && index > 0) {
      inputs?.current[index - 1]?.focus();
      return;
    }

    if (e.key === "Enter" && getInputsValue().length === length) {
      e.preventDefault();
      syncValue();
      e.currentTarget.form?.requestSubmit();
    }
  };

  return Array.from({ length }).map((_, index) => (
    <input
      key={index}
      autoComplete="off"
      name={`${name || "otp"}-${index}`}
      onPaste={(ev) => handlePaste(ev, index)}
      onKeyDown={(ev) => handleKeyDown(ev, index)}
      onChange={(ev) => handleInputChange(ev.target.value, index)}
      ref={(el) => {
        if (inputs) {
          inputs.current[index] = el;
        }
      }}
      {...p}
    />
  ));
}
