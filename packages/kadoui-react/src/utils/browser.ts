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

export const selectAccessibleChildren = (parent: HTMLElement) => {
  const children = Array.from(
    parent.querySelectorAll<HTMLElement>(`
      a:not([tabindex="-1"]),
      input:not([disabled],[tabindex="-1"]),
      select:not([disabled],[tabindex="-1"]),
      textarea:not([disabled],[tabindex="-1"]),
      button:not([disabled],[tabindex="-1"])
    `)
  )

  return children;
}