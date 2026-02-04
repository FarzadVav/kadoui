const themeScript = `
  (function() {
    try {
      const themeHandler = (ev) => {
        const theme = ev.matches ? "dark" : "light";
        document.querySelector("html").setAttribute("data-theme", theme);
      };

      const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");

      darkModeQuery.addEventListener("change", themeHandler)

      themeHandler(darkModeQuery)
    } catch (err) {
      console.log(err) 
    }
  })();
`;

export function ThemeAdapter() {
  return <script dangerouslySetInnerHTML={{ __html: themeScript }} />;
}
