"use client";

import { useCallback, useEffect, useState } from "react";

import { ChoiceContext } from "./ChoiceContext";
import { AccessNavigation } from "../AccessNavigation/AccessNavigation";
import {
  parseNullableString,
  parseStringList,
  setNullableStringParam,
  setStringListParam,
} from "../../utils/searchParams";
import { useSearchParamsNavigation } from "../../hooks/useSearchParamsNavigation";
import type {
  ChoiceContextT,
  ChoiceSearchParamsRootMultiplePropsT,
  ChoiceSearchParamsRootSinglePropsT,
} from "./choiceTypes";

type ChoiceSearchParamsRootPropsT =
  | ChoiceSearchParamsRootMultiplePropsT
  | ChoiceSearchParamsRootSinglePropsT;

export function ChoiceSearchParamsRoot({
  multiple,
  choiceKey = "choice",
  requiredOne,
  scroll,
  ...p
}: ChoiceSearchParamsRootPropsT) {
  const { searchParams, pushParams } = useSearchParamsNavigation({ scroll });
  const [choiceState, setChoiceState] = useState<string[] | string | null>(
    multiple ? [] : null,
  );

  useEffect(() => {
    const raw = searchParams.get(choiceKey);

    if (multiple) {
      setChoiceState(raw === null ? [] : parseStringList(raw));
      return;
    }

    setChoiceState(raw === null ? null : parseNullableString(raw));
  }, [choiceKey, multiple, searchParams]);

  const onChoiceChange = useCallback(
    (newItems: string[] | string | null) => {
      pushParams((params) => {
        if (multiple) {
          setStringListParam(params, choiceKey, newItems as string[]);
          return;
        }

        setNullableStringParam(params, choiceKey, newItems as string | null);
      });
    },
    [choiceKey, multiple, pushParams],
  );

  return (
    <ChoiceContext
      value={
        {
          multiple,
          choiceState,
          onChoiceChange,
          requiredOne,
        } as ChoiceContextT
      }
    >
      <AccessNavigation {...p} />
    </ChoiceContext>
  );
}
