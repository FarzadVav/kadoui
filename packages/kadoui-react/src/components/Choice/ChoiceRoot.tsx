"use client";

import { ComponentProps } from "react";

import { ChoiceContext, ChoiceContextT } from "./ChoiceContext";

type ChoiceRootPropsT = ComponentProps<"div"> & ChoiceContextT;

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
