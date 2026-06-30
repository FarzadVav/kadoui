import type { ReactDocT } from "../types";
import {
  AccessNavigationDemo,
  AccordionDemo,
  AffixDemo,
  BreadcrumbsDemo,
  ChoiceDemo,
  ClientOnlyDemo,
  ClipboardDemo,
  ContextMenuDemo,
  DrawerSheetDemo,
  LinkLoaderDemo,
  ModalDemo,
  OtpDemo,
  PaginationDemo,
  PasswordInputDemo,
  PopoverDemo,
  PortalDemo,
  ProgressDemo,
  QrCodeDemo,
  RatingDemo,
  SearchDemo,
  SelectBoxDemo,
  ShowMoreDemo,
  SpoilerDemo,
  SubmitDemo,
  SwapDemo,
  ThemeDemo,
} from "@/components/examples/react-demos";
import { Preview } from "@/components/docs/Preview";

const accessNavigationProps = [
  { name: "direction", type: '"x" | "y"', required: true, description: "Arrow key navigation axis." },
  { name: "loop", type: "boolean", default: "false", description: "Wrap focus from last to first item." },
  { name: "focusTrap", type: "boolean", description: "Trap focus within the container." },
  { name: "autoFocusFirst", type: "boolean", description: "Focus first focusable child on mount." },
];

const searchParamsProps = [
  { name: "scroll", type: "boolean", default: "false", description: "Scroll to top when URL state changes." },
];

export const reactDocs: Record<string, ReactDocT> = {
  theme: {
    slug: "theme",
    title: "Theme",
    description: "Dark, light, and system theme with persistence.",
    overview:
      "ThemeProvider wraps your app and syncs theme preference to localStorage. ThemeScript prevents flash of wrong theme on load. useTheme exposes the current theme and setter.",
    importCode: `import { ThemeProvider, ThemeScript, useTheme } from "@kadoui/react";`,
    props: [
      { name: "attribute", type: '"class" | `data-${string}`', default: '"data-theme"', description: "HTML attribute used to apply theme." },
      { name: "defaultTheme", type: "string", default: '"system"', description: "Initial theme when no stored preference." },
      { name: "enableSystem", type: "boolean", default: "true", description: "Allow system preference detection." },
      { name: "storageKey", type: "string", default: '"kadoui-theme"', description: "localStorage key for persistence." },
      { name: "themes", type: "string[]", description: "List of allowed theme names." },
      { name: "forcedTheme", type: "string", description: "Force a specific theme, ignoring user preference." },
      { name: "disableTransitionOnChange", type: "boolean", description: "Disable CSS transitions when theme changes." },
    ],
    sections: [
      {
        id: "setup",
        title: "Setup",
        code: `// app/layout.tsx
import { ThemeProvider } from "@kadoui/react";

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}`,
      },
      {
        id: "demo",
        title: "Theme switcher",
        preview: <Preview><ThemeDemo /></Preview>,
        code: `const { theme, setTheme, resolvedTheme } = useTheme();

<button onClick={() => setTheme("dark")}>Dark</button>`,
      },
      {
        id: "css",
        title: "Dark mode in CSS",
        code: `@custom-variant dark (&:where([data-theme=dark], [data-theme=dark] *));

[data-theme="dark"] {
  --background: #151515;
  --foreground: #efefef;
}`,
      },
    ],
  },

  "access-navigation": {
    slug: "access-navigation",
    title: "AccessNavigation",
    description: "Keyboard arrow navigation for focusable children.",
    overview:
      "Wraps a group of focusable elements and moves focus with arrow keys. Children should use the acn class. Ignores arrow keys when focus is inside inputs or textareas.",
    importCode: `import { AccessNavigation } from "@kadoui/react";`,
    props: accessNavigationProps,
    sections: [
      {
        id: "usage",
        title: "Usage",
        preview: <AccessNavigationDemo />,
        code: `<AccessNavigation direction="x" loop className="join-x join-x-border">
  <button className="acn btn btn-soft">One</button>
  <button className="acn btn btn-soft">Two</button>
</AccessNavigation>`,
      },
    ],
    notes: ["Used internally by Accordion, Choice, SelectBox, Popover, Rating, and ContextMenu."],
  },

  accordion: {
    slug: "accordion",
    title: "Accordion",
    description: "Expandable sections with single or multiple open items.",
    overview:
      "Compound component with animated expand/collapse via Framer Motion. Supports controlled state and URL sync via AccordionWithSearchParams.",
    importCode: `import { Accordion, AccordionWithSearchParams } from "@kadoui/react";`,
    parts: [
      { name: "Accordion (Root)", type: "component", description: "State provider and keyboard navigation wrapper." },
      { name: "Item", type: "component", description: "Wraps one accordion section. Requires itemName." },
      { name: "Toggle", type: "button", description: "Expands/collapses section. Sets data-state." },
      { name: "Body", type: "motion.div", description: "Animated container for content." },
      { name: "Content", type: "div", description: "Inner content slot." },
    ],
    props: [
      { name: "accordionState", type: "string | null | string[]", required: true, description: "Open item(s). Array when multiple=true." },
      { name: "onAccordionChange", type: "function", required: true, description: "Called when open state changes." },
      { name: "multiple", type: "boolean", default: "false", description: "Allow multiple sections open." },
      ...accessNavigationProps,
    ],
    searchParamsVariant: {
      name: "AccordionWithSearchParams",
      props: [
        { name: "accordionKey", type: "string", description: "URL search param key for open state." },
        ...searchParamsProps,
      ],
      notes: ["Wrap in <Suspense> when using in Next.js App Router."],
    },
    sections: [
      {
        id: "demo",
        title: "Single mode",
        preview: <AccordionDemo />,
        code: `<Accordion direction="y" accordionState={item} onAccordionChange={setItem}>
  <Accordion.Item itemName="1">
    <Accordion.Toggle className="btn btn-full btn-row data-[state=true]:btn-fill data-[state=false]:btn-soft group">
      <span>Section</span>
      <ChevronDownIcon className="group-data-[state=true]:-scale-y-100" />
    </Accordion.Toggle>
    <Accordion.Body>
      <Accordion.Content>...</Accordion.Content>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>`,
      },
    ],
  },

  affix: {
    slug: "affix",
    title: "Affix",
    description: "Fixed button that appears after scrolling.",
    overview:
      "Ideal for scroll-to-top buttons. Becomes visible after the user scrolls past a viewport fraction.",
    importCode: `import { Affix } from "@kadoui/react";`,
    props: [
      { name: "viewportOffset", type: "number", default: "0.5", description: "Fraction of viewport height before showing (0–1)." },
      { name: "...buttonProps", type: "ButtonHTMLAttributes", description: "All native button props." },
    ],
    sections: [
      {
        id: "demo",
        title: "Scroll to top",
        preview: <AffixDemo />,
        code: `<Affix className="btn btn-fill btn-square bottom-3 right-3" viewportOffset={1}>
  <ChevronUpIcon />
</Affix>`,
      },
    ],
  },

  breadcrumbs: {
    slug: "breadcrumbs",
    title: "Breadcrumbs",
    description: "Navigation trail with custom separators.",
    overview: "Renders a nav element with items separated by a custom React node.",
    importCode: `import { Breadcrumbs } from "@kadoui/react";`,
    parts: [
      { name: "Breadcrumbs (Root)", type: "nav", description: "Container with separator between items." },
      { name: "Item", type: "div", description: "Single breadcrumb segment. Use isLastItem on the final item." },
    ],
    props: [
      { name: "separator", type: "ReactNode", required: true, description: "Element rendered between items." },
    ],
    sections: [
      {
        id: "demo",
        title: "Basic",
        preview: <BreadcrumbsDemo />,
        code: `<Breadcrumbs separator={<ChevronRightIcon />}>
  <Breadcrumbs.Item>Home</Breadcrumbs.Item>
  <Breadcrumbs.Item isLastItem>Current</Breadcrumbs.Item>
</Breadcrumbs>`,
      },
    ],
  },

  choice: {
    slug: "choice",
    title: "Choice",
    description: "Selection control for filters, radio, checkbox, or switch UIs.",
    overview:
      "Generic selection primitive supporting single or multiple selection. Style with btn utilities or choice-* CSS classes.",
    importCode: `import { Choice, ChoiceWithSearchParams } from "@kadoui/react";`,
    parts: [
      { name: "Choice (Root)", type: "component", description: "Selection state provider." },
      { name: "Toggle", type: "button", description: "Selectable option. Requires choiceName." },
      { name: "Thumb", type: "span", description: "Inner indicator for radio/checkbox/switch styles." },
    ],
    props: [
      { name: "choiceState", type: "string | null | string[]", required: true, description: "Selected value(s)." },
      { name: "onChoiceChange", type: "function", required: true, description: "Selection change handler." },
      { name: "multiple", type: "boolean", default: "false", description: "Allow multiple selections." },
      { name: "requiredOne", type: "boolean", description: "Prevent deselecting the last item in multiple mode." },
      ...accessNavigationProps,
    ],
    searchParamsVariant: {
      name: "ChoiceWithSearchParams",
      props: [
        { name: "choiceKey", type: "string", description: "URL param key." },
        { name: "requiredOne", type: "boolean", description: "Same as state variant." },
        ...searchParamsProps,
      ],
    },
    sections: [
      {
        id: "filter",
        title: "Filter buttons",
        preview: <ChoiceDemo />,
        code: `<Choice choiceState={value} onChoiceChange={setValue} direction="x">
  <Choice.Toggle choiceName="a" className="btn data-[state=true]:btn-fill btn-primary">
    Option A
  </Choice.Toggle>
</Choice>`,
      },
      {
        id: "radio",
        title: "Radio style",
        code: `<Choice.Toggle className="choice choice-radio choice-primary" choiceName="1">
  <Choice.Thumb className="choice-radio-thumb" />
</Choice.Toggle>`,
      },
    ],
  },

  "client-only": {
    slug: "client-only",
    title: "ClientOnly",
    description: "Renders children only after client mount.",
    overview: "Prevents hydration mismatches for client-only UI like theme-dependent content.",
    importCode: `import { ClientOnly } from "@kadoui/react";`,
    props: [
      { name: "children", type: "ReactNode", required: true, description: "Content rendered after mount." },
    ],
    sections: [
      {
        id: "usage",
        title: "Usage",
        preview: <ClientOnlyDemo />,
        code: `<ClientOnly>
  <p>Rendered only on client</p>
</ClientOnly>`,
      },
    ],
  },

  clipboard: {
    slug: "clipboard",
    title: "Clipboard",
    description: "Copy-to-clipboard button with copied feedback.",
    overview: "Uses the Clipboard API with a temporary copied state and optional custom copied children.",
    importCode: `import { Clipboard } from "@kadoui/react";`,
    props: [
      { name: "text", type: "string", required: true, description: "Text to copy." },
      { name: "timeout", type: "number", default: "3000", description: "Copied state duration in ms." },
      { name: "onCopy", type: "() => void", description: "Callback after successful copy." },
      { name: "copiedChildren", type: "ReactNode", description: "Content shown while in copied state." },
    ],
    sections: [
      {
        id: "demo",
        title: "Basic",
        preview: <ClipboardDemo />,
        code: `<Clipboard text="Hello!" className="btn btn-soft btn-primary" copiedChildren={<CheckIcon />}>
  <CopyIcon /> Copy
</Clipboard>`,
      },
    ],
  },

  "context-menu": {
    slug: "context-menu",
    title: "ContextMenu",
    description: "Right-click context menu at cursor position.",
    overview: "Positions a menu at the cursor on contextmenu event. Closes on outside click.",
    importCode: `import { ContextMenu } from "@kadoui/react";`,
    parts: [
      { name: "ContextMenu (Root)", type: "div", description: "Relative container for trigger area." },
      { name: "Body", type: "div", description: "Menu panel with keyboard navigation." },
      { name: "Item", type: "button", description: "Menu action item." },
    ],
    props: accessNavigationProps.map((p) =>
      p.name === "direction" ? { ...p, description: "On ContextMenu.Body — menu navigation axis." } : p,
    ),
    sections: [
      {
        id: "demo",
        title: "Basic",
        preview: <ContextMenuDemo />,
        code: `<ContextMenu>
  <div>Right-click here</div>
  <ContextMenu.Body direction="y" className="card card-y glass">
    <ContextMenu.Item className="btn btn-ghost btn-row">Edit</ContextMenu.Item>
  </ContextMenu.Body>
</ContextMenu>`,
      },
    ],
  },

  "drawer-sheet": {
    slug: "drawer-sheet",
    title: "DrawerSheet",
    description: "Slide-in drawer overlay with drag-to-dismiss.",
    overview:
      "Bottom sheet / side drawer with Framer Motion animations. Supports top, right, bottom, left positions and optional swipe gesture.",
    importCode: `import { DrawerSheet, DrawerSheetWithSearchParams } from "@kadoui/react";`,
    parts: [
      { name: "DrawerSheet (Root)", type: "component", description: "Open state provider." },
      { name: "Toggle", type: "button", description: "Opens/closes drawer." },
      { name: "Portal", type: "component", description: "Renders overlay in document.body." },
      { name: "Body", type: "motion.div", description: "Animated drawer panel." },
      { name: "Indicator", type: "div", description: "Drag handle or header slot." },
      { name: "Content", type: "div", description: "Main content area." },
    ],
    props: [
      { name: "isOpen", type: "boolean", description: "Controlled open state." },
      { name: "setOpen", type: "(open: boolean) => void", description: "Open state setter." },
      { name: "defaultOpen", type: "boolean", description: "Uncontrolled initial state." },
    ],
    searchParamsVariant: {
      name: "DrawerSheetWithSearchParams",
      props: [{ name: "openKey", type: "string", description: "URL param key." }, ...searchParamsProps],
    },
    sections: [
      {
        id: "demo",
        title: "Bottom sheet",
        preview: <DrawerSheetDemo />,
        code: `<DrawerSheet>
  <DrawerSheet.Toggle className="btn btn-fill btn-primary">Open</DrawerSheet.Toggle>
  <DrawerSheet.Portal>
    <DrawerSheet.Body position="bottom" gesture className="card glass">
      <DrawerSheet.Content>...</DrawerSheet.Content>
    </DrawerSheet.Body>
  </DrawerSheet.Portal>
</DrawerSheet>`,
      },
    ],
  },

  "link-loader": {
    slug: "link-loader",
    title: "LinkLoader",
    description: "Render prop for Next.js link pending state.",
    overview: "Wraps Next.js useLinkStatus to show loading UI during client navigation.",
    importCode: `import { LinkLoader } from "@kadoui/react";`,
    props: [
      { name: "children", type: "(isPending: boolean) => ReactNode", required: true, description: "Render function receiving pending state." },
    ],
    sections: [
      {
        id: "usage",
        title: "Usage",
        preview: <LinkLoaderDemo />,
        code: `<Link href="/test" className="btn btn-soft">
  <span>Test page</span>
  <LinkLoader>
    {(pending) => pending ? <LoaderIcon className="animate-spin" /> : <ArrowUpRightIcon />}
  </LinkLoader>
</Link>`,
      },
    ],
  },

  modal: {
    slug: "modal",
    title: "Modal",
    description: "Centered modal overlay with portal rendering.",
    overview: "Full-screen overlay with animated centered panel. Compose header, body, and footer via Indicator and Content slots.",
    importCode: `import { Modal, ModalWithSearchParams } from "@kadoui/react";`,
    parts: [
      { name: "Modal (Root)", type: "component", description: "Open state provider." },
      { name: "Toggle", type: "button", description: "Opens/closes modal." },
      { name: "Portal", type: "component", description: "Backdrop + portal container." },
      { name: "Body", type: "motion.div", description: "Animated modal panel." },
      { name: "Indicator", type: "div", description: "Header slot." },
      { name: "Content", type: "div", description: "Body slot." },
    ],
    props: [
      { name: "isOpen", type: "boolean", description: "Controlled open state." },
      { name: "setOpen", type: "(open: boolean) => void", description: "Open state setter." },
      { name: "defaultOpen", type: "boolean", description: "Uncontrolled initial state." },
    ],
    searchParamsVariant: {
      name: "ModalWithSearchParams",
      props: [{ name: "openKey", type: "string", description: "URL param key." }, ...searchParamsProps],
    },
    sections: [
      {
        id: "demo",
        title: "Basic modal",
        preview: <ModalDemo />,
        code: `<Modal>
  <Modal.Toggle className="btn btn-fill btn-primary">Open</Modal.Toggle>
  <Modal.Portal>
    <Modal.Body className="card card-md card-y glass">
      <Modal.Indicator>Title</Modal.Indicator>
      <Modal.Content>Body content</Modal.Content>
    </Modal.Body>
  </Modal.Portal>
</Modal>`,
      },
    ],
  },

  otp: {
    slug: "otp",
    title: "Otp",
    description: "OTP/PIN input with auto-advance between digits.",
    overview:
      "Multi-digit input with paste support, auto-focus advance, and hidden input for form submission. Forces LTR direction.",
    importCode: `import { Otp } from "@kadoui/react";`,
    parts: [
      { name: "Otp (Root)", type: "div", description: "OTP context provider." },
      { name: "Inputs", type: "input[]", description: "Renders length digit inputs." },
      { name: "HiddenInput", type: "input", description: "Hidden field with combined OTP value." },
    ],
    props: [
      { name: "autoFocus", type: "boolean", description: "Focus first digit on mount." },
      { name: "length", type: "number", required: true, description: "Number of OTP digits (on Inputs)." },
      { name: "onLastChange", type: "(otp: string) => void", description: "Called when all digits are filled." },
    ],
    sections: [
      {
        id: "demo",
        title: "4-digit OTP",
        preview: <OtpDemo />,
        code: `<Otp className="join-x join-x-no-border">
  <Otp.Inputs length={6} className="input input-ghost-outline input-square" />
  <Otp.HiddenInput name="otp" />
</Otp>`,
      },
    ],
  },

  pagination: {
    slug: "pagination",
    title: "Pagination",
    description: "Page navigation by number or custom page components.",
    overview:
      "Two modes: numbered pages or an array of named page components. Counts sub-component renders page buttons with ellipsis support.",
    importCode: `import { Pagination, PaginationWithSearchParams } from "@kadoui/react";`,
    parts: [
      { name: "Pagination (Root)", type: "component", description: "Page state provider." },
      { name: "Counts", type: "component", description: "Renders page number buttons." },
      { name: "Pages", type: "component", description: "Renders current page component (custom pages mode)." },
      { name: "NextBtn", type: "button", description: "Go to next page." },
      { name: "PrevBtn", type: "button", description: "Go to previous page." },
    ],
    props: [
      { name: "pagesLength", type: "number", description: "Total pages (numbered mode)." },
      { name: "pages", type: "{ name, component }[]", description: "Custom page components." },
      { name: "page", type: "number", required: true, description: "Current page (1-indexed)." },
      { name: "setPage", type: "(page: number) => void", required: true, description: "Page change handler." },
      ...accessNavigationProps,
    ],
    searchParamsVariant: {
      name: "PaginationWithSearchParams",
      props: [
        { name: "pageKey", type: "string", default: '"page"', description: "URL param key." },
        ...searchParamsProps,
      ],
    },
    sections: [
      {
        id: "demo",
        title: "Numbered pages",
        preview: <PaginationDemo />,
        code: `<Pagination pagesLength={5} page={page} setPage={setPage} direction="x">
  <Pagination.Counts className="join-x join-x-no-border">
    {(n) => <button className="btn data-[state=true]:btn-fill btn-primary">{n}</button>}
  </Pagination.Counts>
</Pagination>`,
      },
    ],
  },

  "password-input": {
    slug: "password-input",
    title: "PasswordInput",
    description: "Password field with show/hide toggle.",
    overview: "Compound label wrapper with controlled or uncontrolled visibility state.",
    importCode: `import { PasswordInput } from "@kadoui/react";`,
    parts: [
      { name: "PasswordInput (Root)", type: "label", description: "Visibility state provider." },
      { name: "Field", type: "input", description: "Password input field." },
      { name: "Toggle", type: "button", description: "Show/hide button. Requires visibleChildren." },
    ],
    props: [
      { name: "isVisible", type: "boolean", description: "Controlled visibility." },
      { name: "setIsVisible", type: "(v: boolean) => void", description: "Visibility setter." },
      { name: "defaultVisible", type: "boolean", description: "Initial visibility." },
    ],
    sections: [
      {
        id: "demo",
        title: "Basic",
        preview: <PasswordInputDemo />,
        code: `<PasswordInput className="input input-ghost-outline input-primary">
  <PasswordInput.Field placeholder="Password" />
  <PasswordInput.Toggle visibleChildren={<EyeClosedIcon />} className="btn btn-in-input btn-square">
    <EyeIcon />
  </PasswordInput.Toggle>
</PasswordInput>`,
      },
    ],
  },

  popover: {
    slug: "popover",
    title: "Popover",
    description: "Floating popover with click, hover, or both triggers.",
    overview: "Positions a floating panel relative to the toggle. Supports all standard positions with offset.",
    importCode: `import { Popover, PopoverWithSearchParams } from "@kadoui/react";`,
    parts: [
      { name: "Popover (Root)", type: "component", description: "Open state and trigger mode provider." },
      { name: "Toggle", type: "button", description: "Trigger element." },
      { name: "Body", type: "div", description: "Floating panel. Requires position." },
    ],
    props: [
      { name: "mode", type: '"click" | "hover" | "both"', default: '"click"', description: "How the popover is triggered." },
      { name: "isOpen", type: "boolean", description: "Controlled open state." },
      { name: "setOpen", type: "(open: boolean) => void", description: "Open state setter." },
      { name: "position", type: "PositionT", required: true, description: "On Body — top, bottom, left, right, and corners." },
      { name: "offset", type: "number", description: "Distance from toggle in pixels." },
      { name: "preventClose", type: "boolean", description: "Keep open on outside click." },
      ...accessNavigationProps,
    ],
    searchParamsVariant: {
      name: "PopoverWithSearchParams",
      props: [{ name: "openKey", type: "string", description: "URL param key." }, ...searchParamsProps],
    },
    sections: [
      {
        id: "demo",
        title: "Click mode",
        preview: <PopoverDemo />,
        code: `<Popover mode="click">
  <Popover.Toggle className="btn btn-soft btn-primary">Open</Popover.Toggle>
  <Popover.Body position="bottom-center" offset={8} className="card glass">
    Content
  </Popover.Body>
</Popover>`,
      },
    ],
  },

  portal: {
    slug: "portal",
    title: "Portal",
    description: "Renders children into document.body via createPortal.",
    overview: "Client-only portal for overlays. Used internally by Modal and DrawerSheet.",
    importCode: `import { Portal } from "@kadoui/react";`,
    props: [
      { name: "container", type: "Element", description: "Custom portal target. Defaults to document.body." },
      { name: "children", type: "ReactNode", required: true, description: "Portaled content." },
    ],
    sections: [
      {
        id: "usage",
        title: "Usage",
        preview: <PortalDemo />,
        code: `<Portal>
  <p>Content rendered at document.body</p>
</Portal>`,
      },
    ],
  },

  progress: {
    slug: "progress",
    title: "Progress",
    description: "Animated progress bar.",
    overview: "Context-based progress bar with Framer Motion animated fill.",
    importCode: `import { Progress } from "@kadoui/react";`,
    parts: [
      { name: "Progress (Root)", type: "div", description: "Provides value/maxValue context." },
      { name: "Bar", type: "motion.div", description: "Animated fill bar." },
    ],
    props: [
      { name: "value", type: "number", required: true, description: "Current progress value." },
      { name: "maxValue", type: "number", default: "100", description: "Maximum value." },
      { name: "duration", type: "number", description: "On Bar — animation duration in seconds." },
    ],
    sections: [
      {
        id: "demo",
        title: "Basic",
        preview: <ProgressDemo />,
        code: `<Progress value={65} className="h-3 rounded-full bg-card">
  <Progress.Bar className="h-full bg-primary rounded-full" duration={0.4} />
</Progress>`,
      },
    ],
  },

  "qr-code": {
    slug: "qr-code",
    title: "QrCode",
    description: "QR code rendered to canvas.",
    overview: "Client-side QR code generation using the qrcode package.",
    importCode: `import { QrCode } from "@kadoui/react";`,
    props: [
      { name: "value", type: "string", required: true, description: "Data to encode." },
      { name: "options", type: "QRCodeRenderersOptions", description: "qrcode library render options." },
    ],
    sections: [
      {
        id: "demo",
        title: "Basic",
        preview: <QrCodeDemo />,
        code: `<QrCode value="https://example.com" className="rounded-lg" />`,
      },
    ],
  },

  rating: {
    slug: "rating",
    title: "Rating",
    description: "Star rating with hover preview.",
    overview: "Keyboard-accessible rating control with custom active/inactive elements.",
    importCode: `import { Rating } from "@kadoui/react";`,
    parts: [
      { name: "Rating (Root)", type: "component", description: "Keyboard navigation wrapper." },
      { name: "Items", type: "button[]", description: "Renders count rating buttons." },
    ],
    props: [
      { name: "count", type: "number", required: true, description: "Number of rating items." },
      { name: "value", type: "number", required: true, description: "Current rating value." },
      { name: "onValueChange", type: "(v: number) => void", required: true, description: "Rating change handler." },
      { name: "element", type: "ReactNode", required: true, description: "Inactive item icon/element." },
      { name: "activeElement", type: "ReactNode", required: true, description: "Active item icon/element." },
      ...accessNavigationProps,
    ],
    sections: [
      {
        id: "demo",
        title: "Star rating",
        preview: <RatingDemo />,
        code: `<Rating direction="x">
  <Rating.Items
    count={5}
    value={rating}
    onValueChange={setRating}
    element={<StarIcon />}
    activeElement={<StarIcon className="fill-warning text-warning" />}
    className="btn btn-ghost btn-warning btn-square"
  />
</Rating>`,
      },
    ],
  },

  search: {
    slug: "search",
    title: "Search",
    description: "Search input with optional URL sync.",
    overview:
      "Label-based search compound component. Built-in URL sync via searchKey — no separate WithSearchParams export needed.",
    importCode: `import { Search } from "@kadoui/react";`,
    parts: [
      { name: "Search (Root)", type: "label", description: "Search form wrapper with URL sync." },
      { name: "Field", type: "input", description: "Search text input." },
      { name: "ClearBtn", type: "button", description: "Clears input and URL param." },
      { name: "SubmitBtn", type: "button", description: "Submits search to URL." },
    ],
    props: [
      { name: "searchKey", type: "string", default: '"search"', description: "URL search param key." },
      { name: "baseUrl", type: "string", default: '""', description: "Base URL for navigation." },
      { name: "scroll", type: "boolean", description: "Scroll on URL change." },
      { name: "hiddenOnEmpty", type: "boolean", description: "On ClearBtn — hide when input is empty." },
      { name: "hiddenOnEqual", type: "boolean", description: "On SubmitBtn — hide when value matches URL." },
    ],
    sections: [
      {
        id: "demo",
        title: "Local search UI",
        preview: <SearchDemo />,
        code: `<Search className="input input-ghost-outline input-primary">
  <Search.Field placeholder="Search..." />
  <Search.ClearBtn className="btn btn-in-input btn-square" hiddenOnEmpty>×</Search.ClearBtn>
  <Search.SubmitBtn className="btn btn-fill btn-primary btn-in-input">Go</Search.SubmitBtn>
</Search>`,
      },
    ],
  },

  "select-box": {
    slug: "select-box",
    title: "SelectBox",
    description: "Combobox with search filtering and single/multi select.",
    overview:
      "Full-featured select/combobox with optional search, keyboard navigation, and URL state sync.",
    importCode: `import { SelectBox, SelectBoxWithSearchParams, SelectBoxOptionT } from "@kadoui/react";`,
    parts: [
      { name: "SelectBox (Root)", type: "component", description: "Selection and search state provider." },
      { name: "Input", type: "label", description: "Display input wrapper." },
      { name: "Field", type: "input", description: "Displays selected value." },
      { name: "Toggle", type: "button", description: "Opens/closes dropdown." },
      { name: "List", type: "div", description: "Dropdown panel." },
      { name: "SearchInput", type: "label", description: "Search wrapper inside list." },
      { name: "SearchField", type: "input", description: "Filter input." },
      { name: "Options", type: "component", description: "Auto-renders filtered options." },
    ],
    props: [
      { name: "options", type: "SelectBoxOptionT[]", required: true, description: "Available options ({ name, value })." },
      { name: "optionValue", type: "SelectBoxOptionT | null | SelectBoxOptionT[]", required: true, description: "Selected value(s)." },
      { name: "setOptionValue", type: "function", required: true, description: "Selection change handler." },
      { name: "multiSelect", type: "boolean", default: "false", description: "Allow multiple selections." },
      { name: "inputSearch", type: "string", description: "Controlled search filter text." },
      ...accessNavigationProps,
    ],
    searchParamsVariant: {
      name: "SelectBoxWithSearchParams",
      props: [{ name: "valueKey", type: "string", description: "URL param key for selected value(s)." }, ...searchParamsProps],
    },
    sections: [
      {
        id: "demo",
        title: "Single select",
        preview: <SelectBoxDemo />,
        code: `<SelectBox options={options} optionValue={value} setOptionValue={setValue} direction="y">
  <SelectBox.Input className="input input-ghost-outline">
    <SelectBox.Field placeholder="Select..." readOnly />
    <SelectBox.Toggle className="btn btn-in-input btn-square"><ChevronDownIcon /></SelectBox.Toggle>
  </SelectBox.Input>
  <SelectBox.List position="bottom" className="card card-y glass">
    <SelectBox.Options className="btn btn-row data-[state=true]:btn-fill btn-primary" />
  </SelectBox.List>
</SelectBox>`,
      },
    ],
  },

  "show-more": {
    slug: "show-more",
    title: "ShowMore",
    description: "Line-clamped expandable text with fade overlay.",
    overview:
      "Measures content height against maxLines and provides expand/collapse toggle with optional gradient fade.",
    importCode: `import { ShowMore, ShowMoreWithSearchParams } from "@kadoui/react";`,
    parts: [
      { name: "ShowMore (Root)", type: "div", description: "Expand state and measurement provider." },
      { name: "Content", type: "div", description: "Clamped text content." },
      { name: "Fade", type: "div", description: "Gradient overlay when collapsed." },
      { name: "Toggle", type: "button", description: "Expand/collapse button." },
    ],
    props: [
      { name: "maxLines", type: "number", required: true, description: "Maximum visible lines when collapsed." },
      { name: "isShowMore", type: "boolean", description: "Controlled expanded state." },
      { name: "setIsShowMore", type: "(v: boolean) => void", description: "Expanded state setter." },
    ],
    searchParamsVariant: {
      name: "ShowMoreWithSearchParams",
      props: [{ name: "openKey", type: "string", description: "URL param key." }, ...searchParamsProps],
    },
    sections: [
      {
        id: "demo",
        title: "Basic",
        preview: <ShowMoreDemo />,
        code: `<ShowMore maxLines={2}>
  <ShowMore.Content>{longText}</ShowMore.Content>
  <ShowMore.Fade className="h-8 bg-linear-to-t from-background" />
  <ShowMore.Toggle className="btn btn-link btn-primary">
    {(expanded) => expanded ? "Less" : "More"}
  </ShowMore.Toggle>
</ShowMore>`,
      },
    ],
  },

  spoiler: {
    slug: "spoiler",
    title: "Spoiler",
    description: "Inline click-to-reveal spoiler text.",
    overview: "Click the blurred content to reveal. Uses inline span root for text flow.",
    importCode: `import { Spoiler } from "@kadoui/react";`,
    parts: [
      { name: "Spoiler (Root)", type: "span", description: "Click-to-reveal state provider." },
      { name: "Blur", type: "span", description: "Blurred content with data-state styling." },
    ],
    props: [
      { name: "isOpen", type: "boolean", description: "Controlled open state." },
      { name: "setOpen", type: "(v: boolean) => void", description: "Open state setter." },
      { name: "defaultOpen", type: "boolean", description: "Initial open state." },
    ],
    sections: [
      {
        id: "demo",
        title: "Basic",
        preview: <SpoilerDemo />,
        code: `<Spoiler>
  <Spoiler.Blur className="data-[state=false]:blur-xs cursor-pointer">
    Hidden spoiler text
  </Spoiler.Blur>
</Spoiler>`,
      },
    ],
  },

  submit: {
    slug: "submit",
    title: "Submit",
    description: "Form submit button with React 19 pending state.",
    overview: "Uses useFormStatus to auto-disable and show loading UI during form submission.",
    importCode: `import { Submit } from "@kadoui/react";`,
    props: [
      { name: "children", type: "(isPending: boolean) => ReactNode", description: "Render prop for pending state." },
    ],
    sections: [
      {
        id: "demo",
        title: "With server action",
        preview: <SubmitDemo />,
        code: `<form action={serverAction}>
  <Submit className="btn btn-fill btn-primary">
    {(pending) => pending ? <LoaderIcon className="animate-spin" /> : "Submit"}
  </Submit>
</form>`,
      },
    ],
  },

  swap: {
    slug: "swap",
    title: "Swap",
    description: "Cycles through keyed states on click.",
    overview:
      "Renders only the button matching the active key. Clicking advances to the next key in the array.",
    importCode: `import { Swap, SwapWithSearchParams } from "@kadoui/react";`,
    parts: [
      { name: "Swap (Root)", type: "component", description: "Active key state provider." },
      { name: "Btn", type: "button", description: "Button for a specific key. Only active key renders." },
    ],
    props: [
      { name: "keys", type: "string[]", required: true, description: "Ordered keys to cycle through." },
      { name: "activeKey", type: "string", required: true, description: "Currently active key." },
      { name: "setActiveKey", type: "(key: string) => void", required: true, description: "Active key setter." },
    ],
    searchParamsVariant: {
      name: "SwapWithSearchParams",
      props: [
        { name: "activeKeyKey", type: "string", description: "URL param key." },
        { name: "defaultActiveKey", type: "string", description: "Initial key when param absent." },
        ...searchParamsProps,
      ],
    },
    sections: [
      {
        id: "demo",
        title: "Cycle views",
        preview: <SwapDemo />,
        code: `<Swap keys={["a","b","c"]} activeKey={key} setActiveKey={setKey}>
  {keys.map((k) => (
    <Swap.Btn key={k} btnKey={k} className="btn btn-fill btn-info">
      {(active) => \`View \${active.toUpperCase()}\`}
    </Swap.Btn>
  ))}
</Swap>`,
      },
    ],
  },
};

export const reactSlugs = Object.keys(reactDocs);
