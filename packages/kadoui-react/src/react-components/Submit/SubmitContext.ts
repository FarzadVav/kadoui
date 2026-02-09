import { createContext } from "react";

import type { SubmitContextT } from "./submitTypes";

export const SubmitContext = createContext({} as SubmitContextT);