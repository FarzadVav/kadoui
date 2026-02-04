"use client";

import { HTMLAttributes, use } from "react";

import { TabsContext } from "./TabsContext";

export type TabsPanelPropsT = HTMLAttributes<HTMLDivElement> & {
  value: string;
}

export function TabsPanel({ value, ...p }: TabsPanelPropsT) {
  const { activeTab } = use(TabsContext);

  const isActive = activeTab === value;

  return isActive ? <div {...p} /> : null;
}