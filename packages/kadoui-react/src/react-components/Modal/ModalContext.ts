import { createContext, Dispatch, SetStateAction } from "react";

export type ModalContextT = {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export const ModalContext = createContext<ModalContextT>({} as ModalContextT);
