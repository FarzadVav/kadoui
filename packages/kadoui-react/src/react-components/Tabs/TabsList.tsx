"use client";

import { AccessNavigation } from "../AccessNavigation/AccessNavigation";

import type { TabsListPropsT } from "./tabsTypes";

export function TabsList(p: TabsListPropsT) {
  return <AccessNavigation {...p} />;
}