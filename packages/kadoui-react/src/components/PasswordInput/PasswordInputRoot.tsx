"use client";

import { LabelHTMLAttributes, useState } from "react";

import { PasswordInputContext } from "./PasswordInputContext";

export type PasswordInputRootPropsT = LabelHTMLAttributes<HTMLLabelElement>;

export function PasswordInputRoot(props: PasswordInputRootPropsT) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <PasswordInputContext value={{ isVisible, setIsVisible }}>
      <label {...props} />
    </PasswordInputContext>
  )
}