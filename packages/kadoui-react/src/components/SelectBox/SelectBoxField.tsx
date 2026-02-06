"use client";

import { use } from "react";

import { SelectBoxContext } from "./SelectBoxContext";
import type { SelectBoxFieldPropsT } from "./selectBoxTypes";

export default function SelectBoxField(p: SelectBoxFieldPropsT) {
  const { multiSelect, optionValue, setInputFocused } = use(SelectBoxContext);

  return (
    <input
      readOnly
      onFocus={() => setInputFocused(true)}
      defaultValue={multiSelect ? optionValue.map(val => val.name).join(", ") : optionValue?.name}
      {...p}
    />
  );
}
