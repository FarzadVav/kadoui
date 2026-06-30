"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useDragControls, useMotionValue } from "framer-motion";

import { DrawerSheetContext } from "./DrawerSheetContext";
import { getBrowserScrollbarWith } from "../../utils-exports";
import type { DrawerSheetStateRootPropsT } from "./drawerSheetTypes";
import { useControllableState } from "../../hooks/useControllableState";

export function DrawerSheetStateRoot({
  children,
  isOpen: isOpenProp,
  defaultOpen = false,
  setOpen: setOpenProp,
}: DrawerSheetStateRootPropsT) {
  const pathname = usePathname();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const dragControls = useDragControls();

  const [isOpen, setOpen] = useControllableState({
    value: isOpenProp,
    defaultValue: defaultOpen,
    onChange: setOpenProp,
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
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

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
