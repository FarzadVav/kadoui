"use client";

import { use } from "react";

import { SearchContext } from "./SearchContext";
import { SearchFieldPropsT } from "./searchTypes";

export function SearchField({ onChange, onKeyDown, ...p }: SearchFieldPropsT) {
  const { value, setValue, handleEnter } = use(SearchContext);

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => {
        onChange?.(e);
        setValue(e.target.value);
      }}
      onKeyDown={(e) => {
        onKeyDown?.(e);
        handleEnter(e);
      }}
      {...p}
    />
  );
}
