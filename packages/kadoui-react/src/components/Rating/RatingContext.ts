import { createContext } from "react";

import type { RatingContextT } from "./ratingTypes";

export const RatingContext = createContext<RatingContextT>({} as RatingContextT);