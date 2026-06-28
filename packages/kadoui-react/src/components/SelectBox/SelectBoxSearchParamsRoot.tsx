"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { SelectBoxContext } from "./SelectBoxContext";
import { AccessNavigation } from "../AccessNavigation/AccessNavigation";
import {
  parseSelectBoxValue,
  serializeSelectBoxValue,
} from "../shared/searchParamsSerializers";
import { useSearchParamsNavigation } from "../shared/useSearchParamsNavigation";
import type {
  SelectBoxContextT,
  SelectBoxOptionT,
  SelectBoxSearchParamsRootMultiplePropsT,
  SelectBoxSearchParamsRootSinglePropsT,
} from "./selectBoxTypes";

type SelectBoxSearchParamsRootPropsT =
  | SelectBoxSearchParamsRootMultiplePropsT
  | SelectBoxSearchParamsRootSinglePropsT;

export function SelectBoxSearchParamsRoot({
  multiSelect,
  options,
  valueKey = "select",
  scroll,
  ref,
  ...p
}: SelectBoxSearchParamsRootPropsT) {
  const { searchParams, pushParams } = useSearchParamsNavigation({ scroll });
  const [inputFocused, setInputFocused] = useState(false);
  const [inputSearch, setInputSearch] = useState("");
  const [optionValue, setOptionValueState] = useState<
    SelectBoxOptionT | SelectBoxOptionT[] | null
  >(multiSelect ? [] : null);

  const optionValueRef = useRef(optionValue);
  optionValueRef.current = optionValue;

  const selectBoxRootRef = ref || useRef<HTMLDivElement>(null);

  useEffect(() => {
    const raw = searchParams.get(valueKey);

    if (multiSelect) {
      setOptionValueState(
        raw === null ? [] : parseSelectBoxValue(raw, options, true),
      );
      return;
    }

    setOptionValueState(
      raw === null ? null : parseSelectBoxValue(raw, options),
    );
  }, [multiSelect, options, searchParams, valueKey]);

  const setOptionValue = useCallback(
    (newOptionValue: SelectBoxOptionT | SelectBoxOptionT[] | null) => {
      const serialized = serializeSelectBoxValue(newOptionValue);
      const currentSerialized = serializeSelectBoxValue(optionValueRef.current);

      if (serialized === currentSerialized) {
        return;
      }

      pushParams((params) => {
        if (serialized === null) {
          params.delete(valueKey);
        } else {
          params.set(valueKey, serialized);
        }
      });
    },
    [pushParams, valueKey],
  );

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
    inputSearch,
    setInputSearch,
  } as SelectBoxContextT;

  return (
    <SelectBoxContext value={contextValue}>
      <AccessNavigation ref={selectBoxRootRef} {...p} />
    </SelectBoxContext>
  );
}
