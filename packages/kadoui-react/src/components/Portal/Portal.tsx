"use client";

import { createPortal } from "react-dom";
import { useMounted } from "@mantine/hooks";

import type { PortalPropsT } from "./portalTypes";

export function Portal({ children, container }: PortalPropsT) {
  const isMounted = useMounted();

  if (!isMounted) return;

  return createPortal(<>{children}</>, container || document.body);
}
