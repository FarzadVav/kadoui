"use client";

import { useCallback, useLayoutEffect, useRef } from "react";

import type { DrawerSheetPositionT } from "./drawerSheetTypes";

function getCanDrag(element: HTMLElement, position: DrawerSheetPositionT) {
  switch (position) {
    case "bottom":
    case "left":
    case "right":
      return element.scrollTop <= 0;
    case "top":
      return (
        element.scrollTop + element.clientHeight >= element.scrollHeight - 1
      );
  }
}

function getTouchAction(
  position: DrawerSheetPositionT,
  canDrag: boolean,
): string {
  if (!canDrag) {
    return position === "left" || position === "right" ? "pan-y" : "";
  }

  switch (position) {
    case "bottom":
      return "pan-down";
    case "top":
      return "pan-up";
    case "left":
      return "pan-left";
    case "right":
      return "pan-right";
  }
}

export function useDrawerSheetScrollTouchAction(
  position: DrawerSheetPositionT,
  gesture: boolean,
) {
  const ref = useRef<HTMLDivElement>(null);

  const updateTouchAction = useCallback(
    (element: HTMLElement) => {
      if (!gesture) {
        element.style.touchAction = "";
        return;
      }

      element.style.touchAction = getTouchAction(
        position,
        getCanDrag(element, position),
      );
    },
    [gesture, position],
  );

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;

    updateTouchAction(element);

    const onTouchStart = () => {
      requestAnimationFrame(() => updateTouchAction(element));
    };

    element.addEventListener("touchstart", onTouchStart, { passive: true });

    return () => {
      element.removeEventListener("touchstart", onTouchStart);
    };
  }, [updateTouchAction]);

  return {
    ref,
    canStartDrag: (element: HTMLElement) =>
      gesture && getCanDrag(element, position),
    onScroll: (element: HTMLElement) => {
      updateTouchAction(element);
    },
  };
}
