import { createContext, Dispatch, SetStateAction } from "react";

export type PasswordInputContextT = {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}

export const PasswordInputContext = createContext<PasswordInputContextT>({} as PasswordInputContextT);