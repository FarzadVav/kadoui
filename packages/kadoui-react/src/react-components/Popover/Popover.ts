import { PopoverBody } from "./PopoverBody";
import { PopoverRoot } from "./PopoverRoot";
import { PopoverToggle } from "./PopoverToggle";
import { PopoverNavigation } from "./PopoverNavigation";

export const Popover = Object.assign(PopoverRoot, {
  Navigation: PopoverNavigation,
  Toggle: PopoverToggle,
  Body: PopoverBody,
});

export * from "./popoverTypes";
