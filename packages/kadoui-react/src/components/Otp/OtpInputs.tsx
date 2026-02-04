"use client";

import { ClipboardEvent, InputHTMLAttributes, KeyboardEvent, use } from "react";

import { OtpContext } from "./OtpContext";

export type OtpInputsPropsT = InputHTMLAttributes<HTMLInputElement> & {
  length: number;
  onLastChange?: (otp: string) => void;
}

export function OtpInputs({ name, length, onLastChange, ...props }: OtpInputsPropsT) {
  const { inputs, getInputsValue } = use(OtpContext);

  const handlePaste = (ev: ClipboardEvent<HTMLInputElement>, startIndex: number) => {
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
    inputs?.current[nextIndex]?.focus();

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

      const nextInput = inputs?.current[index + 1]
      if (nextInput) {
        nextInput.value = "";
        nextInput.focus();

        return
      }

      onLastChange?.(getInputsValue());
    }
  };

  const handleBackspace = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !e.currentTarget.value && index > 0) {
      inputs?.current[index - 1]?.focus();
    }
  };

  return Array.from({ length }).map((_, index) => (
    <input
      key={index}
      autoComplete="off"
      name={`${name || "otp"}-${index}`}
      onPaste={ev => handlePaste(ev, index)}
      onKeyDown={ev => handleBackspace(ev, index)}
      onChange={ev => handleInputChange(ev.target.value, index)}
      ref={el => {
        if (inputs) {
          inputs.current[index] = el;
        }
      }}
      {...props}
    />
  )
  );
}