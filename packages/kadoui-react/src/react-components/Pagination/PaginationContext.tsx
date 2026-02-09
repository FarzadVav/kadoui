import { createContext } from "react";

import type { PaginationContextT } from "./PaginationTypes";

export const PaginationContext = createContext<PaginationContextT>(
  {} as PaginationContextT,
);
