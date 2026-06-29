"use client";

import { ModalContext } from "./ModalContext";
import type { ModalStateRootPropsT } from "./modalTypes";
import { useControllableState } from "../../hooks/useControllableState";
import { useOverlayOpenEffects } from "./useOverlayOpenEffects";

export function ModalStateRoot({
  children,
  isOpen: isOpenProp,
  setOpen: setOpenProp,
  defaultOpen = false,
}: ModalStateRootPropsT) {
  const [isOpen, setOpen] = useControllableState({
    value: isOpenProp,
    defaultValue: defaultOpen,
    onChange: setOpenProp,
  });

  useOverlayOpenEffects(isOpen, setOpen);

  return <ModalContext value={{ isOpen, setOpen }}>{children}</ModalContext>;
}
