import { createContext, Dispatch, SetStateAction } from "react";

export type SwapContextT = {
  keys: string[];
  activeKey: string;
  setActiveKey: Dispatch<SetStateAction<string>>;
};

export const SwapContext = createContext<SwapContextT>({} as SwapContextT);
