import type { ComponentProps, PropsWithChildren } from "react";
import type { DragControls, MotionValue, HTMLMotionProps } from "framer-motion";

import type { SearchParamsNavigationOptionsT } from "../shared/searchParamsNavigationTypes";

export const DRAWER_SHEET_DISMISS_VELOCITY = 500;
export const DRAWER_SHEET_DISMISS_OFFSET_RATIO = 0.25;

export type DrawerSheetPositionT = "top" | "right" | "bottom" | "left";

export type DrawerSheetContextT = {
  isOpen: boolean;
  setOpen: (newState: boolean) => void;
  closeHandler: () => void;
  dragControls: DragControls;
  x: MotionValue<number>;
  y: MotionValue<number>;
};

export type DrawerSheetBodyContextT = {
  position: DrawerSheetPositionT;
  gesture: boolean;
};

export type DrawerSheetStateRootPropsT = PropsWithChildren & {
  isOpen?: boolean;
  setOpen?: (newState: boolean) => void;
  defaultOpen?: boolean;
};

export type DrawerSheetSearchParamsRootPropsT = PropsWithChildren &
  SearchParamsNavigationOptionsT & {
    openKey?: string;
  };

/** @deprecated Use DrawerSheetStateRootPropsT */
export type DrawerSheetRootPropsT = DrawerSheetStateRootPropsT;

export type DrawerSheetBodyPropsT = HTMLMotionProps<"div"> & {
  position?: DrawerSheetPositionT;
  offset?: number;
  gesture?: boolean;
};

export type DrawerSheetContentPropsT = ComponentProps<"div">;

export type DrawerSheetIndicatorPropsT = ComponentProps<"div">;

export type DrawerSheetTogglePropsT = Omit<ComponentProps<"button">, "type">;

export type DrawerSheetPortalPropsT = HTMLMotionProps<"div">;
