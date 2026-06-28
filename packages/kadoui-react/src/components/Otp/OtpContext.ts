import { createContext } from "react";

import type { OtpContextT } from "./otpTypes";

export const OtpContext = createContext<OtpContextT>({
  getInputsValue: () => ""
});