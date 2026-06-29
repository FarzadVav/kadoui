"use client";

import { createContext } from "react";

import { SearchContextT } from "./searchTypes";

export const SearchContext = createContext<SearchContextT>(
  {} as SearchContextT,
);
