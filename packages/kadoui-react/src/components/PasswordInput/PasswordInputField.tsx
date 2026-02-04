"use client";

import { InputHTMLAttributes, use } from "react";

import { PasswordInputContext } from "./PasswordInputContext";

export type PasswordInputFieldPropsT = InputHTMLAttributes<HTMLInputElement>;

export function PasswordInputField(props: PasswordInputFieldPropsT) {
  const { isVisible } = use(PasswordInputContext);

  return (
    <input type={isVisible ? "text" : "password"} {...props} />
  );
}