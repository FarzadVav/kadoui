"use client";

import { useState, useEffect } from "react";

import type { AffixPropsT } from "./affixTypes";

export const Affix = ({ viewportOffset, onClick, ...p }: AffixPropsT) => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const VIEWPORT_OFFSET = viewportOffset || 0.5;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const scrollThreshold = viewportHeight * VIEWPORT_OFFSET;

      if (currentScrollY > scrollThreshold && currentScrollY > lastScrollY) {
        setIsVisible(true);
      } else if (currentScrollY < lastScrollY && currentScrollY < scrollThreshold) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      data-state={isVisible}
      onClick={(ev) => {
        onClick?.(ev);
        scrollToTop();
      }}
      {...p}
    />
  );
};
