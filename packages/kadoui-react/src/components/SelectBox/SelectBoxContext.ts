"use client";

import { createContext, Dispatch, SetStateAction } from "react";

type SelectBoxContextT = {
  inputFocused: boolean;
  setInputFocused: Dispatch<SetStateAction<boolean>>;
  inputSearch: string;
  setInputSearch: Dispatch<SetStateAction<string>>;
};

export const SelectBoxContext = createContext({} as SelectBoxContextT);
