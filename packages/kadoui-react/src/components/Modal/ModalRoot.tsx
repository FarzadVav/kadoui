"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect, PropsWithChildren } from "react";

import { ModalContext } from "./ModalContext";
import { getBrowserScrollbarWith } from "../../utils";

export type ModalRootPropsT = PropsWithChildren & {
  defaultOpen?: boolean;
};

export function ModalRoot({ children, defaultOpen = false }: ModalRootPropsT) {
  const pathname = usePathname();
  const [isOpen, setOpen] = useState(defaultOpen);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

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
    const scrollbarWidth = getBrowserScrollbarWith();

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    }
  }, [isOpen]);

  return <ModalContext value={{ isOpen, setOpen }}>{children}</ModalContext>;
}
