"use client";

import { usePathname } from "next/navigation";
import { CSSProperties, useEffect, useRef } from "react";

import { PopoverContext } from "./PopoverContext";
import type { PopoverStateRootPropsT } from "./popoverTypes";
import { selectAccessibleChildren } from "../../utils-exports";
import { AccessNavigation } from "../AccessNavigation/AccessNavigation";
import { useControllableState } from "../../hooks/useControllableState";

export function PopoverStateRoot({
  mode = "click",
  isOpen: isOpenProp,
  setOpen: setOpenProp,
  defaultOpen = false,
  onMouseEnter,
  onMouseLeave,
  style,
  ...p
}: PopoverStateRootPropsT) {
  const pathname = usePathname();

  const [isOpen, setOpen] = useControllableState({
    value: isOpenProp,
    defaultValue: defaultOpen,
    onChange: setOpenProp,
  });

  const toggleRef = useRef<HTMLButtonElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  const styles: CSSProperties = {
    maxWidth: "100%",
    width: "max-content",
    position: "relative",
    ...style,
  };

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
        style={styles}
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
