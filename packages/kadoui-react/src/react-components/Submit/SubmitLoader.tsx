"use client";

import { PropsWithChildren, ReactNode, use } from "react";

import { SubmitContext } from "./SubmitContext";

export type SubmitLoaderPropsT = PropsWithChildren & {
  loader: ReactNode;
}

export function SubmitLoader({ children, loader }: SubmitLoaderPropsT) {
  const { pending } = use(SubmitContext);

  return pending ? loader : children;
}
