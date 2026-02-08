import { createContext, ReactNode } from "react";

export type BreadcrumbsContextT = {
  separator: ReactNode;
}

export const BreadcrumbsContext = createContext<BreadcrumbsContextT>({} as BreadcrumbsContextT);