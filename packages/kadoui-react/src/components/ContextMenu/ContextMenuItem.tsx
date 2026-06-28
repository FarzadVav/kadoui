"use client";

import { use } from "react";

import { cn } from "../../utils-exports";
import { ContextMenuContext } from "./ContextMenuContext";
import type { ContextMenuItemPropsT } from "./contextMenuTypes";

export function ContextMenuItem({
  onClick,
  className,
  ...p
}: ContextMenuItemPropsT) {
  const { closeHandler } = use(ContextMenuContext);

  return (
    <button
      className={cn("acn", className)}
      onClick={(ev) => {
        onClick?.(ev);
        closeHandler();
      }}
      {...p}
    />
  );
}
