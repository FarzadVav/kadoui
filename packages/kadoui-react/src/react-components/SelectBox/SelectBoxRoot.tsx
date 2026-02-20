"use client";

import { useRef, useState, useEffect } from "react";

import { SelectBoxContext } from "./SelectBoxContext";
import { AccessNavigation } from "../AccessNavigation/AccessNavigation";
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

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setInputFocused(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("click", handleClickOutside);
    }
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
      <AccessNavigation ref={selectBoxRootRef} {...p} />
    </SelectBoxContext>
  );
}
