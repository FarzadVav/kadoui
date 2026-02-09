"use client";

import { SwapContext } from "./SwapContext";
import type { SwapRootPropsT } from "./swapTypes";

export function SwapRoot({ keys, activeKey, setActiveKey, children }: SwapRootPropsT) {
  return <SwapContext value={{ keys, activeKey, setActiveKey }}>{children}</SwapContext>;
}
