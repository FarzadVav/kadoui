import {
  type CSSProperties,
  type RefObject,
  useLayoutEffect,
  useState,
} from "react";

export type PositionT =
  | "top-left-out"
  | "top-left-in"
  | "top-center"
  | "top-right-in"
  | "top-right-out"
  | "right-top"
  | "right-center"
  | "right-bottom-in"
  | "right-bottom-out"
  | "bottom-right"
  | "bottom-center"
  | "bottom-left-in"
  | "bottom-left-out"
  | "left-bottom"
  | "left-center"
  | "left-top";

const DEFAULT_OFFSET = 4;

const EMPTY_DOM_RECT = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
} as DOMRect;

const createDOMRect = (
  x = 0,
  y = 0,
  width = 0,
  height = 0,
): DOMRect =>
  typeof DOMRect !== "undefined"
    ? new DOMRect(x, y, width, height)
    : EMPTY_DOM_RECT;

type ViewportShiftT = { x: number; y: number };

type ViewportSafeAreaStateT = {
  shift: ViewportShiftT;
  baseRect: DOMRect;
  maxHeightPx?: number;
  maxWidthPx?: number;
};

const toCssSize = (value: number | string) =>
  typeof value === "number" ? `${value}px` : value;

export const getViewportShift = (
  rect: DOMRect,
  safeArea = DEFAULT_OFFSET,
): ViewportShiftT => {
  let x = 0;
  let y = 0;

  if (rect.left < safeArea) {
    x = safeArea - rect.left;
  } else if (rect.right > window.innerWidth - safeArea) {
    x = window.innerWidth - safeArea - rect.right;
  }

  if (rect.top < safeArea) {
    y = safeArea - rect.top;
  } else if (rect.bottom > window.innerHeight - safeArea) {
    y = window.innerHeight - safeArea - rect.bottom;
  }

  return { x, y };
};

export const applyViewportSafeArea = (
  styles: CSSProperties,
  { shift, baseRect, maxHeightPx, maxWidthPx }: ViewportSafeAreaStateT,
): CSSProperties => {
  const result = { ...styles };

  if (shift.x || shift.y) {
    const shiftTransform = `translate(${shift.x}px, ${shift.y}px)`;
    result.transform = result.transform
      ? `${result.transform} ${shiftTransform}`
      : shiftTransform;
  }

  if (maxHeightPx != null && maxHeightPx > 0) {
    result.maxHeight = styles.maxHeight
      ? `min(${toCssSize(styles.maxHeight)}, ${maxHeightPx}px)`
      : maxHeightPx;
    result.overflowY = styles.overflowY ?? "auto";
  }

  if (maxWidthPx != null && maxWidthPx > 0) {
    result.maxWidth = styles.maxWidth
      ? `min(${toCssSize(styles.maxWidth)}, ${maxWidthPx}px)`
      : maxWidthPx;
    result.overflowX = styles.overflowX ?? "auto";
  }

  return result;
};

export const useViewportSafeArea = (
  ref: RefObject<HTMLElement | null>,
  styles: CSSProperties,
  enabled: boolean,
  safeArea = DEFAULT_OFFSET,
): CSSProperties => {
  const [state, setState] = useState<ViewportSafeAreaStateT>({
    shift: { x: 0, y: 0 },
    baseRect: createDOMRect(),
  });

  useLayoutEffect(() => {
    if (!enabled) {
      setState({ shift: { x: 0, y: 0 }, baseRect: createDOMRect() });
      return;
    }

    const el = ref.current;
    if (!el) {
      return;
    }

    const update = () => {
      setState((prev) => {
        const current = el.getBoundingClientRect();
        const baseRect = createDOMRect(
          current.x - prev.shift.x,
          current.y - prev.shift.y,
          current.width,
          current.height,
        );
        const shift = getViewportShift(baseRect, safeArea);

        const maxHeightPx = Math.max(
          0,
          window.innerHeight - safeArea - (baseRect.top + shift.y),
        );
        const maxWidthPx = Math.max(
          0,
          window.innerWidth - safeArea - (baseRect.left + shift.x),
        );

        const next: ViewportSafeAreaStateT = {
          shift,
          baseRect,
          maxHeightPx:
            baseRect.height > maxHeightPx ? maxHeightPx : undefined,
          maxWidthPx: baseRect.width > maxWidthPx ? maxWidthPx : undefined,
        };

        if (
          next.shift.x === prev.shift.x &&
          next.shift.y === prev.shift.y &&
          next.maxHeightPx === prev.maxHeightPx &&
          next.maxWidthPx === prev.maxWidthPx
        ) {
          return prev;
        }

        return next;
      });
    };

    update();

    const ro = new ResizeObserver(update);
    ro.observe(el);

    const offsetParent = el.offsetParent;
    if (offsetParent instanceof Element) {
      ro.observe(offsetParent);
    }

    window.addEventListener("resize", update);
    window.addEventListener("scroll", update, true);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
      window.removeEventListener("scroll", update, true);
    };
  }, [enabled, ref, safeArea]);

  if (!enabled) {
    return styles;
  }

  return applyViewportSafeArea(styles, state);
};

const withOffset = (value: string, offset: number) =>
  offset ? `calc(${value} + ${offset}px)` : value;

export const getPositionStyles = (
  position: PositionT,
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
