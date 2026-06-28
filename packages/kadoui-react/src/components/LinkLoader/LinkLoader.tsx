"use client";

import { ReactNode } from "react";
import { useLinkStatus } from "next/link";

export type LinkLoaderPropsT = {
  children: (isPending: boolean) => ReactNode;
};

export function LinkLoader({ children }: LinkLoaderPropsT) {
  const { pending } = useLinkStatus();

  return children(pending);
}
