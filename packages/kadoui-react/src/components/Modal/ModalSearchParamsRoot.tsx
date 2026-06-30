"use client";

import { ModalContext } from "./ModalContext";
import { useOverlayOpenEffects } from "./useOverlayOpenEffects";
import type { ModalSearchParamsRootPropsT } from "./modalTypes";
import { useSearchParamsBooleanState } from "../../hooks/useSearchParamsBooleanState";

export function ModalSearchParamsRoot({
  scroll,
  children,
  openKey = "modal",
}: ModalSearchParamsRootPropsT) {
  const [isOpen, setOpen] = useSearchParamsBooleanState(openKey, { scroll });

  useOverlayOpenEffects(isOpen, setOpen);

  return <ModalContext value={{ isOpen, setOpen }}>{children}</ModalContext>;
}
