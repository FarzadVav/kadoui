import type { HTMLMotionProps } from "framer-motion";
import type { ComponentProps, PropsWithChildren, RefObject } from "react";

import type { SearchParamsNavigationOptionsT } from "../../utils/types";

export type ModalContextT = {
  isOpen: boolean;
  setOpen: (newState: boolean) => void;
};

export type ModalStateRootPropsT = PropsWithChildren & {
  isOpen?: boolean;
  setOpen?: (newState: boolean) => void;
  defaultOpen?: boolean;
};

export type ModalSearchParamsRootPropsT = PropsWithChildren &
  SearchParamsNavigationOptionsT & {
    openKey?: string;
  };

/** @deprecated Use ModalStateRootPropsT */
export type ModalRootPropsT = ModalStateRootPropsT;

export type ModalContentPropsT = ComponentProps<"div">;

export type ModalIndicatorPropsT = ComponentProps<"div">;

export type ModalTogglePropsT = Omit<ComponentProps<"button">, "type">;

export type ModalBodyPropsT = HTMLMotionProps<"div">;

export type ModalPortalPropsT = HTMLMotionProps<"div">;
