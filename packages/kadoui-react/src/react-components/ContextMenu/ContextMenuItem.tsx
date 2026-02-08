"use client";

import { ComponentProps, use } from "react"
import { ContextMenuContext } from "./ContextMenuContext";

type ContextMenuItemPropsT = ComponentProps<"button">;

export function ContextMenuItem({ onClick, ...p }: ContextMenuItemPropsT) {
  const { closeHandler } = use(ContextMenuContext);

  return (
    <button onClick={ev => {
      onClick?.(ev);
      closeHandler();
    }} {...p} />
  )
}
