"use client";

import { useRef, useState, useEffect } from "react";

import { SelectBoxContext } from "./SelectBoxContext";
import type { SelectBoxContextT, SelectBoxRootPropsT } from "./selectBoxTypes";

export function SelectBoxRoot({ multiSelect, optionValue, setOptionValue, options, ref, ...p }: SelectBoxRootPropsT) {
  const [inputFocused, setInputFocused] = useState(false);
  const [inputSearch, setInputSearch] = useState("");
  const selectBoxRootRef = ref || useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectBoxRootRef.current && !selectBoxRootRef.current.contains(event.target as Node)) {
        setInputFocused(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const contextValue = {
    multiSelect,
    optionValue,
    setOptionValue,
    options,
    inputFocused,
    setInputFocused,
    inputSearch,
    setInputSearch,
  } as SelectBoxContextT;

  return (
    <SelectBoxContext value={contextValue}>
      <div ref={selectBoxRootRef} {...p} />
    </SelectBoxContext>
  );
}
