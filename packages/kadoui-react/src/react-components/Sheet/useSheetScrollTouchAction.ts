"use client";

import { useLayoutEffect, useRef } from "react";

function updateTouchAction(element: HTMLElement) {
  element.style.touchAction = element.scrollTop <= 0 ? "pan-down" : "";
}

export function useSheetScrollTouchAction() {
  const ref = useRef<HTMLDivElement>(null);

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
  }, []);

  return {
    ref,
    onScroll: (element: HTMLElement) => {
      updateTouchAction(element);
    },
  };
}
