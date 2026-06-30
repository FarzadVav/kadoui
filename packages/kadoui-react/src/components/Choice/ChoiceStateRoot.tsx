"use client";

import { ChoiceContext } from "./ChoiceContext";
import { AccessNavigation } from "../AccessNavigation/AccessNavigation";
import type { ChoiceContextT, ChoiceStateRootPropsT } from "./choiceTypes";

export function ChoiceStateRoot({
  multiple,
  choiceState,
  onChoiceChange,
  requiredOne,
  ...p
}: ChoiceStateRootPropsT) {
  return (
    <ChoiceContext
      value={
        { multiple, choiceState, onChoiceChange, requiredOne } as ChoiceContextT
      }
    >
      <AccessNavigation {...p} />
    </ChoiceContext>
  );
}
