export const getBrowserScrollbarWith = () => {
  const outer = document.createElement("div");
  outer.style.visibility = "hidden";
  outer.style.overflow = "scroll";

  document.body.appendChild(outer);

  const inner = document.createElement("div");
  outer.appendChild(inner);

  const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);

  outer.parentNode?.removeChild(outer);

  return scrollbarWidth;
}

export const selectAccessibleChildren = (scope: HTMLElement) => {
  const candidates = Array.from(
    scope.querySelectorAll<HTMLElement>(".acn")
  );

  return candidates.filter((el) => {
    if ("disabled" in el && (el as HTMLButtonElement).disabled) return false;

    if (el.getAttribute("aria-disabled") === "true") return false;
    if (el.closest(`[aria-disabled="true"]`)) return false;

    if (el.closest("fieldset[disabled]")) return false;

    if (el.hidden) return false;
    if (el.closest("[hidden]")) return false;
    if (el.closest("[inert]")) return false;
    if (el.closest(`[aria-hidden="true"]`)) return false;
    if (el.closest("details:not([open])")) return false;

    const style = window.getComputedStyle(el);

    if (style.display === "none") return false;
    if (style.visibility === "hidden" || style.visibility === "collapse") {
      return false;
    }

    if (el.getClientRects().length === 0) return false;

    return true;
  });
};