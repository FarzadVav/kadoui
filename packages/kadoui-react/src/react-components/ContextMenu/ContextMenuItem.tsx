"use client";

import { use } from "react";

import { ContextMenuContext } from "./ContextMenuContext";
import type { ContextMenuItemPropsT } from "./contextMenuTypes";

export function ContextMenuItem({ onClick, ...p }: ContextMenuItemPropsT) {
  const { closeHandler } = use(ContextMenuContext);

  return (
    <button onClick={ev => {
      onClick?.(ev);
      closeHandler();
    }} {...p} />
  )
}
