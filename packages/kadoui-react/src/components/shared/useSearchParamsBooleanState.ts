"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import {
  parseBooleanParam,
  setBooleanParam,
} from "./searchParamsSerializers";
import type { SearchParamsNavigationOptionsT } from "./searchParamsNavigationTypes";
import { useSearchParamsNavigation } from "./useSearchParamsNavigation";

export function useSearchParamsBooleanState(
  key: string,
  options?: SearchParamsNavigationOptionsT,
) {
  const { searchParams, pushParams } = useSearchParamsNavigation(options);
  const [value, setValueState] = useState(false);
  const valueRef = useRef(value);
  valueRef.current = value;

  useEffect(() => {
    setValueState(parseBooleanParam(searchParams.get(key)));
  }, [key, searchParams]);

  const setValue = useCallback(
    (next: boolean) => {
      if (next === valueRef.current) {
        return;
      }

      pushParams((params) => {
        setBooleanParam(params, key, next);
      });
    },
    [key, pushParams],
  );

  return [value, setValue] as const;
}
