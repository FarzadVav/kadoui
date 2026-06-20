"use client";

import {
  ComponentPropsWithoutRef,
  KeyboardEvent,
  Ref,
  RefObject,
  useCallback,
  useEffect,
  useRef,
} from "react";

import { selectAccessibleChildren } from "../../utils-exports";

type DirectionT = "y" | "x";

export type AccessNavigationPropsT = ComponentPropsWithoutRef<"div"> & {
  loop?: boolean;
  focusTrap?: any;
  direction: DirectionT;
  autoFocusFirst?: boolean;
  ref?: Ref<HTMLDivElement>;
};

function assignRef<T>(ref: Ref<T> | undefined, value: T | null) {
  if (!ref) return;

  if (typeof ref === "function") {
    ref(value);
    return;
  }

  try {
    (ref as RefObject<T | null>).current = value;
  } catch {
    // readonly ref; ignore
  }
}

function shouldIgnoreArrowNavigation(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) return false;

  return Boolean(
    target.closest(
      'input, textarea, select, [contenteditable="true"], [role="textbox"], [data-arrow-nav-ignore]',
    ),
  );
}

function getDirection(dir?: string): "ltr" | "rtl" {
  const resolvedDir =
    dir || document.documentElement.getAttribute("dir") || "ltr";

  return resolvedDir === "rtl" ? "rtl" : "ltr";
}

export function AccessNavigation({
  ref,
  dir,
  focusTrap,
  direction,
  loop = true,
  autoFocusFirst,
  onKeyDown,
  ...p
}: AccessNavigationPropsT) {
  const internalRef = useRef<HTMLDivElement | null>(null);

  const composedRef = useCallback(
    (node: HTMLDivElement | null) => {
      internalRef.current = node;
      assignRef(ref, node);
    },
    [ref],
  );

  useEffect(() => {
    if (!autoFocusFirst) return;

    const id = window.setTimeout(() => {
      const root = internalRef.current;
      if (!root) return;

      const items = selectAccessibleChildren(root);
      const firstItem = items[0];

      firstItem?.focus({ preventScroll: true });
    }, 0);

    return () => window.clearTimeout(id);
  }, [autoFocusFirst, focusTrap]);

  const handleKeyDown = (ev: KeyboardEvent<HTMLDivElement>) => {
    if (shouldIgnoreArrowNavigation(ev.target)) return;

    const root = ev.currentTarget;
    const items = selectAccessibleChildren(root);

    if (items.length < 2) return;

    const currentDir = getDirection(dir);
    const currentIndex = items.findIndex(
      (item) => item === document.activeElement,
    );

    const nextKey =
      direction === "y"
        ? "ArrowDown"
        : currentDir === "ltr"
          ? "ArrowRight"
          : "ArrowLeft";

    const prevKey =
      direction === "y"
        ? "ArrowUp"
        : currentDir === "ltr"
          ? "ArrowLeft"
          : "ArrowRight";

    let nextIndex: number | null = null;

    if (ev.key === nextKey) {
      if (currentIndex === -1) {
        nextIndex = 0;
      } else if (currentIndex === items.length - 1) {
        nextIndex = loop ? 0 : currentIndex;
      } else {
        nextIndex = currentIndex + 1;
      }
    }

    if (ev.key === prevKey) {
      if (currentIndex === -1) {
        nextIndex = items.length - 1;
      } else if (currentIndex === 0) {
        nextIndex = loop ? items.length - 1 : currentIndex;
      } else {
        nextIndex = currentIndex - 1;
      }
    }

    if (ev.key === "Home") {
      nextIndex = 0;
    }

    if (ev.key === "End") {
      nextIndex = items.length - 1;
    }

    if (nextIndex === null) return;

    ev.preventDefault();
    ev.stopPropagation();

    const currentItem = items[currentIndex];
    const nextItem = items[nextIndex];

    if (!nextItem) return;

    // Roving tabindex
    currentItem?.setAttribute("tabindex", "-1");
    nextItem.setAttribute("tabindex", "0");

    nextItem.focus();
  };

  return (
    <div
      {...p}
      dir={dir}
      ref={composedRef}
      onKeyDown={(ev) => {
        onKeyDown?.(ev);
        if (ev.defaultPrevented) return;

        handleKeyDown(ev);
      }}
    />
  );
}
