import { createContext } from "react";

import type { SwapContextT } from "./swapTypes";

export const SwapContext = createContext<SwapContextT>({} as SwapContextT);
