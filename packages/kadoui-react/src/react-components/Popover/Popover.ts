import { PopoverBody } from "./PopoverBody";
import { PopoverRoot } from "./PopoverRoot";
import { PopoverToggle } from "./PopoverToggle";

export const Popover = Object.assign(PopoverRoot, {
  Toggle: PopoverToggle,
  Body: PopoverBody,
});

export * from "./popoverTypes";
