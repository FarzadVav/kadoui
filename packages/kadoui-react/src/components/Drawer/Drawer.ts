import { DrawerBody } from "./DrawerBody";
import { DrawerRoot } from "./DrawerRoot";
import { DrawerPortal } from "./DrawerPortal";
import { DrawerToggle } from "./DrawerToggle";

export const Drawer = Object.assign(DrawerRoot, {
  Toggle: DrawerToggle,
  Portal: DrawerPortal,
  Body: DrawerBody
});