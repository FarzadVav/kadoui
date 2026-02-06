"use client";

import { use } from "react";

import { ContextMenuContext } from "./ContextMenuContext";
import { AccessNavigation, AccessNavigationPropsT } from "../AccessNavigation/AccessNavigation"

type ContextMenuNavigationPropsT = AccessNavigationPropsT;

export function ContextMenuNavigation(p: ContextMenuNavigationPropsT) {
  const { isOpen } = use(ContextMenuContext);

  return isOpen ? <AccessNavigation focusOnMount {...p} /> : null;
}
