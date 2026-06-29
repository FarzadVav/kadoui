"use client";

import { useCallback, useState } from "react";

type SetStateAction<T> = T | ((prev: T) => T);

function resolveNextState<T>(next: SetStateAction<T>, prev: T): T {
  return typeof next === "function" ? (next as (prev: T) => T)(prev) : next;
}

export function useControllableState<T>({
  value,
  defaultValue,
  onChange,
}: {
  value: T | undefined;
  defaultValue: T;
  onChange?: (value: T) => void;
}): [T, (next: SetStateAction<T>) => void] {
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
  const isControlled = value !== undefined;
  const state = isControlled ? value : uncontrolledValue;

  const setState = useCallback(
    (next: SetStateAction<T>) => {
      if (!isControlled) {
        setUncontrolledValue((prev) => {
          const resolved = resolveNextState(next, prev);
          onChange?.(resolved);
          return resolved;
        });
        return;
      }

      const resolved = resolveNextState(next, value as T);
      onChange?.(resolved);
    },
    [isControlled, onChange, value],
  );

  return [state, setState];
}
