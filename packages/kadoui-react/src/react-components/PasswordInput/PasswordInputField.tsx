"use client";

import { use } from "react";

import { PasswordInputContext } from "./PasswordInputContext";
import type { PasswordInputFieldPropsT } from "./passwordInputTypes";

export function PasswordInputField(props: PasswordInputFieldPropsT) {
  const { isVisible } = use(PasswordInputContext);

  return (
    <input type={isVisible ? "text" : "password"} {...props} />
  );
}