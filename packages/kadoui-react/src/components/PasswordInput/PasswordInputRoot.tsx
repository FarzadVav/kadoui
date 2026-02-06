"use client";

import { type ComponentProps, useState } from "react";

import { PasswordInputContext } from "./PasswordInputContext";

export type PasswordInputRootPropsT = ComponentProps<"label">;

export function PasswordInputRoot(props: PasswordInputRootPropsT) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <PasswordInputContext value={{ isVisible, setIsVisible }}>
      <label {...props} />
    </PasswordInputContext>
  )
}