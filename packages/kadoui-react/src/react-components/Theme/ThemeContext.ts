"use client";

import { createContext } from "react";

import type { ThemeContextT } from "./themeTypes";

export const ThemeContext = createContext<ThemeContextT>({} as ThemeContextT);