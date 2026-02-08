"use client";

import { createPortal } from "react-dom";
import { PropsWithChildren } from "react";
import { useMounted } from "@mantine/hooks";

export type PortalPropsT = PropsWithChildren & {
  container?: Element;
};

export function Portal({ children, container }: PortalPropsT) {
  const isMounted = useMounted();

  if (!isMounted) return;

  return createPortal(<>{children}</>, container || document.body);
}
