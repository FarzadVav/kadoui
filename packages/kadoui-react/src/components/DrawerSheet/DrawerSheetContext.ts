"use client";

import { createContext } from "react";

import type {
  DrawerSheetBodyContextT,
  DrawerSheetContextT,
} from "./drawerSheetTypes";

export const DrawerSheetContext = createContext<DrawerSheetContextT>(
  {} as DrawerSheetContextT,
);

export const DrawerSheetBodyContext = createContext<DrawerSheetBodyContextT>(
  {} as DrawerSheetBodyContextT,
);
