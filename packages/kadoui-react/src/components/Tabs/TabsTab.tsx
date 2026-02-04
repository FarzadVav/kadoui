"use client";

import { type HTMLAttributes, use } from "react";

import { TabsContext } from "./TabsContext";

export type TabsTabPropsT = HTMLAttributes<HTMLButtonElement> & {
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
