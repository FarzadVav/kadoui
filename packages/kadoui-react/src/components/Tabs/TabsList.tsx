"use client"

import { HTMLAttributes } from "react";

export type TabsListPropsT = HTMLAttributes<HTMLDivElement>;

export function TabsList(p: TabsListPropsT) {
  return <div {...p} />;
}