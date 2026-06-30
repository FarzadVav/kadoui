"use client";

import { SwapContext } from "./SwapContext";
import type { SwapStateRootPropsT } from "./swapTypes";

export function SwapStateRoot({
  keys,
  children,
  activeKey,
  setActiveKey,
}: SwapStateRootPropsT) {
  return (
    <SwapContext value={{ keys, activeKey, setActiveKey }}>
      {children}
    </SwapContext>
  );
}
