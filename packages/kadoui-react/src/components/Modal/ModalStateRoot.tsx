"use client";

import { ModalContext } from "./ModalContext";
import type { ModalStateRootPropsT } from "./modalTypes";
import { useControllableState } from "../shared/useControllableState";
import { useOverlayOpenEffects } from "../shared/useOverlayOpenEffects";

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
