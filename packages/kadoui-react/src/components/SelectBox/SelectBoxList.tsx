"use client";

import { use } from "react";

import { SelectBoxContext } from "./SelectBoxContext";
import type { SelectBoxListPropsT } from "./selectBoxTypes";
import { AccessNavigation } from "../AccessNavigation/AccessNavigation";

export default function SelectBoxList(p: SelectBoxListPropsT) {
  const { inputFocused } = use(SelectBoxContext);

  return inputFocused ? <AccessNavigation focusOnMount {...p} /> : null;
}
