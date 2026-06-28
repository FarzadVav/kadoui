"use client";

import { SwapContext } from "./SwapContext";
import type { SwapStateRootPropsT } from "./swapTypes";

export function SwapStateRoot({
  keys,
  activeKey,
  setActiveKey,
  children,
}: SwapStateRootPropsT) {
  return (
    <SwapContext value={{ keys, activeKey, setActiveKey }}>
      {children}
    </SwapContext>
  );
}
