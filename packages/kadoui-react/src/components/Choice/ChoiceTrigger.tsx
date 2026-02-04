"use client";

import { ComponentProps, use } from "react";

import { ChoiceContext } from "./ChoiceContext";

type ChoiceTriggerPropsT = ComponentProps<"button"> & {
  choiceName: string;
};

export function ChoiceTrigger({
  choiceName,
  onClick,
  ...p
}: ChoiceTriggerPropsT) {
  const { multiple, activeChoice, setActiveChoice, requiredOne } = use(ChoiceContext);

  const isActive = multiple
    ? activeChoice.includes(choiceName)
    : activeChoice === choiceName;

  return (
    <button
      data-state={isActive}
      onClick={(ev) => {
        onClick?.(ev);
        if (isActive) {
          if (multiple) {
            if (!requiredOne || activeChoice.length > 1) {
              setActiveChoice((prev) => prev.filter((item) => item !== choiceName));
            }
          } else {
            if (!requiredOne) {
              setActiveChoice(null);
            }
          }
        } else {
          if (multiple) {
            setActiveChoice((prev) => [...prev, choiceName]);
          } else {
            setActiveChoice(choiceName);
          }
        }
      }}
      {...p}
    />
  );
}
