const themeScript = `
  (function() {
    try {
      let localTheme = localStorage.getItem("kadoui-theme") || ""

      if (!["light", "dark", "system"].includes(localTheme)) {
        localTheme = "system"
        localStorage.setItem("kadoui-theme", localTheme)
      }

      const html = document.querySelector("html")

      if (["light", "dark"].includes(localTheme)) {
        html.setAttribute("data-theme", localTheme)

        return
      }

      const themeHandler = (matches) => {
        const theme = matches ? "dark" : "light"
        html.setAttribute("data-theme", theme)
      }

      const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)")
      darkModeQuery.addEventListener("change", ev => themeHandler(ev.matches))
      themeHandler(darkModeQuery.matches)
    } catch (err) {
      console.log(err) 
    }
  })()
`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: themeScript }} />;
}
