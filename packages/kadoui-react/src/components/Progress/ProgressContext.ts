import { createContext } from "react";

export type ProgressContextT = {
  value: number;
  maxValue: number;
}

export const ProgressContext = createContext<ProgressContextT>({} as ProgressContextT);