"use client"

import { useLinkStatus } from "next/link";
import { PropsWithChildren, ReactNode } from "react";

export type LinkLoaderPropsT = PropsWithChildren & {
  loader: ReactNode;
}

export function LinkLoader({ loader, children }: LinkLoaderPropsT) {
  const { pending } = useLinkStatus();

  return pending ? loader : children;
}