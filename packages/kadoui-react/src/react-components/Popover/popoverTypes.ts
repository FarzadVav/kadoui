import type { ComponentProps, Dispatch, RefObject, SetStateAction } from "react";

import type { AccessNavigationPropsT } from "../AccessNavigation/AccessNavigation";

export type PopoverContextT = {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  toggleRef: RefObject<HTMLButtonElement | null>;
  bodyRef: RefObject<HTMLDivElement | null>;
  mode: "click" | "hover" | "both";
};

export type PopoverRootPropsT = ComponentProps<"div"> & {
  mode?: PopoverContextT["mode"];
};

export type PopoverBodyPropsT = ComponentProps<"div"> & {
  preventClose?: boolean;
};

export type PopoverTogglePropsT = Omit<ComponentProps<"button">, "type">;

export type PopoverNavigationPropsT = AccessNavigationPropsT;
