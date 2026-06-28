"use client";

import { use } from "react";

import { defaultThemeContext, ThemeContext } from "./ThemeContext";

export function useTheme() {
  return use(ThemeContext) ?? defaultThemeContext;
}
