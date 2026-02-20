"use client";

import { use } from "react";

import { SelectBoxContext } from "./SelectBoxContext";
import type { SelectBoxListPropsT } from "./selectBoxTypes";

export default function SelectBoxList(p: SelectBoxListPropsT) {
  const { inputFocused } = use(SelectBoxContext);

  return (
    <div
      data-state={inputFocused}
      data-access-navigation={inputFocused}
      {...p}
    />
  )
}
