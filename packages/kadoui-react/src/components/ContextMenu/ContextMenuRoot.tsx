"use client";

import {
  CSSProperties,
  MouseEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import { ContextMenuContext } from "./ContextMenuContext";
import { getBrowserScrollbarWith } from "../../utils-exports";
import type {
  ContextMenuContextT,
  ContextMenuRootPropsT,
} from "./contextMenuTypes";

export function ContextMenuRoot({
  style,
  onContextMenu,
  ...p
}: ContextMenuRootPropsT) {
  const [position, setPosition] =
    useState<ContextMenuContextT["position"]>(undefined);
  const [isOpen, setOpen] = useState(false);

  const contentRef = useRef<HTMLDivElement>(null);

  const styles: CSSProperties = {
    position: "relative",
    ...style,
  };

  const closeHandler = () => {
    setOpen(false);
    setPosition(undefined);
  };

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
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const handleContextMenu = (
    ev: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
  ) => {
    ev.preventDefault();

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const menuWidth = contentRef.current?.scrollWidth || 0;
    const menuHeight = contentRef.current?.scrollHeight || 0;

    let x = ev.clientX;
    let y = ev.clientY;

    if (x + menuWidth > viewportWidth) {
      x = viewportWidth - menuWidth - 10;
    }
    if (y + menuHeight > viewportHeight) {
      y = viewportHeight - menuHeight - 10;
    }

    setPosition({ x, y });

    if (!isOpen) {
      setOpen(true);
    }
  };

  return (
    <ContextMenuContext value={{ contentRef, isOpen, closeHandler, position }}>
      <div
        style={styles}
        onContextMenu={(ev) => {
          onContextMenu?.(ev);
          handleContextMenu(ev);
        }}
        {...p}
      />
    </ContextMenuContext>
  );
}
