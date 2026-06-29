"use client";

import { useRef, useEffect } from "react";

import { SelectBoxContext } from "./SelectBoxContext";
import { AccessNavigation } from "../AccessNavigation/AccessNavigation";
import type { SelectBoxContextT, SelectBoxStateRootPropsT } from "./selectBoxTypes";
import { useControllableState } from "../../hooks/useControllableState";

export function SelectBoxStateRoot({
  multiSelect,
  optionValue,
  setOptionValue,
  options,
  inputFocused: inputFocusedProp,
  setInputFocused: setInputFocusedProp,
  defaultInputFocused = false,
  inputSearch: inputSearchProp,
  setInputSearch: setInputSearchProp,
  defaultInputSearch = "",
  ref,
  ...p
}: SelectBoxStateRootPropsT) {
  const [inputFocused, setInputFocused] = useControllableState({
    value: inputFocusedProp,
    defaultValue: defaultInputFocused,
    onChange: setInputFocusedProp,
  });
  const [inputSearch, setInputSearch] = useControllableState({
    value: inputSearchProp,
    defaultValue: defaultInputSearch,
    onChange: setInputSearchProp,
  });
  const inputRef = useRef<HTMLInputElement>(null);
  const selectBoxRootRef = ref || useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectBoxRootRef.current &&
        !selectBoxRootRef.current.contains(event.target as Node)
      ) {
        setInputFocused(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setInputFocused(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const contextValue = {
    multiSelect,
    optionValue,
    setOptionValue,
    options,
    inputFocused,
    setInputFocused,
    inputRef,
    inputSearch,
    setInputSearch,
  } as SelectBoxContextT;

  return (
    <SelectBoxContext value={contextValue}>
      <AccessNavigation ref={selectBoxRootRef} {...p} />
    </SelectBoxContext>
  );
}
