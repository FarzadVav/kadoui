"use client";

import { use } from "react";

import { SelectBoxContext } from "./SelectBoxContext";
import type { SelectBoxTogglePropsT } from "./selectBoxTypes";

export default function SelectBoxToggle({
  onClick,
  ...p
}: SelectBoxTogglePropsT) {
  const { inputFocused, setInputFocused, inputRef } = use(SelectBoxContext);

  return (
    <button
      type="button"
      data-state={inputFocused}
      onClick={(ev) => {
        onClick?.(ev);
        ev.preventDefault();
        ev.stopPropagation();

        if (inputFocused) {
          inputRef.current?.blur();
          setInputFocused(false);
        } else {
          inputRef.current?.focus();
        }
      }}
      {...p}
    />
  );
}
