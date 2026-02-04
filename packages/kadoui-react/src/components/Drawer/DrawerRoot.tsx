"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect, PropsWithChildren } from "react";

import { DrawerContext } from "./DrawerContext";
import { getBrowserScrollbarWith } from "../../utils";

export type DrawerRootPropsT = PropsWithChildren;

export function DrawerRoot({ children }: DrawerRootPropsT) {
  const pathname = usePathname();

  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleEscape = (ev: KeyboardEvent) => {
      if (ev.key === "Escape") {
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
    const scrollbarWidth = getBrowserScrollbarWith();

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    }
  }, [isOpen]);

  return <DrawerContext value={{ isOpen, setOpen }}>{children}</DrawerContext>;
}
