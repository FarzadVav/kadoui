import type { ComponentProps, RefObject } from "react";

import type { AccessNavigationPropsT } from "../AccessNavigation/AccessNavigation";

export type PopoverContextT = {
  isOpen: boolean;
  setOpen: (newState: boolean) => void;
  toggleRef: RefObject<HTMLButtonElement | null>;
  bodyRef: RefObject<HTMLDivElement | null>;
  mode: "click" | "hover" | "both";
};

export type PopoverRootPropsT = AccessNavigationPropsT & {
  mode?: PopoverContextT["mode"];
};

export type PopoverBodyPropsT = ComponentProps<"div"> & {
  offset?: number;
  preventClose?: boolean;
  position:
    | "top-left-out"
    | "top-left-in"
    | "top-center"
    | "top-right-in"
    | "top-right-out"
    | "right-top"
    | "right-center"
    | "right-bottom-in"
    | "right-bottom-out"
    | "bottom-right"
    | "bottom-center"
    | "bottom-left-in"
    | "bottom-left-out"
    | "left-bottom"
    | "left-center"
    | "left-top";
};

export type PopoverTogglePropsT = Omit<ComponentProps<"button">, "type">;
