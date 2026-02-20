"use client";

import { createContext } from "react";

import type { AccordionItemContextT } from "./accordionTypes";

export const AccordionItemContext = createContext<AccordionItemContextT>({} as AccordionItemContextT);