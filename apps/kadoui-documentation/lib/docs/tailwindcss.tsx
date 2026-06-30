import type { TailwindDocT } from "../types";
import {
  ButtonVariantsDemo,
  ButtonColorsDemo,
  ButtonSizesDemo,
  InputVariantsDemo,
  InputColorsDemo,
  InputSizesDemo,
  CardDemo,
  ShadowDemo,
  GlassDemo,
  JoinDemo,
  SeparatorDemo,
  ChoiceCssDemo,
} from "@/components/examples/tailwind-demos";

export const tailwindDocs: Record<string, TailwindDocT> = {
  base: {
    slug: "base",
    title: "Base Utilities",
    description: "Global base styles and helper utilities from KadoUI Tailwind.",
    overview:
      "The base layer applies opinionated defaults to HTML elements and provides small utility classes for common layout and visibility patterns.",
    utilities: [
      { name: "no-scrollbar", type: "utility", description: "Hides native scrollbars while keeping scroll behavior." },
      { name: "w-fix", type: "utility", description: "Width fits content but never exceeds parent (w-max max-w-full)." },
      { name: "h-fix", type: "utility", description: "Height fits content but never exceeds parent." },
      { name: "size-fix", type: "utility", description: "Combines w-fix and h-fix." },
      { name: "ignore", type: "utility", description: "Hides element visually and from pointer events (opacity-0 invisible pointer-events-none)." },
      { name: "not-ignore", type: "utility", description: "Reverses the ignore utility." },
    ],
    sections: [
      {
        id: "base-layer",
        title: "Base layer defaults",
        description:
          "Applied automatically when you import @kadoui/tailwindcss. Includes smooth scrolling, theme-aware body colors, thin scrollbars, and disabled text selection on all elements.",
        code: `@import "@kadoui/tailwindcss";
@import "tailwindcss";`,
      },
      {
        id: "visibility",
        title: "Visibility helpers",
        description:
          "The ignore/not-ignore pair mirrors the React ignoreStyles helper and is used by components like Affix for scroll-based visibility.",
        code: `<div className="ignore">Hidden from layout interaction</div>
<div className="not-ignore">Visible again</div>`,
      },
    ],
    notes: [
      "Input wrappers should use <label> elements — see the Inputs documentation.",
      "Pair ignore utilities with React state for scroll-triggered UI.",
    ],
  },

  buttons: {
    slug: "buttons",
    title: "Buttons",
    description: "Composable button utilities with variants, colors, and sizes.",
    overview:
      "Start every button with the btn base class, then layer a style variant, optional color, and optional size. All styling is driven by CSS custom properties you can override.",
    cssVariables: [
      { name: "--btn-palette", type: "color", default: "var(--color-foreground)", description: "Primary button color (background or text depending on variant)." },
      { name: "--btn-brush", type: "color", default: "var(--color-background)", description: "Contrast color for fill variant text." },
      { name: "--btn-height", type: "length", default: "calc(var(--spacing) * 10)", description: "Button height." },
      { name: "--btn-spacing", type: "length", default: "calc(var(--spacing) * 3)", description: "Horizontal padding and gap scale." },
      { name: "--btn-rounded", type: "length", default: "var(--radius-lg)", description: "Border radius." },
    ],
    utilities: [
      { name: "btn", type: "base", description: "Required base class for all buttons." },
      { name: "btn-fill | btn-soft | btn-ghost | btn-soft-outline | btn-ghost-outline | btn-link", type: "variant", description: "Visual style. Pick exactly one." },
      { name: "btn-primary | btn-secondary | btn-error | ...", type: "color", description: "Theme color palette. Nine semantic colors available." },
      { name: "btn-xs | btn-sm | btn-md | btn-lg | btn-xl", type: "size", description: "Size scale from extra-small to extra-large." },
      { name: "btn-square", type: "modifier", description: "Equal width and height — ideal for icon buttons." },
      { name: "btn-full", type: "modifier", description: "Full width button." },
      { name: "btn-row", type: "modifier", description: "Full width with space-between — common for list rows." },
      { name: "btn-rounded", type: "modifier", description: "Pill-shaped fully rounded button." },
      { name: "btn-in-input", type: "modifier", description: "Scales to 75% of parent .input height." },
    ],
    sections: [
      {
        id: "variants",
        title: "Style variants",
        description: "Six visual styles cover every common button pattern.",
        preview: <ButtonVariantsDemo />,
        code: `<button className="btn btn-fill btn-primary">Fill</button>
<button className="btn btn-soft btn-primary">Soft</button>
<button className="btn btn-ghost btn-primary">Ghost</button>
<button className="btn btn-soft-outline btn-primary">Soft Outline</button>
<button className="btn btn-ghost-outline btn-primary">Ghost Outline</button>
<button className="btn btn-link btn-primary">Link</button>`,
      },
      {
        id: "colors",
        title: "Colors",
        description: "Nine semantic colors map to your theme tokens.",
        preview: <ButtonColorsDemo />,
        code: `<button className="btn btn-fill btn-primary">Primary</button>
<button className="btn btn-fill btn-error">Error</button>
<button className="btn btn-fill btn-success">Success</button>`,
      },
      {
        id: "sizes",
        title: "Sizes",
        preview: <ButtonSizesDemo />,
        code: `<button className="btn btn-fill btn-primary btn-xs">XS</button>
<button className="btn btn-fill btn-primary btn-lg">LG</button>`,
      },
      {
        id: "data-state",
        title: "State-driven styling",
        description:
          "KadoUI React toggles expose data-state=\"true\" | \"false\". Use Tailwind arbitrary variants to style active/inactive states.",
        code: `<Choice.Toggle
  className="btn data-[state=true]:btn-fill data-[state=false]:btn-soft btn-primary"
  choiceName="option"
/>`,
      },
      {
        id: "disabled",
        title: "Disabled state",
        description: "The btn utility handles disabled:opacity-50 and disabled:cursor-not-allowed automatically.",
        code: `<button className="btn btn-fill btn-primary" disabled>
  Disabled
</button>`,
      },
    ],
  },

  inputs: {
    slug: "inputs",
    title: "Inputs",
    description: "Label-based input wrappers with variants, colors, and sizes.",
    overview:
      "Input styling wraps form controls in a <label> element. Child inputs use input-field. Buttons inside inputs can use btn-in-input.",
    cssVariables: [
      { name: "--input-palette", type: "color", default: "var(--color-foreground)", description: "Border and text color." },
      { name: "--input-brush", type: "color", default: "var(--color-background)", description: "Fill variant background." },
      { name: "--input-height", type: "length", default: "calc(var(--spacing) * 10)", description: "Input height (textarea uses 33dvh)." },
      { name: "--input-rounded", type: "length", default: "var(--radius-lg)", description: "Border radius." },
    ],
    utilities: [
      { name: "input", type: "base", description: "Required wrapper class on <label>." },
      { name: "input-field", type: "child", description: "Applied to input, select, or textarea inside wrapper." },
      { name: "input-ghost | input-soft | input-fill | input-soft-outline | input-ghost-outline", type: "variant", description: "Visual style variants." },
      { name: "input-primary | input-error | ...", type: "color", description: "Semantic color palettes." },
      { name: "input-xs | input-sm | input-md | input-lg | input-xl", type: "size", description: "Size scale." },
      { name: "input-square | input-full | input-rounded", type: "modifier", description: "Shape modifiers." },
    ],
    sections: [
      {
        id: "basic",
        title: "Basic usage",
        description: "Always use a label wrapper with input-field on the control.",
        preview: <InputVariantsDemo />,
        code: `<label className="input input-ghost-outline">
  <SearchIcon />
  <input className="input-field" placeholder="Input Ghost-Outline..." />
  <button className="btn btn-ghost btn-in-input btn-square">Go</button>
</label>`,
      },
      {
        id: "colors",
        title: "Colors",
        description: "Nine semantic input color palettes pair with matching btn-* colors on inner buttons.",
        preview: <InputColorsDemo />,
        code: `<label className="input input-ghost-outline input-primary">
  <SearchIcon />
  <input className="input-field" placeholder="Input primary..." />
  <button className="btn btn-ghost btn-primary btn-in-input btn-square">Go</button>
</label>`,
      },
      {
        id: "sizes",
        title: "Sizes",
        preview: <InputSizesDemo />,
        code: `<label className="input input-ghost-outline input-lg">
  <SearchIcon />
  <input className="input-field" placeholder="Input lg..." />
  <button className="btn btn-ghost btn-lg btn-in-input btn-square">Go</button>
</label>`,
      },
      {
        id: "with-button",
        title: "Input with button",
        description: "Place btn-in-input buttons inside the label. Padding adjusts automatically.",
        code: `<label className="input input-ghost-outline input-primary">
  <input className="input-field" placeholder="Search" />
  <button className="btn btn-ghost btn-primary btn-in-input btn-square">
    <SearchIcon />
  </button>
</label>`,
      },
      {
        id: "textarea",
        title: "Textarea",
        description: "Textareas automatically expand the wrapper height to 33dvh.",
        code: `<label className="input input-soft input-foreground">
  <textarea className="input-field" placeholder="Message" />
</label>`,
      },
    ],
    notes: ["The wrapper element must be a <label> for correct cursor and accessibility behavior."],
  },

  cards: {
    slug: "cards",
    title: "Cards",
    description: "Container utilities for panels, menus, and content blocks.",
    overview:
      "Cards provide consistent padding and border radius. Use card-y or card-x for flex layouts, and card-menu variants for dropdown panels.",
    cssVariables: [
      { name: "--card-spacing", type: "length", default: "calc(var(--spacing) * 3)", description: "Padding and gap." },
      { name: "--card-rounded", type: "length", default: "var(--radius-lg)", description: "Border radius." },
      { name: "--card-width", type: "length", default: "auto", description: "Card width." },
    ],
    utilities: [
      { name: "card", type: "base", description: "Base card container." },
      { name: "card-y | card-x", type: "layout", description: "Vertical or horizontal flex with gap." },
      { name: "card-menu | card-fix-menu", type: "variant", description: "Content-sized menus; fix-menu caps at 100% width." },
      { name: "card-xs | card-sm | card-md | card-lg | card-xl", type: "size", description: "Padding and radius scale." },
    ],
    sections: [
      {
        id: "basic",
        title: "Basic card",
        preview: <CardDemo />,
        code: `<div className="card card-md card-y bg-card">
  <h3>Title</h3>
  <p>Description</p>
</div>`,
      },
      {
        id: "menus",
        title: "Menu cards",
        description: "Use with glass for dropdown and popover panels.",
        code: `<SelectBox.List className="card card-y glass glass-card">
  ...
</SelectBox.List>`,
      },
    ],
  },

  shadows: {
    slug: "shadows",
    title: "Shadows",
    description: "Custom shadow scale defined in your @theme block.",
    overview:
      "Shadow tokens are not part of @kadoui/tailwindcss — define them in your app's globals.css @theme. The playground uses center, top (-t), and bottom (-b) variants from xs to xl.",
    utilities: [
      { name: "shadow-xs | shadow-sm | shadow-md | shadow-lg | shadow-xl", type: "center", description: "Centered glow shadows." },
      { name: "shadow-*-t", type: "top", description: "Shadow cast upward." },
      { name: "shadow-*-b", type: "bottom", description: "Shadow cast downward." },
    ],
    sections: [
      {
        id: "setup",
        title: "Theme setup",
        code: `@theme {
  --shadow-*: initial;
  --shadow-xs: 0 0 5px 0 #efefef25;
  --shadow-sm: 0 0 10px 0 #efefef25;
  --shadow-md: 0 0 20px 0 #efefef25;
  --shadow-lg: 0 0 35px 0 #efefef25;
  --shadow-xl: 0 0 60px 0 #efefef25;
  --shadow-xs-b: 0 2.5px 5px 0 #efefef25;
  --shadow-sm-t: 0 -5px 10px 0 #efefef25;
  /* ... */
}`,
      },
      {
        id: "demo",
        title: "Shadow scale",
        description: "Hover each card to preview the shadow.",
        preview: <ShadowDemo />,
        code: `<div className="card w-32 aspect-square bg-card hover:shadow-md" />
<div className="card w-32 aspect-square bg-card hover:shadow-lg-b" />`,
      },
    ],
  },

  glass: {
    slug: "glass",
    title: "Glass",
    description: "Frosted glass effect with backdrop blur.",
    overview:
      "Apply glass to overlays and floating panels. Combine with a glass-* color utility to tint the frosted background.",
    cssVariables: [
      { name: "--glass-blur", type: "length", default: "var(--blur-md)", description: "Backdrop blur amount." },
      { name: "--glass-palette", type: "color", default: "var(--color-background)", description: "Tint color at 50% opacity." },
    ],
    utilities: [
      { name: "glass", type: "base", description: "Backdrop blur + semi-transparent background." },
      { name: "glass-background | glass-primary | ...", type: "color", description: "Tint palette for the glass effect." },
    ],
    sections: [
      {
        id: "demo",
        title: "Glass panel",
        preview: <GlassDemo />,
        code: `<DrawerSheet.Portal className="glass">
  <DrawerSheet.Body>...</DrawerSheet.Body>
</DrawerSheet.Portal>`,
      },
    ],
  },

  join: {
    slug: "join",
    title: "Join",
    description: "Group adjacent buttons or inputs with shared borders.",
    overview:
      "Join utilities remove inner border radii and optionally collapse borders between siblings. Essential for tab bars and button groups.",
    utilities: [
      { name: "join-x | join-y", type: "base", description: "Horizontal or vertical join container." },
      { name: "join-x-border | join-y-border", type: "modifier", description: "Collapse shared borders, keep outer border." },
      { name: "join-x-no-border | join-y-no-border", type: "modifier", description: "Remove internal borders entirely." },
      { name: "join-x-fix-border | join-y-fix-border", type: "modifier", description: "Collapse only the inner side borders." },
    ],
    sections: [
      {
        id: "button-group",
        title: "Button group",
        preview: <JoinDemo />,
        code: `<div className="join-x join-x-no-border">
  <button className="btn btn-soft btn-primary">One</button>
  <button className="btn btn-fill btn-primary">Two</button>
  <button className="btn btn-soft btn-primary">Three</button>
</div>`,
      },
      {
        id: "pagination",
        title: "Tab-style pagination",
        code: `<Pagination.Counts className="join-x join-x-no-border">
  {(page) => <button className="btn ...">{page}</button>}
</Pagination.Counts>`,
      },
    ],
  },

  separator: {
    slug: "separator",
    title: "Separator",
    description: "Directional separators with configurable spacing.",
    overview:
      "The separate utility adds border, padding, and margin on a chosen side. Combine with Tailwind border utilities for dash style and color.",
    cssVariables: [
      { name: "--separate-border-width", type: "length", default: "1px", description: "Border width on the chosen side." },
      { name: "--separate-spacing", type: "length", default: "calc(var(--spacing) * 5)", description: "Padding and margin on the chosen side." },
    ],
    utilities: [
      { name: "separate", type: "base", description: "Sets separator CSS variables." },
      { name: "separate-t | separate-r | separate-b | separate-l | separate-x | separate-y", type: "direction", description: "Which side(s) get the separator." },
      { name: "separate-xs | separate-sm | separate-md | separate-lg | separate-xl", type: "size", description: "Spacing and border width scale." },
    ],
    sections: [
      {
        id: "demo",
        title: "Dashed separator",
        preview: <SeparatorDemo />,
        code: `<div className="bg-card separate separate-t separate-xl border-dashed border-error">
  Separate top
</div>`,
      },
    ],
  },

  choice: {
    slug: "choice",
    title: "Choice (CSS)",
    description: "Radio, checkbox, and switch styling for Choice React component.",
    overview:
      "Choice CSS utilities style the toggle and thumb elements. Use data-state=\"true\" | \"false\" on Choice.Toggle for state-driven appearance.",
    cssVariables: [
      { name: "--choice-palette", type: "color", default: "var(--color-foreground)", description: "Control accent color." },
      { name: "--choice-size", type: "length", default: "calc(var(--spacing) * 7)", description: "Control dimensions." },
    ],
    utilities: [
      { name: "choice", type: "base", description: "Base choice toggle styles." },
      { name: "choice-radio + choice-radio-thumb", type: "type", description: "Circular radio control." },
      { name: "choice-checkbox + choice-checkbox-thumb", type: "type", description: "Square checkbox control." },
      { name: "choice-switch + choice-switch-thumb", type: "type", description: "Pill switch with sliding thumb." },
      { name: "choice-primary | choice-error | ...", type: "color", description: "Semantic color palettes." },
      { name: "choice-xs | choice-sm | choice-md | choice-lg | choice-xl", type: "size", description: "Size scale." },
    ],
    sections: [
      {
        id: "types",
        title: "Control types",
        preview: <ChoiceCssDemo />,
        code: `<Choice.Toggle className="choice choice-radio choice-primary" choiceName="1">
  <Choice.Thumb className="choice-radio-thumb" />
</Choice.Toggle>`,
      },
      {
        id: "filter-buttons",
        title: "As filter buttons",
        description: "Choice toggles can also use btn classes instead of choice-* utilities.",
        code: `<Choice.Toggle
  className="btn data-[state=true]:btn-fill data-[state=false]:btn-soft btn-primary"
  choiceName="all"
>
  All
</Choice.Toggle>`,
      },
    ],
  },
};

export const tailwindSlugs = Object.keys(tailwindDocs);
