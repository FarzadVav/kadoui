import type { AnimationScope, MotionValue, HTMLMotionProps } from "framer-motion";
import type { ComponentProps, Dispatch, PropsWithChildren, SetStateAction } from "react";

export type SheetContextT = {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  closeHandler: () => void;
  scope?: AnimationScope<any>;
  y?: MotionValue<number>;
};

export type SheetRootPropsT = PropsWithChildren;

export type SheetBodyPropsT = HTMLMotionProps<"div">;

export type SheetContentPropsT = ComponentProps<"div">;

export type SheetHeaderPropsT = ComponentProps<"div">;

export type SheetHandlebarPropsT = ComponentProps<"div">;

export type SheetTogglePropsT = ComponentProps<"button">;

export type SheetPortalPropsT = HTMLMotionProps<"div">;
