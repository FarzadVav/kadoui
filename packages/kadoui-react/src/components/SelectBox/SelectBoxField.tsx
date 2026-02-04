"use client";

import { InputHTMLAttributes, use } from "react";

import { SelectBoxContext } from "./SelectBoxContext";

type SelectBoxFieldPropsT = InputHTMLAttributes<HTMLInputElement> & {
  search?: boolean;
};

export default function SelectBoxField({ search, ...p }: SelectBoxFieldPropsT) {
  const { setInputFocused, inputSearch, setInputSearch } = use(SelectBoxContext);

  return (
    <input
      onFocus={() => setInputFocused(true)}
      value={search ? inputSearch : undefined}
      onChange={search ? (e) => setInputSearch(e.target.value) : undefined}
      readOnly={!search}
      {...p}
    />
  );
}
