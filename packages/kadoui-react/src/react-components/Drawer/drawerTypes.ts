import type { HTMLMotionProps } from "framer-motion";
import type { ComponentProps, Dispatch, PropsWithChildren, SetStateAction } from "react";

export type DrawerContextT = {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export type DrawerRootPropsT = PropsWithChildren;

export type DrawerBodyPropsT = HTMLMotionProps<"div"> & {
  position?: "top" | "right" | "bottom" | "left";
};

export type DrawerTogglePropsT = Omit<ComponentProps<"button">, "type">;

export type DrawerPortalPropsT = HTMLMotionProps<"div">;
