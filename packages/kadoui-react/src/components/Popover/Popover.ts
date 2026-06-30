import { PopoverBody } from "./PopoverBody";
import { PopoverToggle } from "./PopoverToggle";
import { PopoverStateRoot } from "./PopoverStateRoot";
import { PopoverSearchParamsRoot } from "./PopoverSearchParamsRoot";

const baseComponents = {
  Toggle: PopoverToggle,
  Body: PopoverBody,
};

export const Popover = Object.assign(PopoverStateRoot, baseComponents);

export const PopoverWithSearchParams = Object.assign(
  PopoverSearchParamsRoot,
  baseComponents,
);

export * from "./popoverTypes";
