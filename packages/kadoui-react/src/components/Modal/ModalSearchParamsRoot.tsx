"use client";

import { useSearchParamsBooleanState } from "../../hooks/useSearchParamsBooleanState";
import { useOverlayOpenEffects } from "./useOverlayOpenEffects";
import { ModalContext } from "./ModalContext";
import type { ModalSearchParamsRootPropsT } from "./modalTypes";

export function ModalSearchParamsRoot({
  children,
  openKey = "modal",
  scroll,
}: ModalSearchParamsRootPropsT) {
  const [isOpen, setOpen] = useSearchParamsBooleanState(openKey, { scroll });

  useOverlayOpenEffects(isOpen, setOpen);

  return <ModalContext value={{ isOpen, setOpen }}>{children}</ModalContext>;
}
