"use client";

import { use } from "react";

import { PasswordInputContext } from "./PasswordInputContext";
import type { PasswordInputFieldPropsT } from "./passwordInputTypes";

export function PasswordInputField(p: PasswordInputFieldPropsT) {
  const { isVisible } = use(PasswordInputContext);

  return (
    <input type={isVisible ? "text" : "password"} {...p} />
  );
}