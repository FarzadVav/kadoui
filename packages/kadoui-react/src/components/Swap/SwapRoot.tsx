"use client";

import { Dispatch, PropsWithChildren, SetStateAction } from "react";

import { SwapContext } from "./SwapContext";

export type SwapRootPropsT = PropsWithChildren & {
  keys: string[];
  activeKey: string;
  setActiveKey: Dispatch<SetStateAction<string>>;
};

export function SwapRoot({ keys, activeKey, setActiveKey, children }: SwapRootPropsT) {
  return <SwapContext value={{ keys, activeKey, setActiveKey }}>{children}</SwapContext>;
}
