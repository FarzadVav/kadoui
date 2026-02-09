"use client";

import { use } from "react";

import { AccessNavigation } from "../AccessNavigation/AccessNavigation";
import { ContextMenuContext } from "./ContextMenuContext";
import type { ContextMenuNavigationPropsT } from "./contextMenuTypes";

export function ContextMenuNavigation(p: ContextMenuNavigationPropsT) {
  const { isOpen } = use(ContextMenuContext);

  return isOpen ? <AccessNavigation focusOnMount {...p} /> : null;
}
