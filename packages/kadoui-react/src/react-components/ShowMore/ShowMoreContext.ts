import { createContext } from "react";

import type { ShowMoreContextT } from "./showMoreTypes";

export const ShowMoreContext = createContext<ShowMoreContextT>({} as ShowMoreContextT);