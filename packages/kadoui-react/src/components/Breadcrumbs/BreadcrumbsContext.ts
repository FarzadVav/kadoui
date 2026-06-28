import { createContext } from "react";

import type { BreadcrumbsContextT } from "./breadcrumbsTypes";

export const BreadcrumbsContext = createContext<BreadcrumbsContextT>({} as BreadcrumbsContextT);