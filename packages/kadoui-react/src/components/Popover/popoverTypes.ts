import type { ComponentProps, RefObject } from "react";

import type { PositionT } from "../../utils/positionStyles";
import type { SearchParamsNavigationOptionsT } from "../../utils/types";
import type { AccessNavigationPropsT } from "../AccessNavigation/AccessNavigation";

export type PopoverContextT = {
  isOpen: boolean;
  mode: "click" | "hover" | "both";
  setOpen: (newState: boolean) => void;
  bodyRef: RefObject<HTMLDivElement | null>;
  toggleRef: RefObject<HTMLButtonElement | null>;
};

export type PopoverStateRootPropsT = AccessNavigationPropsT & {
  isOpen?: boolean;
  defaultOpen?: boolean;
  mode?: PopoverContextT["mode"];
  setOpen?: (newState: boolean) => void;
};

export type PopoverSearchParamsRootPropsT = PopoverStateRootPropsT &
  SearchParamsNavigationOptionsT & {
    openKey?: string;
  };

export type PopoverRootPropsT = PopoverStateRootPropsT;

export type PopoverBodyPropsT = ComponentProps<"div"> & {
  offset?: number;
  position: PositionT;
  preventClose?: boolean;
};

export type PopoverTogglePropsT = Omit<ComponentProps<"button">, "type">;
