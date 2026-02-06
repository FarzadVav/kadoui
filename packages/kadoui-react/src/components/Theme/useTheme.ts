"use client";

import { use } from "react";
import { ThemeContext } from "./ThemeContext";

export function useTheme() {
  const { theme, setTheme } = use(ThemeContext);

  return { theme, setTheme };
}
