"use client";

import { createContext } from "react";

import type { PasswordInputContextT } from "./passwordInputTypes";

export const PasswordInputContext = createContext<PasswordInputContextT>({} as PasswordInputContextT);