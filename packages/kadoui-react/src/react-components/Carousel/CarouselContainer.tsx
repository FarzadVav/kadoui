"use client";

import { use, useCallback, useEffect, useRef } from "react";

import { CarouselContext } from "./CarouselContext";
import type { CarouselContainerPropsT } from "./carouselTypes";

export function CarouselContainer({ children, style, ...p }: CarouselContainerPropsT) {
  const { scrollRef, mouseScroll, childrenWidth } = use(CarouselContext);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);
  const cleanupRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    return () => {
      cleanupRef.current?.();
    };
  }, []);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (!mouseScroll || !scrollRef.current) return;

      isDragging.current = true;
      startX.current = e.pageX;
      startScrollLeft.current = scrollRef.current.scrollLeft;

      scrollRef.current.style.scrollBehavior = "auto";
      scrollRef.current.style.cursor = "grabbing";
      scrollRef.current.style.userSelect = "none";

      const onMouseMove = (ev: MouseEvent) => {
        if (!isDragging.current || !scrollRef.current) return;
        ev.preventDefault();
        const dx = ev.pageX - startX.current;
        scrollRef.current.scrollLeft = startScrollLeft.current - dx;
      };

      const onMouseUp = (ev: MouseEvent) => {
        if (!isDragging.current || !scrollRef.current) return;
        isDragging.current = false;

        scrollRef.current.style.cursor = "grab";
        scrollRef.current.style.userSelect = "";

        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
        cleanupRef.current = null;

        if (mouseScroll === "auto") {
          scrollRef.current.style.scrollBehavior = "";
        } else if (mouseScroll === "swipe") {
          scrollRef.current.style.scrollBehavior = "";
          const dx = ev.pageX - startX.current;

          if (Math.abs(dx) > 10) {
            scrollRef.current.scrollTo({
              left:
                dx > 0
                  ? startScrollLeft.current - childrenWidth
                  : startScrollLeft.current + childrenWidth,
              behavior: "smooth",
            });
          } else {
            scrollRef.current.scrollTo({
              left: startScrollLeft.current,
              behavior: "smooth",
            });
          }
        }
      };

      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
      cleanupRef.current = () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
      };

      e.preventDefault();
    },
    [mouseScroll, scrollRef, childrenWidth],
  );

  return (
    <div
      ref={scrollRef}
      onMouseDown={mouseScroll ? handleMouseDown : undefined}
      style={{
        ...(mouseScroll ? { cursor: "grab" } : {}),
        ...style,
      }}
      {...p}
    >
      {children}
    </div>
  );
}