"use client";

import { type ComponentProps, use } from "react";

import { PasswordInputContext } from "./PasswordInputContext";

export type PasswordInputFieldPropsT = ComponentProps<"input">;

export function PasswordInputField(props: PasswordInputFieldPropsT) {
  const { isVisible } = use(PasswordInputContext);

  return (
    <input type={isVisible ? "text" : "password"} {...props} />
  );
}