"use client";

import { use } from "react";

import { TabsContext } from "./TabsContext";
import type { TabsPanelPropsT } from "./tabsTypes";

export function TabsPanel({ value, ...p }: TabsPanelPropsT) {
  const { activeTab } = use(TabsContext);

  const isActive = activeTab === value;

  return isActive ? <div {...p} /> : null;
}