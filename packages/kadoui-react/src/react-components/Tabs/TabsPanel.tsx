"use client";

import { type ComponentProps, use } from "react";

import { TabsContext } from "./TabsContext";

export type TabsPanelPropsT = ComponentProps<"div"> & {
  value: string;
};

export function TabsPanel({ value, ...p }: TabsPanelPropsT) {
  const { activeTab } = use(TabsContext);

  const isActive = activeTab === value;

  return isActive ? <div {...p} /> : null;
}