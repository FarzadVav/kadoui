import { SheetBody } from "./SheetBody";
import { SheetRoot } from "./SheetRoot";
import { SheetPortal } from "./SheetPortal";
import { SheetToggle } from "./SheetToggle";
import { SheetContent } from "./SheetContent";
import { SheetIndicator } from "./SheetIndicator";

export const Sheet = Object.assign(SheetRoot, {
  Portal: SheetPortal,
  Body: SheetBody,
  Indicator: SheetIndicator,
  Content: SheetContent,
  Toggle: SheetToggle,
});

export * from "./sheetTypes";
