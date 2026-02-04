"use client"

import { Dispatch, PropsWithChildren, SetStateAction } from "react";

import { TabsContext } from "./TabsContext";

export type TabsRootPropsT = PropsWithChildren & {
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
}

export function TabsRoot({ activeTab, setActiveTab, children }: TabsRootPropsT) {
  return (
    <TabsContext value={{ activeTab, setActiveTab }}>
      {children}
    </TabsContext>
  )
}