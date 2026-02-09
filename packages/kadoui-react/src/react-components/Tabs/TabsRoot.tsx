"use client";

import { TabsContext } from "./TabsContext";
import type { TabsRootPropsT } from "./tabsTypes";

export function TabsRoot({ activeTab, setActiveTab, children }: TabsRootPropsT) {
  return (
    <TabsContext value={{ activeTab, setActiveTab }}>
      {children}
    </TabsContext>
  )
}