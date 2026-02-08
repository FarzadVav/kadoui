import { createContext, Dispatch, SetStateAction } from "react";

export type SpoilerContextT = {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const SpoilerContext = createContext({} as SpoilerContextT);