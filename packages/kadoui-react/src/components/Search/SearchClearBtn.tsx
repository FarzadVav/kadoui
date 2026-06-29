"use client";

import { use } from "react";

import { SearchContext } from "./SearchContext";
import { SearchClearBtnPropsT } from "./searchTypes";

export function SearchClearBtn({
  onClick,
  disabled,
  hiddenOnEmpty,
  ...p
}: SearchClearBtnPropsT) {
  const { value, handleClear } = use(SearchContext);

  const correctedValue = value.trim();

  if (hiddenOnEmpty && !correctedValue) {
    return null;
  }

  return (
    <button
      type="button"
      disabled={disabled || !correctedValue}
      onClick={(e) => {
        onClick?.(e);
        handleClear();
      }}
      {...p}
    />
  );
}
