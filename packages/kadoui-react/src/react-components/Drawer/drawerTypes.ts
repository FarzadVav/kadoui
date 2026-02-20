import type { HTMLMotionProps } from "framer-motion";
import type { ComponentProps, PropsWithChildren } from "react";

export type DrawerContextT = {
  isOpen: boolean;
  setOpen: (newState: boolean) => void;
};

export type DrawerRootPropsT = PropsWithChildren;

export type DrawerBodyPropsT = HTMLMotionProps<"div"> & {
  position?: "top" | "right" | "bottom" | "left";
};

export type DrawerTogglePropsT = Omit<ComponentProps<"button">, "type">;

export type DrawerPortalPropsT = HTMLMotionProps<"div">;
