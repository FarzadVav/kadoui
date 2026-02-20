import type { ComponentProps, PropsWithChildren } from "react";
import type { AnimationScope, MotionValue, HTMLMotionProps } from "framer-motion";

export type SheetContextT = {
  isOpen: boolean;
  setOpen: (newState: boolean) => void;
  closeHandler: () => void;
  scope?: AnimationScope<any>;
  y?: MotionValue<number>;
};

export type SheetRootPropsT = PropsWithChildren;

export type SheetBodyPropsT = HTMLMotionProps<"div">;

export type SheetContentPropsT = ComponentProps<"div">;

export type SheetHeaderPropsT = ComponentProps<"div">;

export type SheetHandlebarPropsT = ComponentProps<"div">;

export type SheetTogglePropsT = Omit<ComponentProps<"button">, "type">;

export type SheetPortalPropsT = HTMLMotionProps<"div">;
