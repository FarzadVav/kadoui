"use client";

import { useState } from "react";

import { PasswordInputContext } from "./PasswordInputContext";
import type { PasswordInputRootPropsT } from "./passwordInputTypes";

export function PasswordInputRoot(p: PasswordInputRootPropsT) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <PasswordInputContext value={{ isVisible, setIsVisible }}>
      <label {...p} />
    </PasswordInputContext>
  )
}