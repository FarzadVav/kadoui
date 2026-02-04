import { createContext, RefObject } from "react";

export type createContextT = {
  inputs?: RefObject<(HTMLInputElement | null)[]>;
  getInputsValue: () => string
}

export const OtpContext = createContext<createContextT>({
  getInputsValue: () => ""
});