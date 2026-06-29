"use client";

import { use } from "react";

import { SelectBoxContext } from "./SelectBoxContext";
import type { SelectBoxFieldPropsT } from "./selectBoxTypes";

export default function SelectBoxField({ ref, ...p }: SelectBoxFieldPropsT) {
  const { multiSelect, optionValue, setInputFocused, inputRef } =
    use(SelectBoxContext);

  return (
    <input
      ref={(node) => {
        inputRef.current = node;

        if (typeof ref === "function") {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
      }}
      readOnly
      onFocus={() => setInputFocused(true)}
      defaultValue={
        multiSelect
          ? optionValue.map((val) => val.name).join(", ")
          : optionValue?.name
      }
      {...p}
    />
  );
}
