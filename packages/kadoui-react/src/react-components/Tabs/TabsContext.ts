import { createContext } from "react";

import type { TabsContextT } from "./tabsTypes";

export const TabsContext = createContext<TabsContextT>({
  activeTab: "",
  setActiveTab: () => { },
});