import { createContext } from "react";

import type { PopoverContextT } from "./popoverTypes";

export const PopoverContext = createContext<PopoverContextT>({} as PopoverContextT);
