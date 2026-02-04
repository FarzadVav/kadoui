"use client";

import { useEffect } from "react";
import { useRef, useState } from "react";

import { SelectBoxContext } from "./SelectBoxContext";
import {
  AccessNavigation,
  AccessNavigationPropsT,
} from "../AccessNavigation/AccessNavigation";

type SelectBoxRootPropsT = Omit<AccessNavigationPropsT, "direction">;

export function SelectBoxRoot({ ref, ...p }: SelectBoxRootPropsT) {
  const [inputFocused, setInputFocused] = useState(false);
  const [inputSearch, setInputSearch] = useState("");

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

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <SelectBoxContext
      value={{ inputFocused, setInputFocused, inputSearch, setInputSearch }}>
      <AccessNavigation
        ref={selectBoxRootRef}
        {...p}
      />
    </SelectBoxContext>
  );
}
