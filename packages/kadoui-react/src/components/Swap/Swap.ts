import { SwapBtn } from "./SwapBtn";
import { SwapStateRoot } from "./SwapStateRoot";
import { SwapSearchParamsRoot } from "./SwapSearchParamsRoot";

const baseComponents = {
  Btn: SwapBtn,
};

export const SwapWithState = Object.assign(SwapStateRoot, baseComponents);

export const SwapWithSearchParams = Object.assign(
  SwapSearchParamsRoot,
  baseComponents,
);

/** @deprecated Use SwapWithState */
export const Swap = SwapWithState;

export * from "./swapTypes";
