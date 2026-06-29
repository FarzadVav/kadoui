"use client";

import { CSSProperties, useEffect, useRef } from "react";

import { PopoverContext } from "./PopoverContext";
import { useCloseOnPathnameChange } from "../../hooks/useCloseOnPathnameChange";
import { useSearchParamsBooleanState } from "../../hooks/useSearchParamsBooleanState";
import type { PopoverSearchParamsRootPropsT } from "./popoverTypes";
import { selectAccessibleChildren } from "../../utils-exports";
import { AccessNavigation } from "../AccessNavigation/AccessNavigation";

export function PopoverSearchParamsRoot({
  mode = "click",
  openKey = "popover",
  scroll,
  onMouseEnter,
  onMouseLeave,
  style,
  ...p
}: PopoverSearchParamsRootPropsT) {
  const [isOpen, setOpen] = useSearchParamsBooleanState(openKey, { scroll });

  const toggleRef = useRef<HTMLButtonElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const setOpenRef = useRef(setOpen);
  setOpenRef.current = setOpen;

  const styles: CSSProperties = {
    maxWidth: "100%",
    width: "max-content",
    position: "relative",
    ...style,
  };

  useCloseOnPathnameChange(() => {
    setOpenRef.current(false);
  });

  useEffect(() => {
    const closeHandler = () => {
      setOpenRef.current(false);
    };

    window.addEventListener("click", closeHandler);

    return () => window.removeEventListener("click", closeHandler);
  }, []);

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
