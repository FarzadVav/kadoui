import type { HTMLMotionProps } from "framer-motion";
import type { ComponentProps, PropsWithChildren, RefObject } from "react";

export type ModalContextT = {
  isOpen: boolean;
  setOpen: (newState: boolean) => void;
};

export type ModalRootPropsT = PropsWithChildren & {
  defaultOpen?: boolean;
};

export type ModalContentPropsT = ComponentProps<"div">;

export type ModalHeaderPropsT = ComponentProps<"header">;

export type ModalFooterPropsT = ComponentProps<"footer">;

export type ModalTogglePropsT = Omit<ComponentProps<"button">, "type">;

export type ModalBodyPropsT = HTMLMotionProps<"div">;

export type ModalPortalPropsT = HTMLMotionProps<"div">;
