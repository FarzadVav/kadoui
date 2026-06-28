"use client";

import { createContext } from "react";

import type { ChoiceContextT } from "./choiceTypes";

export const ChoiceContext = createContext<ChoiceContextT>({} as ChoiceContextT);
