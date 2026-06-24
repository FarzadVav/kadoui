export function measureShowMoreHeights(
  element: HTMLElement,
  maxLines: number,
): { fullHeight: number; clampedHeight: number } | null {
  const width = element.getBoundingClientRect().width;
  if (width <= 0) return null;

  const clone = element.cloneNode(true) as HTMLElement;

  Object.assign(clone.style, {
    position: "absolute",
    visibility: "hidden",
    pointerEvents: "none",
    height: "auto",
    maxHeight: "none",
    overflow: "hidden",
    width: `${width}px`,
    display: "block",
  });

  element.parentElement?.appendChild(clone);

  const fullHeight = clone.scrollHeight;

  clone.style.display = "-webkit-box";
  clone.style.setProperty("-webkit-line-clamp", String(maxLines));
  clone.style.setProperty("-webkit-box-orient", "vertical");

  const clampedHeight = clone.offsetHeight;

  clone.remove();

  return { fullHeight, clampedHeight };
}
