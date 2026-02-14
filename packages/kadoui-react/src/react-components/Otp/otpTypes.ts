import type { ComponentProps, RefObject } from "react";

import type { AccessNavigationPropsT } from "../AccessNavigation/AccessNavigation";

export type OtpContextT = {
  inputs?: RefObject<(HTMLInputElement | null)[]>;
  getInputsValue: () => string;
};

export type OtpRootPropsT = Omit<AccessNavigationPropsT, "direction" | "dir"> & {
  autoFocus?: boolean;
};

export type OtpInputsPropsT = ComponentProps<"input"> & {
  length: number;
  onLastChange?: (otp: string) => void;
};

export type OtpHiddenInputPropsT = ComponentProps<"input">;
