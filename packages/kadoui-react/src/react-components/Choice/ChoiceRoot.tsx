"use client";

import { ChoiceContext } from "./ChoiceContext";
import type { ChoiceContextT, ChoiceRootPropsT } from "./choiceTypes";
import { AccessNavigation } from "../AccessNavigation/AccessNavigation";

export function ChoiceRoot({
  multiple,
  choiceState,
  onChoiceChange,
  requiredOne,
  ...p
}: ChoiceRootPropsT) {
  return (
    <ChoiceContext
      value={{ multiple, choiceState, onChoiceChange, requiredOne } as ChoiceContextT}>
      <AccessNavigation {...p} />
    </ChoiceContext>
  );
}
