"use client";

import { useMounted } from "@mantine/hooks";

import type { ClientOnlyPropsT } from "./clientOnlyTypes";

export function ClientOnly({ children }: ClientOnlyPropsT) {
  const mounted = useMounted();

  return mounted ? children : null;
}