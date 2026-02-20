"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { PopoverContext } from "./PopoverContext";
import type { PopoverRootPropsT } from "./popoverTypes";
import { selectAccessibleChildren } from "../../utils-exports";
import { AccessNavigation } from "../AccessNavigation/AccessNavigation";

export function PopoverRoot({
  mode = "click",
  onMouseEnter,
  onMouseLeave,
  ...p
}: PopoverRootPropsT) {
  const pathname = usePathname();

  const [isOpen, setOpen] = useState(false);

  const toggleRef = useRef<HTMLButtonElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeHandler = () => {
      setOpen(false);
    };

    window.addEventListener("click", closeHandler);

    return () => window.removeEventListener("click", closeHandler);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      selectFirstMenuChild();
    }
  }, [isOpen]);

  const selectFirstMenuChild = () => {
    if (!bodyRef.current) {
      return;
    }

    const children = selectAccessibleChildren(bodyRef.current);
    const firstChild = children[0];

    if (!firstChild) {
      return;
    }

    firstChild.focus();
  };

  return (
    <PopoverContext value={{ isOpen, setOpen, toggleRef, bodyRef, mode }}>
      <AccessNavigation
        onMouseEnter={(ev) => {
          onMouseEnter?.(ev);
          if (["hover", "both"].includes(mode)) {
            ev.stopPropagation();
            setOpen(true);
          }
        }}
        onMouseLeave={(ev) => {
          onMouseLeave?.(ev);
          if (["hover", "both"].includes(mode)) {
            ev.stopPropagation();
            setOpen(false);
          }
        }}
        {...p}
      />
    </PopoverContext>
  );
}
