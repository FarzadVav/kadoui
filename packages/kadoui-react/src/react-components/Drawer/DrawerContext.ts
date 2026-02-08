import { createContext, Dispatch, SetStateAction } from "react";

export type DrawerContextT = {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export const DrawerContext = createContext<DrawerContextT>({} as DrawerContextT);