"use client";

import { use } from "react";

import { TabsContext } from "./TabsContext";
import type { TabsTabPropsT } from "./tabsTypes";

export function TabsTab({ value, onClick, ...p }: TabsTabPropsT) {
  const { activeTab, setActiveTab } = use(TabsContext);

  return (
    <button
      data-state={value === activeTab}
      onClick={(ev) => {
        onClick?.(ev);
        setActiveTab(value);
      }}
      {...p}
    />
  );
}
