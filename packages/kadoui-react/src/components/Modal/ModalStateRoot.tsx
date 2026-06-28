"use client";

import { useEffect, useState } from "react";

import { ModalContext } from "./ModalContext";
import type { ModalStateRootPropsT } from "./modalTypes";
import { useOverlayOpenEffects } from "../shared/useOverlayOpenEffects";

export function ModalStateRoot({
  children,
  defaultOpen = false,
}: ModalStateRootPropsT) {
  const [isOpen, setOpen] = useState(defaultOpen);

  useOverlayOpenEffects(isOpen, setOpen);

  return <ModalContext value={{ isOpen, setOpen }}>{children}</ModalContext>;
}
