"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

import { getBrowserScrollbarWith } from "../../utils-exports";

export function useOverlayOpenEffects(
  isOpen: boolean,
  setOpen: (open: boolean) => void,
) {
  const pathname = usePathname();
  const pathnameRef = useRef(pathname);
  const setOpenRef = useRef(setOpen);
  setOpenRef.current = setOpen;

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenRef.current(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, []);

  useEffect(() => {
    if (pathnameRef.current === pathname) {
      return;
    }

    pathnameRef.current = pathname;
    setOpenRef.current(false);
  }, [pathname]);

  useEffect(() => {
    const scrollbarWidth = getBrowserScrollbarWith();

    const removeOverStyles = () => {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      removeOverStyles();
    }

    return () => removeOverStyles();
  }, [isOpen]);
}
