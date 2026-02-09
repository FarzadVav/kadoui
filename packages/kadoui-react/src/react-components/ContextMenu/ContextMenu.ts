import { ContextMenuRoot } from "./ContextMenuRoot";
import { ContextMenuBody } from "./ContextMenuBody";
import { ContextMenuItem } from "./ContextMenuItem";
import { ContextMenuNavigation } from "./ContextMenuNavigation";

export const ContextMenu = Object.assign(ContextMenuRoot, {
  Body: ContextMenuBody,
  Navigation: ContextMenuNavigation,
  Item: ContextMenuItem
});

export * from "./contextMenuTypes";
