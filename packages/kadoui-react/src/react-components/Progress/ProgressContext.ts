import { createContext } from "react";

import type { ProgressContextT } from "./progressTypes";

export const ProgressContext = createContext<ProgressContextT>({} as ProgressContextT);