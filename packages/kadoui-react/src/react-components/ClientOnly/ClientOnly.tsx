"use client";

import { PropsWithChildren } from "react";
import { useMounted } from "@mantine/hooks";

export type ClientOnlyPropsT = PropsWithChildren;

export function ClientOnly({ children }: ClientOnlyPropsT) {
  const mounted = useMounted();

  return mounted ? children : null;
}