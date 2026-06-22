import type { ComponentProps, PropsWithChildren } from "react";
import type { DragControls, MotionValue, HTMLMotionProps } from "framer-motion";

export const SHEET_DISMISS_OFFSET_RATIO = 0.25;
export const SHEET_DISMISS_VELOCITY = 500;

export type SheetContextT = {
  isOpen: boolean;
  setOpen: (newState: boolean) => void;
  closeHandler: () => void;
  dragControls: DragControls;
  y: MotionValue<number>;
};

export type SheetRootPropsT = PropsWithChildren;

export type SheetBodyPropsT = HTMLMotionProps<"div"> & {
  offset?: number;
};

export type SheetContentPropsT = ComponentProps<"div">;

export type SheetHeaderPropsT = ComponentProps<"div">;

export type SheetFooterPropsT = ComponentProps<"div">;

export type SheetHandlebarPropsT = ComponentProps<"div">;

export type SheetTogglePropsT = Omit<ComponentProps<"button">, "type">;

export type SheetPortalPropsT = HTMLMotionProps<"div">;
