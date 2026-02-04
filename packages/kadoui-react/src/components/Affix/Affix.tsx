"use client";

import { useState, useEffect, HTMLAttributes } from "react";

export type AffixPropsT = HTMLAttributes<HTMLButtonElement>;

export const Affix = ({ onClick, ...p }: AffixPropsT) => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const scrollThreshold = viewportHeight * 0.5;

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
