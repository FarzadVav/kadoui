import { AnimationScope, MotionValue } from "framer-motion";
import { createContext, Dispatch, SetStateAction } from "react";

export type SheetContextT = {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  closeHandler: () => void;
  scope?: AnimationScope<any>;
  y?: MotionValue<number>;
}

export const SheetContext = createContext<SheetContextT>({} as SheetContextT);