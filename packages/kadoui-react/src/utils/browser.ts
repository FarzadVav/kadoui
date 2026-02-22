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
  const FOCUSABLE_SELECTOR = `
    a[href]:not([tabindex="-1"]),
    button:not([disabled]):not([tabindex="-1"]),
    input:not([type="hidden"]):not([disabled]):not([tabindex="-1"]),
    select:not([disabled]):not([tabindex="-1"]),
    textarea:not([disabled]):not([tabindex="-1"])
  `;

  const candidates = Array.from(
    scope.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
  );

  return candidates.filter((el) => {
    if (el.closest('[data-access-navigation="false"]')) return false;

    if ('disabled' in el && (el as any).disabled) return false;
    if (el.closest('fieldset[disabled]')) return false;

    if (el.hidden) return false;
    if (el.closest('[hidden]')) return false;

    const style = window.getComputedStyle(el);

    if (style.display === 'none') return false;
    if (style.visibility === 'hidden') return false;
    if (style.pointerEvents === 'none') return false;

    if (el.offsetParent === null && style.position !== 'fixed') {
      return false;
    }

    return true;
  });
};