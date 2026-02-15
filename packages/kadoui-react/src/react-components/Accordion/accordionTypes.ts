import type { HTMLMotionProps } from "framer-motion";
import type { ComponentProps, Dispatch, PropsWithChildren, ReactNode, SetStateAction } from "react";

export type AccordionContextT = {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export type AccordionRootPropsT = PropsWithChildren;

export type AccordionBodyPropsT = HTMLMotionProps<"div">;

export type AccordionTogglePropsT = Omit<ComponentProps<"button">, "type"> & {
  icon?: ReactNode;
};
