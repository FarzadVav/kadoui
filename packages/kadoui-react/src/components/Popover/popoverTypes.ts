import type { ComponentProps, RefObject } from "react";

import type { AccessNavigationPropsT } from "../AccessNavigation/AccessNavigation";
import type { PositionT } from "../../utils/positionStyles";
import type { SearchParamsNavigationOptionsT } from "../../utils/types";

export type PopoverContextT = {
  isOpen: boolean;
  setOpen: (newState: boolean) => void;
  toggleRef: RefObject<HTMLButtonElement | null>;
  bodyRef: RefObject<HTMLDivElement | null>;
  mode: "click" | "hover" | "both";
};

export type PopoverStateRootPropsT = AccessNavigationPropsT & {
  mode?: PopoverContextT["mode"];
  isOpen?: boolean;
  setOpen?: (newState: boolean) => void;
  defaultOpen?: boolean;
};

export type PopoverSearchParamsRootPropsT = PopoverStateRootPropsT &
  SearchParamsNavigationOptionsT & {
    openKey?: string;
  };

/** @deprecated Use PopoverStateRootPropsT */
export type PopoverRootPropsT = PopoverStateRootPropsT;

export type PopoverBodyPropsT = ComponentProps<"div"> & {
  offset?: number;
  preventClose?: boolean;
  position: PositionT;
};

export type PopoverTogglePropsT = Omit<ComponentProps<"button">, "type">;
