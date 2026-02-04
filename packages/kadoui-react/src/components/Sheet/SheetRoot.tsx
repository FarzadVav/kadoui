"use client";

import { usePathname } from "next/navigation";
import { useMotionValue, useAnimate } from "framer-motion";
import { PropsWithChildren, useEffect, useState } from "react";

import { SheetContext } from "./SheetContext";

export type SheetRootPropsT = PropsWithChildren;

export function SheetRoot({ children }: SheetRootPropsT) {
  const pathname = usePathname();

  const y = useMotionValue(0);
  const [scope, animate] = useAnimate();

  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const bodyElem = document.body;

    const removeOverflow = () => {
      bodyElem.style.overflow = "unset";
    };

    if (isOpen) {
      bodyElem.style.overflow = "hidden";
    } else {
      removeOverflow();
    }

    return () => removeOverflow();
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
