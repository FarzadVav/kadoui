"use client";

import { PasswordInputContext } from "./PasswordInputContext";
import type { PasswordInputRootPropsT } from "./passwordInputTypes";
import { useControllableState } from "../../hooks/useControllableState";

export function PasswordInputRoot({
  isVisible: isVisibleProp,
  setIsVisible: setIsVisibleProp,
  defaultVisible = false,
  ...p
}: PasswordInputRootPropsT) {
  const [isVisible, setIsVisible] = useControllableState({
    value: isVisibleProp,
    defaultValue: defaultVisible,
    onChange: setIsVisibleProp,
  });

  return (
    <PasswordInputContext value={{ isVisible, setIsVisible }}>
      <label {...p} />
    </PasswordInputContext>
  );
}