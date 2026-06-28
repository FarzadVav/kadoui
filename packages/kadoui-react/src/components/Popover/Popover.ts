import { PopoverBody } from "./PopoverBody";
import { PopoverToggle } from "./PopoverToggle";
import { PopoverStateRoot } from "./PopoverStateRoot";
import { PopoverSearchParamsRoot } from "./PopoverSearchParamsRoot";

const baseComponents = {
  Toggle: PopoverToggle,
  Body: PopoverBody,
};

export const PopoverWithState = Object.assign(PopoverStateRoot, baseComponents);

export const PopoverWithSearchParams = Object.assign(
  PopoverSearchParamsRoot,
  baseComponents,
);

/** @deprecated Use PopoverWithState */
export const Popover = PopoverWithState;

export * from "./popoverTypes";
