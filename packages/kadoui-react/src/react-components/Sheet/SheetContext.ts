import { createContext } from "react";

import type { SheetContextT } from "./sheetTypes";

export const SheetContext = createContext<SheetContextT>({} as SheetContextT);