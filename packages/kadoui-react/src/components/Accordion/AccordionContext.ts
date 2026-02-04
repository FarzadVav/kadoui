import { createContext, Dispatch, SetStateAction } from "react";

export type AccordionContextT = {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const AccordionContext = createContext<AccordionContextT>({} as AccordionContextT)