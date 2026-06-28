"use client";

import { use } from "react";

import { ChoiceContext } from "./ChoiceContext";
import type { ChoiceTogglePropsT } from "./choiceTypes";

export function ChoiceToggle({
  choiceName,
  onClick,
  ...p
}: ChoiceTogglePropsT) {
  const { multiple, choiceState, onChoiceChange, requiredOne } = use(ChoiceContext);

  const isActive = multiple
    ? choiceState.includes(choiceName)
    : choiceState === choiceName;

  return (
    <button
      type="button"
      data-state={isActive}
      onClick={(ev) => {
        onClick?.(ev);
        if (isActive) {
          if (multiple) {
            if (!requiredOne || choiceState.length > 1) {
              onChoiceChange(choiceState.filter((item) => item !== choiceName));
            }
          } else {
            if (!requiredOne) {
              onChoiceChange(null);
            }
          }
        } else {
          if (multiple) {
            onChoiceChange([...choiceState, choiceName]);
          } else {
            onChoiceChange(choiceName);
          }
        }
      }}
      {...p}
    />
  );
}
