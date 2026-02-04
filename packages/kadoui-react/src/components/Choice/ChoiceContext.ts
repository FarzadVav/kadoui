"use client";

import { createContext, Dispatch, SetStateAction } from "react";

type MultiModeT = {
  multiple: true;
  activeChoice: string[];
  setActiveChoice: Dispatch<SetStateAction<string[]>>;
};

type SingleModeT = {
  multiple?: false;
  activeChoice: string | null;
  setActiveChoice: Dispatch<SetStateAction<string | null>>;
};

type MergedModeT = SingleModeT | MultiModeT;

export type ChoiceContextT = MergedModeT & {
  requiredOne?: boolean;
};

export const ChoiceContext = createContext<ChoiceContextT>({} as ChoiceContextT);
