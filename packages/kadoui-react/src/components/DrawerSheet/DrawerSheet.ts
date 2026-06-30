import { DrawerSheetBody } from "./DrawerSheetBody";
import { DrawerSheetPortal } from "./DrawerSheetPortal";
import { DrawerSheetToggle } from "./DrawerSheetToggle";
import { DrawerSheetContent } from "./DrawerSheetContent";
import { DrawerSheetIndicator } from "./DrawerSheetIndicator";
import { DrawerSheetStateRoot } from "./DrawerSheetStateRoot";
import { DrawerSheetSearchParamsRoot } from "./DrawerSheetSearchParamsRoot";

const baseComponents = {
  Portal: DrawerSheetPortal,
  Body: DrawerSheetBody,
  Indicator: DrawerSheetIndicator,
  Content: DrawerSheetContent,
  Toggle: DrawerSheetToggle,
};

export const DrawerSheet = Object.assign(DrawerSheetStateRoot, baseComponents);

export const DrawerSheetWithSearchParams = Object.assign(
  DrawerSheetSearchParamsRoot,
  baseComponents,
);

export * from "./drawerSheetTypes";
