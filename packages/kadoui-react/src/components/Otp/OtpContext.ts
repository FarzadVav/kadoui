import { createContext } from "react";

import type { OtpContextT } from "./otpTypes";

export const OtpContext = createContext<OtpContextT>({
  value: "",
  syncValue: () => {},
  getInputsValue: () => "",
});
