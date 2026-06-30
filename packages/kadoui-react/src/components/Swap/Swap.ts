import { SwapBtn } from "./SwapBtn";
import { SwapStateRoot } from "./SwapStateRoot";
import { SwapSearchParamsRoot } from "./SwapSearchParamsRoot";

const baseComponents = {
  Btn: SwapBtn,
};

export const Swap = Object.assign(SwapStateRoot, baseComponents);

export const SwapWithSearchParams = Object.assign(
  SwapSearchParamsRoot,
  baseComponents,
);

export * from "./swapTypes";
