"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import { ModalContext } from "./ModalContext";
import type { ModalRootPropsT } from "./modalTypes";
import { getBrowserScrollbarWith } from "../../utils-exports";

export function ModalRoot({ children, defaultOpen = false }: ModalRootPropsT) {
  const pathname = usePathname();
  const [isOpen, setOpen] = useState(defaultOpen);

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

    const removeOverStyles = () => {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    }

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      removeOverStyles();
    }

    return () => removeOverStyles();
  }, [isOpen]);

  return <ModalContext value={{ isOpen, setOpen }}>{children}</ModalContext>;
}
