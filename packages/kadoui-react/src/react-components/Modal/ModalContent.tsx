"use client";

import { CSSProperties, useEffect, useRef } from "react";

import type { ModalContentPropsT } from "./modalTypes";

export function ModalContent({ onClick, style, ...p }: ModalContentPropsT) {
  const contentRef = useRef<HTMLDivElement>(null);

  const styles: CSSProperties = {
    flex: 1,
    padding: 10,
    borderRadius: 10,
    overflowY: "auto",
    backgroundColor: "var(--color-card)",
    ...style,
  };

  useEffect(() => {
    if (!contentRef.current) return;

    const prev = contentRef.current.previousElementSibling;
    const next = contentRef.current.nextElementSibling;

    if (prev?.tagName === "HEADER") {
      contentRef.current.style.borderTopLeftRadius = "0";
      contentRef.current.style.borderTopRightRadius = "0";
    }

    if (next?.tagName === "FOOTER") {
      contentRef.current.style.borderBottomLeftRadius = "0";
      contentRef.current.style.borderBottomRightRadius = "0";
    }
  }, []);

  return (
    <div
      style={styles}
      ref={contentRef}
      onClick={(ev) => {
        onClick?.(ev);
        ev.stopPropagation();
      }}
      {...p}
    />
  );
}
