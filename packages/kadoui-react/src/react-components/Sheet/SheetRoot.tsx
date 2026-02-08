"use client";

import { usePathname } from "next/navigation";
import { useMotionValue, useAnimate } from "framer-motion";
import { PropsWithChildren, useEffect, useState } from "react";

import { SheetContext } from "./SheetContext";
import { getBrowserScrollbarWith } from "../../utils-exports";

export type SheetRootPropsT = PropsWithChildren;

export function SheetRoot({ children }: SheetRootPropsT) {
  const pathname = usePathname();

  const y = useMotionValue(0);
  const [scope, animate] = useAnimate();

  const [isOpen, setOpen] = useState(false);

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

  const closeHandler = async () => {
    animate(scope.current, {
      opacity: [1, 0],
    });

    const yStart = typeof y.get() === "number" ? y.get() : 0;
    await animate("#sheet", {
      y: [yStart, "100%"],
    });

    setOpen(false);
  };

  return (
    <SheetContext value={{ isOpen, setOpen, closeHandler, scope, y }}>
      {children}
    </SheetContext>
  );
}
