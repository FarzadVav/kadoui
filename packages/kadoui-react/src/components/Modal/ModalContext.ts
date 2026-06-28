import { createContext } from "react";

import type { ModalContextT } from "./modalTypes";

export const ModalContext = createContext<ModalContextT>({} as ModalContextT);
