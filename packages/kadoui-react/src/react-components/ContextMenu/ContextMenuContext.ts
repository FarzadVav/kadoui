import { createContext } from "react";

import type { ContextMenuContextT } from "./contextMenuTypes";

export const ContextMenuContext = createContext<ContextMenuContextT>({} as ContextMenuContextT);