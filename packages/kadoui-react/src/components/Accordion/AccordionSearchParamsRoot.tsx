"use client";

import { useEffect, useState } from "react";

import { AccordionContext } from "./AccordionContext";
import { AccessNavigation } from "../AccessNavigation/AccessNavigation";
import {
  parseNullableString,
  parseStringList,
  setNullableStringParam,
  setStringListParam,
} from "../../utils/searchParams";
import { useSearchParamsNavigation } from "../../hooks/useSearchParamsNavigation";
import type {
  AccordionContextT,
  AccordionSearchParamsRootMultiplePropsT,
  AccordionSearchParamsRootSinglePropsT,
} from "./accordionTypes";

type AccordionSearchParamsRootPropsT =
  | AccordionSearchParamsRootMultiplePropsT
  | AccordionSearchParamsRootSinglePropsT;

export function AccordionSearchParamsRoot({
  multiple,
  accordionKey = "accordion",
  scroll,
  ...p
}: AccordionSearchParamsRootPropsT) {
  const { searchParams, pushParams } = useSearchParamsNavigation({ scroll });
  const [accordionState, setAccordionState] = useState<string[] | string | null>(
    multiple ? [] : null,
  );

  useEffect(() => {
    const raw = searchParams.get(accordionKey);

    if (multiple) {
      setAccordionState(parseStringList(raw));
      return;
    }

    setAccordionState(parseNullableString(raw));
  }, [accordionKey, multiple, searchParams]);

  const onAccordionChange = (newItems: string[] | string | null) => {
    pushParams((params) => {
      if (multiple) {
        setStringListParam(params, accordionKey, newItems as string[]);
        return;
      }

      setNullableStringParam(params, accordionKey, newItems as string | null);
    });
  };

  return (
    <AccordionContext
      value={
        {
          multiple,
          accordionState,
          onAccordionChange,
        } as AccordionContextT
      }
    >
      <AccessNavigation {...p} />
    </AccordionContext>
  );
}
