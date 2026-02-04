"use client";

import { HTMLAttributes, MouseEvent, useCallback, useEffect, useRef, useState } from "react";

import { getBrowserScrollbarWith } from "../../utils";
import { ContextMenuContext, ContextMenuContextT } from "./ContextMenuContext";

export type ContextMenuRootPropsT = HTMLAttributes<HTMLDivElement>;

export function ContextMenuRoot({ onContextMenu, ...p }: ContextMenuRootPropsT) {
  const [position, setPosition] = useState<ContextMenuContextT["position"]>(undefined);
  const [isOpen, setOpen] = useState(false);

  const contentRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback((ev: globalThis.MouseEvent) => {
    if (!contentRef.current?.contains(ev.target as Node)) {
      setOpen(false);
      setPosition(undefined);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, [handleClickOutside]);

  useEffect(() => {
    const scrollbarWidth = getBrowserScrollbarWith();

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    };
  }, [isOpen]);


  const handleContextMenu = (ev: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    if (!contentRef.current) return;

    ev.preventDefault();

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const menuWidth = contentRef.current.scrollWidth;
    const menuHeight = contentRef.current.scrollHeight;

    let x = ev.clientX;
    let y = ev.clientY;

    if (x + menuWidth > viewportWidth) {
      x = viewportWidth - menuWidth - 10;
    }
    if (y + menuHeight > viewportHeight) {
      y = viewportHeight - menuHeight - 10;
    }

    setPosition({ x, y });
    setOpen(true);
  }


  return (
    <ContextMenuContext value={{ contentRef, isOpen, position }}>
      <div
        onContextMenu={ev => {
          onContextMenu?.(ev);
          handleContextMenu(ev);
        }}
        {...p}
      />
    </ContextMenuContext>
  )
}