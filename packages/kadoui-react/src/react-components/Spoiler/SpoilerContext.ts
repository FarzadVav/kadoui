"use client";

import { createContext } from "react";

import type { SpoilerContextT } from "./spoilerTypes";

export const SpoilerContext = createContext({} as SpoilerContextT);