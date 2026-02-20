"use client";

import { ComponentPropsWithoutRef, KeyboardEvent, RefObject, useEffect, useRef } from "react";

import { selectAccessibleChildren } from "../../utils-exports";

export type AccessNavigationPropsT = ComponentPropsWithoutRef<"div"> & {
  direction: "y" | "x";
  focusOnMount?: boolean;
  ref?: RefObject<HTMLDivElement | null>;
};

export function AccessNavigation({
  ref,
  focusOnMount,
  direction,
  dir,
  onKeyDown,
  ...p
}: AccessNavigationPropsT) {
  const accessNavigationRef = ref || useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!accessNavigationRef.current) return;

    const focusableChildren = selectAccessibleChildren(accessNavigationRef.current);

    if (focusOnMount) {
      setTimeout(() => {
        focusableChildren[0]?.focus();
      }, 150);
    }
  }, []);

  const handleKeyDown = (ev: KeyboardEvent<HTMLDivElement>) => {
    const focusableChildren = selectAccessibleChildren(ev.currentTarget);

    // console.log(focusableChildren);

    if (focusableChildren.length < 2) {
      return;
    }

    const currentDir: "ltr" | "rtl" = (dir ||
      document.documentElement.getAttribute("dir") ||
      "ltr") as "ltr" | "rtl";

    const currentIndex = focusableChildren.findIndex(
      (item) => item === document.activeElement,
    );

    if (
      ev.key ===
      (direction === "y"
        ? "ArrowDown"
        : currentDir === "ltr"
          ? "ArrowRight"
          : "ArrowLeft")
    ) {
      ev.preventDefault();
      ev.stopPropagation();

      const nextIndex =
        currentIndex === -1 || currentIndex === focusableChildren.length - 1
          ? 0
          : currentIndex + 1;
      focusableChildren[nextIndex]?.focus();
    }

    if (
      ev.key ===
      (direction === "y" ? "ArrowUp" : currentDir === "ltr" ? "ArrowLeft" : "ArrowRight")
    ) {
      ev.preventDefault();
      ev.stopPropagation();

      const prevIndex =
        currentIndex <= 0 ? focusableChildren.length - 1 : currentIndex - 1;
      focusableChildren[prevIndex]?.focus();
    }
  };

  return (
    <div
      dir={dir}
      ref={accessNavigationRef}
      onKeyDown={(ev) => {
        onKeyDown?.(ev);
        handleKeyDown(ev);
      }}
      {...p}
    />
  );
}
