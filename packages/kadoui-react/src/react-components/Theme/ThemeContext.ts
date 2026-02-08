"use client";

import { createContext, Dispatch, SetStateAction } from "react";

export type ThemeT = "dark" | "light" | "system";

export type ThemeContextT = {
  theme: ThemeT | undefined;
  setTheme: (theme: ThemeT) => void;
}

export const ThemeContext = createContext<ThemeContextT>({} as ThemeContextT)