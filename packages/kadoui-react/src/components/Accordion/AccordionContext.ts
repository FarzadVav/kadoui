"use client";

import { createContext } from "react";

import type { AccordionContextT } from "./accordionTypes";

export const AccordionContext = createContext<AccordionContextT>({} as AccordionContextT);