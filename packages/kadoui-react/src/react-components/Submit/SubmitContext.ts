import { createContext } from "react";

export type SubmitContextT = {
  pending: boolean;
}

export const SubmitContext = createContext({} as SubmitContextT);