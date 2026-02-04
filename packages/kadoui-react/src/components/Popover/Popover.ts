import { PopoverBody } from "./PopoverBody";
import { PopoverRoot } from "./PopoverRoot";
import { PopoverToggle } from "./PopoverToggle";
import { PopoverAccessNavigation } from "./PopoverAccessNavigation";

export const Popover = Object.assign(PopoverRoot, {
  AccessNavigation: PopoverAccessNavigation,
  Toggle: PopoverToggle,
  Body: PopoverBody,
});
