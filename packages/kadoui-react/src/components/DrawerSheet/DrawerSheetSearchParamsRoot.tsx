"use client";

import { useEffect } from "react";
import { useDragControls, useMotionValue } from "framer-motion";

import { DrawerSheetContext } from "./DrawerSheetContext";
import { getBrowserScrollbarWith } from "../../utils-exports";
import type { DrawerSheetSearchParamsRootPropsT } from "./drawerSheetTypes";
import { useCloseOnPathnameChange } from "../../hooks/useCloseOnPathnameChange";
import { useSearchParamsBooleanState } from "../../hooks/useSearchParamsBooleanState";

export function DrawerSheetSearchParamsRoot({
  scroll,
  children,
  openKey = "drawer",
}: DrawerSheetSearchParamsRootPropsT) {
  const [isOpen, setOpen] = useSearchParamsBooleanState(openKey, { scroll });

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const dragControls = useDragControls();

  useCloseOnPathnameChange(() => {
    setOpen(false);
  });

  useEffect(() => {
    if (isOpen) {
      x.set(0);
      y.set(0);
    }
  }, [isOpen, x, y]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [setOpen]);

  useEffect(() => {
    const scrollbarWidth = getBrowserScrollbarWith();
    const bodyElem = document.body;

    const removeOverStyles = () => {
      bodyElem.style.overflow = "unset";
      bodyElem.style.paddingRight = "0px";
    };

    if (isOpen) {
      bodyElem.style.overflow = "hidden";
      bodyElem.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      removeOverStyles();
    }

    return () => removeOverStyles();
  }, [isOpen]);

  const closeHandler = () => {
    setOpen(false);
  };

  return (
    <DrawerSheetContext
      value={{
        x,
        y,
        isOpen,
        setOpen,
        closeHandler,
        dragControls,
      }}
    >
      {children}
    </DrawerSheetContext>
  );
}
