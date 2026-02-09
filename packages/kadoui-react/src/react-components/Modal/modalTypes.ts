import type { HTMLMotionProps } from "framer-motion";
import type { ComponentProps, Dispatch, PropsWithChildren, SetStateAction } from "react";

export type ModalContextT = {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export type ModalRootPropsT = PropsWithChildren & {
  defaultOpen?: boolean;
};

export type ModalContentPropsT = ComponentProps<"div">;

export type ModalHeaderPropsT = ComponentProps<"div">;

export type ModalTogglePropsT = ComponentProps<"button">;

export type ModalBodyPropsT = HTMLMotionProps<"div">;

export type ModalPortalPropsT = HTMLMotionProps<"div">;
