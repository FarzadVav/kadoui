import type { ComponentProps, RefObject } from "react";

export type OtpContextT = {
  inputs?: RefObject<(HTMLInputElement | null)[]>;
  hiddenInput?: RefObject<HTMLInputElement | null>;
  getInputsValue: () => string;
  syncValue: () => void;
  value: string;
};

export type OtpRootPropsT = ComponentProps<"div"> & {
  autoFocus?: boolean;
};

export type OtpInputsPropsT = ComponentProps<"input"> & {
  length: number;
  onLastChange?: (otp: string) => void;
};

export type OtpHiddenInputPropsT = ComponentProps<"input">;
