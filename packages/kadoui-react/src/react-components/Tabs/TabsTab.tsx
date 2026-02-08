"use client";

import { type ComponentProps, use } from "react";

import { TabsContext } from "./TabsContext";

export type TabsTabPropsT = ComponentProps<"button"> & {
  value: string;
};

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
