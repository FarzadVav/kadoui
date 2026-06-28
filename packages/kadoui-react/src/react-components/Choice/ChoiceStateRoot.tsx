"use client";

import { ChoiceContext } from "./ChoiceContext";
import type { ChoiceContextT, ChoiceStateRootPropsT } from "./choiceTypes";
import { AccessNavigation } from "../AccessNavigation/AccessNavigation";

export function ChoiceStateRoot({
  multiple,
  choiceState,
  onChoiceChange,
  requiredOne,
  ...p
}: ChoiceStateRootPropsT) {
  return (
    <ChoiceContext
      value={{ multiple, choiceState, onChoiceChange, requiredOne } as ChoiceContextT}
    >
      <AccessNavigation {...p} />
    </ChoiceContext>
  );
}
