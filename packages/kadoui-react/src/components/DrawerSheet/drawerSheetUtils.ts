import { MotionStyle } from "framer-motion";

import type { DrawerSheetPositionT } from "./drawerSheetTypes";
import {
  DRAWER_SHEET_DISMISS_OFFSET_RATIO,
  DRAWER_SHEET_DISMISS_VELOCITY,
} from "./drawerSheetTypes";

export function getSizeStyles(
  viewportWidth: number,
  position: DrawerSheetPositionT,
): MotionStyle {
  if (position === "top" || position === "bottom") {
    if (viewportWidth < 640) {
      return { height: "75vh" };
    }

    return { height: "50vh" };
  }

  if (viewportWidth < 640) {
    return { width: "80vw" };
  }

  if (viewportWidth < 1024) {
    return { width: "50vw" };
  }

  return { width: "30vw" };
}

export function getPositionStyles(
  position: DrawerSheetPositionT,
  offset: number,
): MotionStyle {
  switch (position) {
    case "top":
      return { top: offset, left: offset, right: offset };
    case "right":
      return { top: offset, bottom: offset, right: offset };
    case "left":
      return { top: offset, bottom: offset, left: offset };
    case "bottom":
    default:
      return { bottom: offset, left: offset, right: offset };
  }
}

export function getInitial(position: DrawerSheetPositionT) {
  switch (position) {
    case "top":
      return { y: "-100%" };
    case "right":
      return { x: "100%" };
    case "left":
      return { x: "-100%" };
    case "bottom":
    default:
      return { y: "100%" };
  }
}

export function getExit(position: DrawerSheetPositionT) {
  return getInitial(position);
}

export function getDragAxis(position: DrawerSheetPositionT): "x" | "y" {
  return position === "left" || position === "right" ? "x" : "y";
}

export function shouldCloseOnDrag(
  position: DrawerSheetPositionT,
  size: number,
  offset: number,
  velocity: number,
  dragValue: number,
) {
  const threshold = size * DRAWER_SHEET_DISMISS_OFFSET_RATIO;

  switch (position) {
    case "bottom":
      return (
        dragValue >= threshold ||
        offset >= threshold ||
        velocity >= DRAWER_SHEET_DISMISS_VELOCITY
      );
    case "top":
      return (
        dragValue <= -threshold ||
        offset <= -threshold ||
        velocity <= -DRAWER_SHEET_DISMISS_VELOCITY
      );
    case "right":
      return (
        dragValue >= threshold ||
        offset >= threshold ||
        velocity >= DRAWER_SHEET_DISMISS_VELOCITY
      );
    case "left":
      return (
        dragValue <= -threshold ||
        offset <= -threshold ||
        velocity <= -DRAWER_SHEET_DISMISS_VELOCITY
      );
  }
}
