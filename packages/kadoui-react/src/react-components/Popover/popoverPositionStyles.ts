import type { CSSProperties } from "react";

import type { PopoverBodyPropsT } from "./popoverTypes";

type PopoverPositionT = PopoverBodyPropsT["position"];

const DEFAULT_OFFSET = 3;

const withOffset = (value: string, offset: number) =>
  offset ? `calc(${value} + ${offset}px)` : value;

export const getPopoverPositionStyles = (
  position: PopoverPositionT,
  offset = DEFAULT_OFFSET,
): CSSProperties => {
  switch (position) {
    // Above parent
    case "top-left-out":
      return {
        bottom: withOffset("100%", offset),
        left: 0,
        transform: "translateX(-100%)",
      };
    case "top-left-in":
      return {
        bottom: withOffset("100%", offset),
        left: 0,
      };
    case "top-center":
      return {
        bottom: withOffset("100%", offset),
        left: "50%",
        transform: "translateX(-50%)",
      };
    case "top-right-in":
      return {
        bottom: withOffset("100%", offset),
        right: 0,
      };
    case "top-right-out":
      return {
        bottom: withOffset("100%", offset),
        right: 0,
        transform: "translateX(100%)",
      };

    // Right of parent
    case "right-top":
      return {
        left: withOffset("100%", offset),
        top: 0,
      };
    case "right-center":
      return {
        left: withOffset("100%", offset),
        top: "50%",
        transform: "translateY(-50%)",
      };
    case "right-bottom-in":
      return {
        left: withOffset("100%", offset),
        bottom: 0,
      };
    case "right-bottom-out":
      return {
        left: withOffset("100%", offset),
        bottom: 0,
        transform: "translateY(100%)",
      };

    // Below parent
    case "bottom-right":
      return {
        top: withOffset("100%", offset),
        right: 0,
      };
    case "bottom-center":
      return {
        top: withOffset("100%", offset),
        left: "50%",
        transform: "translateX(-50%)",
      };
    case "bottom-left-in":
      return {
        top: withOffset("100%", offset),
        left: 0,
      };
    case "bottom-left-out":
      return {
        top: withOffset("100%", offset),
        left: 0,
        transform: "translateX(-100%)",
      };

    // Left of parent
    case "left-bottom":
      return {
        right: withOffset("100%", offset),
        bottom: 0,
      };
    case "left-center":
      return {
        right: withOffset("100%", offset),
        top: "50%",
        transform: "translateY(-50%)",
      };
    case "left-top":
      return {
        right: withOffset("100%", offset),
        top: 0,
      };
  }
};
