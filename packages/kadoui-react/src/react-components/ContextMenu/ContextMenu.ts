import { ContextMenuRoot } from "./ContextMenuRoot";
import { ContextMenuBody } from "./ContextMenuBody";
import { ContextMenuItem } from "./ContextMenuItem";

export const ContextMenu = Object.assign(ContextMenuRoot, {
  Body: ContextMenuBody,
  Item: ContextMenuItem
});

export * from "./contextMenuTypes";
