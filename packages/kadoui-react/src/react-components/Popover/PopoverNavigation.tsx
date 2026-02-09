import { AccessNavigation } from "../AccessNavigation/AccessNavigation";

import type { PopoverNavigationPropsT } from "./popoverTypes";

export function PopoverNavigation(p: PopoverNavigationPropsT) {
  return <AccessNavigation {...p} />;
}
