import { DrawerSheetBody } from "./DrawerSheetBody";
import { DrawerSheetRoot } from "./DrawerSheetRoot";
import { DrawerSheetPortal } from "./DrawerSheetPortal";
import { DrawerSheetToggle } from "./DrawerSheetToggle";
import { DrawerSheetContent } from "./DrawerSheetContent";
import { DrawerSheetIndicator } from "./DrawerSheetIndicator";

export const DrawerSheet = Object.assign(DrawerSheetRoot, {
  Portal: DrawerSheetPortal,
  Body: DrawerSheetBody,
  Indicator: DrawerSheetIndicator,
  Content: DrawerSheetContent,
  Toggle: DrawerSheetToggle,
});

export * from "./drawerSheetTypes";
