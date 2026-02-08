"use client";

import { use } from "react";

import { SelectBoxContext } from "./SelectBoxContext";
import type { SelectBoxSearchFieldPropsT } from "./selectBoxTypes";

export default function SelectBoxSearchField(p: SelectBoxSearchFieldPropsT) {
  const { inputSearch, setInputSearch } = use(SelectBoxContext);

  return (
    <input
      value={inputSearch}
      onChange={ev => setInputSearch(ev.target.value)}
      {...p}
    />
  );
}
