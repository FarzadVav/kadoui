"use client";

import { useState, useEffect, CSSProperties } from "react";

import type { AffixPropsT } from "./affixTypes";
import { ignoreElement, zIndexes } from "../../styles";

export const Affix = ({
  viewportOffset = 0.5,
  onClick,
  style,
  ...p
}: AffixPropsT) => {
  const [isVisible, setIsVisible] = useState(false);

  const styles: CSSProperties = {
    position: "fixed",
    zIndex: zIndexes.smallOverlay,
    ...(isVisible ? {} : ignoreElement),
    ...style,
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const scrollThreshold = viewportHeight * viewportOffset;

      if (currentScrollY > scrollThreshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      style={styles}
      data-state={isVisible}
      onClick={(ev) => {
        onClick?.(ev);
        scrollToTop();
      }}
      {...p}
    />
  );
};
