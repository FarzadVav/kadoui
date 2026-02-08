"use client"

import { AccessNavigation, AccessNavigationPropsT } from "../AccessNavigation/AccessNavigation";

export type TabsListPropsT = AccessNavigationPropsT;

export function TabsList(p: TabsListPropsT) {
  return <AccessNavigation {...p} />;
}