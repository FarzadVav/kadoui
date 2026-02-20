import type { HTMLMotionProps } from "framer-motion";
import type { ComponentProps, PropsWithChildren } from "react";

export type ModalContextT = {
  isOpen: boolean;
  setOpen: (newState: boolean) => void;
};

export type ModalRootPropsT = PropsWithChildren & {
  defaultOpen?: boolean;
};

export type ModalContentPropsT = ComponentProps<"div">;

export type ModalHeaderPropsT = ComponentProps<"div">;

export type ModalTogglePropsT = Omit<ComponentProps<"button">, "type">;

export type ModalBodyPropsT = HTMLMotionProps<"div">;

export type ModalPortalPropsT = HTMLMotionProps<"div">;
