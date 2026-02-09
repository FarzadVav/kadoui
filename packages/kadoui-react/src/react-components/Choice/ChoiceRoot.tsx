"use client";

import { ChoiceContext } from "./ChoiceContext";
import type { ChoiceContextT, ChoiceRootPropsT } from "./choiceTypes";

export function ChoiceRoot({
  multiple,
  activeChoice,
  setActiveChoice,
  requiredOne,
  ...p
}: ChoiceRootPropsT) {
  return (
    <ChoiceContext
      value={{ multiple, activeChoice, setActiveChoice, requiredOne } as ChoiceContextT}>
      <div {...p} />
    </ChoiceContext>
  );
}
