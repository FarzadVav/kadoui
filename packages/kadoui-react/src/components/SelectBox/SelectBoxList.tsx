"use client";

import { type ComponentProps, use } from "react";

import { SelectBoxContext } from "./SelectBoxContext";

type SelectBoxListPropsT = ComponentProps<"div">;

export default function SelectBoxList(p: SelectBoxListPropsT) {
  const { inputFocused } = use(SelectBoxContext);

  return inputFocused ? <div {...p} /> : null;
}
