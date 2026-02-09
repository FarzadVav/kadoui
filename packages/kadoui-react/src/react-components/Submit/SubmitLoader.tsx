"use client";

import { use } from "react";

import { SubmitContext } from "./SubmitContext";
import type { SubmitLoaderPropsT } from "./submitTypes";

export function SubmitLoader({ children, loader }: SubmitLoaderPropsT) {
  const { pending } = use(SubmitContext);

  return pending ? loader : children;
}
