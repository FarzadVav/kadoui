import type { NavItemT } from "./types";

export const docsNavigation: NavItemT[] = [
  {
    title: "Introduction",
    href: "/docs",
    items: [
      { title: "Getting Started", href: "/docs/getting-started" },
      { title: "Theming", href: "/docs/theming" },
    ],
  },
  {
    title: "Tailwind CSS",
    href: "/docs/tailwindcss",
    items: [
      { title: "Overview", href: "/docs/tailwindcss" },
      { title: "Base Utilities", href: "/docs/tailwindcss/base" },
      { title: "Buttons", href: "/docs/tailwindcss/buttons" },
      { title: "Inputs", href: "/docs/tailwindcss/inputs" },
      { title: "Cards", href: "/docs/tailwindcss/cards" },
      { title: "Shadows", href: "/docs/tailwindcss/shadows" },
      { title: "Glass", href: "/docs/tailwindcss/glass" },
      { title: "Join", href: "/docs/tailwindcss/join" },
      { title: "Separator", href: "/docs/tailwindcss/separator" },
      { title: "Choice", href: "/docs/tailwindcss/choice" },
    ],
  },
  {
    title: "React",
    href: "/docs/react",
    items: [
      { title: "Overview", href: "/docs/react" },
      { title: "Theme", href: "/docs/react/theme" },
      { title: "AccessNavigation", href: "/docs/react/access-navigation" },
      { title: "Accordion", href: "/docs/react/accordion" },
      { title: "Affix", href: "/docs/react/affix" },
      { title: "Breadcrumbs", href: "/docs/react/breadcrumbs" },
      { title: "Choice", href: "/docs/react/choice" },
      { title: "ClientOnly", href: "/docs/react/client-only" },
      { title: "Clipboard", href: "/docs/react/clipboard" },
      { title: "ContextMenu", href: "/docs/react/context-menu" },
      { title: "DrawerSheet", href: "/docs/react/drawer-sheet" },
      { title: "LinkLoader", href: "/docs/react/link-loader" },
      { title: "Modal", href: "/docs/react/modal" },
      { title: "Otp", href: "/docs/react/otp" },
      { title: "Pagination", href: "/docs/react/pagination" },
      { title: "PasswordInput", href: "/docs/react/password-input" },
      { title: "Popover", href: "/docs/react/popover" },
      { title: "Portal", href: "/docs/react/portal" },
      { title: "Progress", href: "/docs/react/progress" },
      { title: "QrCode", href: "/docs/react/qr-code" },
      { title: "Rating", href: "/docs/react/rating" },
      { title: "Search", href: "/docs/react/search" },
      { title: "SelectBox", href: "/docs/react/select-box" },
      { title: "ShowMore", href: "/docs/react/show-more" },
      { title: "Spoiler", href: "/docs/react/spoiler" },
      { title: "Submit", href: "/docs/react/submit" },
      { title: "Swap", href: "/docs/react/swap" },
    ],
  },
];

export function flattenNavItems(items: NavItemT[] = docsNavigation): NavItemT[] {
  return items.flatMap((item) => [
    item,
    ...(item.items ? flattenNavItems(item.items) : []),
  ]);
}
