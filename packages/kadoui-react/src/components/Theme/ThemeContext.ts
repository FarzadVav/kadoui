"use client";

import { createContext } from "react";

import type { UseThemeReturnT } from "./themeTypes";

export const ThemeContext = createContext<UseThemeReturnT | null>(null);

export const defaultThemeContext: UseThemeReturnT = {
  setTheme: () => {},
  themes: [],
  mounted: false,
};
