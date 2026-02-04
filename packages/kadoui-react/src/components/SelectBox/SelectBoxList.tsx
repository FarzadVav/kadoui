"use client";

import { HTMLAttributes, use } from "react";

import { SelectBoxContext } from "./SelectBoxContext";

type SelectBoxListPropsT = HTMLAttributes<HTMLDivElement>;

export default function SelectBoxList(p: SelectBoxListPropsT) {
  const { inputFocused } = use(SelectBoxContext);

  return inputFocused ? <div {...p} /> : null;
}
