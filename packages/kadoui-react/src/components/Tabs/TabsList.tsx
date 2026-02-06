"use client"

import type { ComponentProps } from "react";

export type TabsListPropsT = ComponentProps<"div">;

export function TabsList(p: TabsListPropsT) {
  return <div {...p} />;
}