"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useDragControls, useMotionValue } from "framer-motion";

import { SheetContext } from "./SheetContext";
import type { SheetRootPropsT } from "./sheetTypes";
import { getBrowserScrollbarWith } from "../../utils-exports";

export function SheetRoot({ children }: SheetRootPropsT) {
  const pathname = usePathname();

  const y = useMotionValue(0);
  const dragControls = useDragControls();

  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      y.set(0);
    }
  }, [isOpen, y]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
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
      bodyElem.style.overflow = "unset";
      bodyElem.style.paddingRight = "0px";
    };

    if (isOpen) {
      bodyElem.style.overflow = "hidden";
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
    <SheetContext
      value={{
        y,
        isOpen,
        setOpen,
        closeHandler,
        dragControls,
      }}
    >
      {children}
    </SheetContext>
  );
}
