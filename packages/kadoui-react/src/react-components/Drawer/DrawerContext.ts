import { createContext } from "react";

import type { DrawerContextT } from "./drawerTypes";

export const DrawerContext = createContext<DrawerContextT>({} as DrawerContextT);