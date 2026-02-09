"use client";

import { MouseEvent, useCallback, useEffect, useRef, useState } from "react";

import { getBrowserScrollbarWith } from "../../utils-exports";
import { ContextMenuContext } from "./ContextMenuContext";
import type { ContextMenuContextT, ContextMenuRootPropsT } from "./contextMenuTypes";

export function ContextMenuRoot({ onContextMenu, ...p }: ContextMenuRootPropsT) {
  const [position, setPosition] = useState<ContextMenuContextT["position"]>(undefined);
  const [isOpen, setOpen] = useState(false);

  const contentRef = useRef<HTMLDivElement>(null);

  const closeHandler = () => {
    setOpen(false);
    setPosition(undefined);
  }

  const handleClickOutside = useCallback((ev: globalThis.MouseEvent) => {
    if (!contentRef.current?.contains(ev.target as Node)) {
      closeHandler();
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
    <ContextMenuContext value={{ contentRef, isOpen, closeHandler, position }}>
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