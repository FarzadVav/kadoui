# @kadoui/react

<div align="center">

**Primitive, unstyled, and accessible React components built with modern patterns**

[![npm version](https://img.shields.io/npm/v/@kadoui/react.svg)](https://www.npmjs.com/package/@kadoui/react)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9+-blue.svg)](https://www.typescriptlang.org/)

</div>

---

## Introduction

`@kadoui/react` is a collection of primitive, unstyled React components that provide accessible, composable building blocks for your UI. These components are designed to be styled with your own CSS framework (we recommend [@kadoui/css](https://www.npmjs.com/package/@kadoui/css)) and follow modern React patterns.

### Key Features

- 🎨 **Unstyled & Composable** - Style components however you want
- ♿ **Accessible** - Built with accessibility in mind
- 🎯 **TypeScript** - Full TypeScript support with exported types
- 🚀 **Modern Patterns** - Uses React 19 features and best practices
- 📦 **Tree-shakeable** - Import only what you need
- 🎭 **Flexible** - Works with any styling solution

---

## Installation

```bash
npm install @kadoui/react
# or
pnpm add @kadoui/react
# or
yarn add @kadoui/react
```

### Peer Dependencies

```bash
npm install react react-dom
```

### Optional Dependencies

For animations, we use `framer-motion`:
```bash
npm install framer-motion
```

For icons, we recommend `lucide-react`:
```bash
npm install lucide-react
```

For styling, we recommend `@kadoui/css`:
```bash
npm install @kadoui/css
```

---

## Quick Start

```tsx
import { Accordion } from "@kadoui/react";
import { ChevronDownIcon } from "lucide-react";

function App() {
  return (
    <Accordion>
      <Accordion.Toggle className="btn">
        Toggle Accordion
        <ChevronDownIcon />
      </Accordion.Toggle>
      <Accordion.Body>
        <p>Accordion content goes here</p>
      </Accordion.Body>
    </Accordion>
  );
}
```

---

## Components

### AccessNavigation

Add keyboard navigation (arrow keys) to your UI elements.

**Props:**
- `direction: "x" | "y"` - Navigation direction
- `focusOnMount?: boolean` - Auto-focus first element on mount
- `dir?: "ltr" | "rtl"` - Text direction (defaults to document direction)

**Example:**

```tsx
import { AccessNavigation } from "@kadoui/react";

<AccessNavigation direction="x" className="join">
  <button className="btn">One</button>
  <button className="btn">Two</button>
  <button className="btn">Three</button>
</AccessNavigation>
```

**Vertical Navigation:**

```tsx
<AccessNavigation direction="y" className="flex flex-col gap-2">
  <button className="btn">Item 1</button>
  <button className="btn">Item 2</button>
  <button className="btn">Item 3</button>
</AccessNavigation>
```

---

### Accordion

A collapsible content component.

**Components:**
- `Accordion` (Root) - Wrapper component
- `Accordion.Toggle` - Button to toggle accordion
- `Accordion.Body` - Collapsible content

**Example:**

```tsx
import { Accordion } from "@kadoui/react";
import { ChevronDownIcon } from "lucide-react";

<Accordion>
  <Accordion.Toggle className="btn justify-between group">
    <span>Open accordion</span>
    <ChevronDownIcon className="transition-transform group-data-[state=true]:-scale-y-100" />
  </Accordion.Toggle>
  <Accordion.Body>
    <p className="p-3">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </p>
  </Accordion.Body>
</Accordion>
```

**API:**
- `Accordion` - Accepts `PropsWithChildren`
- `Accordion.Toggle` - Accepts `ComponentProps<"button"> & { icon?: ReactNode }`
- `Accordion.Body` - Accepts `HTMLMotionProps<"div">`

---

### Affix

A button that appears when scrolling down, typically used for "scroll to top" functionality.

**Props:**
- `AffixPropsT` - Extends `ComponentProps<"button">`

**Example:**

```tsx
import { Affix } from "@kadoui/react";
import { ArrowUpIcon } from "lucide-react";

<Affix className="btn btn-fill fixed bottom-4 right-4">
  <ArrowUpIcon />
</Affix>
```

The component automatically shows/hides based on scroll position and scrolls to top when clicked.

---

### Breadcrumbs

Display navigation hierarchy.

**Components:**
- `Breadcrumbs` (Root) - Requires `separator: ReactNode` prop
- `Breadcrumbs.Item` - Individual breadcrumb item

**Props:**
- `Breadcrumbs` - `ComponentProps<"nav"> & { separator: ReactNode }`
- `Breadcrumbs.Item` - `ComponentProps<"div"> & { isLastItem?: boolean }`

**Example:**

```tsx
import { Breadcrumbs } from "@kadoui/react";
import { ChevronRightIcon } from "lucide-react";

<Breadcrumbs separator={<ChevronRightIcon />} className="breadcrumbs">
  <Breadcrumbs.Item className="breadcrumbs-item">
    <button className="btn">Home</button>
  </Breadcrumbs.Item>
  <Breadcrumbs.Item className="breadcrumbs-item">
    <button className="btn">Articles</button>
  </Breadcrumbs.Item>
  <Breadcrumbs.Item isLastItem className="breadcrumbs-item">
    <button className="btn btn-fill">Current Page</button>
  </Breadcrumbs.Item>
</Breadcrumbs>
```

---

### Carousel

A horizontal scrolling carousel with fade effects and navigation buttons.

**Components:**
- `Carousel` (Root) - Accepts `mouseScroll?: "auto" | "swipe"`
- `Carousel.Container` - Scrollable container (children must have `carousel-children` class)
- `Carousel.LeftFade` - Left fade overlay
- `Carousel.RightFade` - Right fade overlay
- `Carousel.PrevBtn` - Previous button
- `Carousel.NextBtn` - Next button

**Props:**
- `Carousel` - `ComponentProps<"div"> & { mouseScroll?: "auto" | "swipe" }`
- `mouseScroll="auto"` - Smooth scrolling with mouse drag
- `mouseScroll="swipe"` - Snap to items on swipe

**Example:**

```tsx
import { Carousel } from "@kadoui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

<Carousel className="carousel" mouseScroll="auto">
  <Carousel.LeftFade className="carousel-left-fade" />
  <Carousel.RightFade className="carousel-right-fade" />

  <Carousel.Container className="carousel-container gap-3 scroll-smooth">
    {Array.from({ length: 12 }).map((_, index) => (
      <article key={index} className="carousel-children card">
        Card {index + 1}
      </article>
    ))}
  </Carousel.Container>

  <div className="flex items-center justify-center gap-3 mt-3">
    <Carousel.PrevBtn className="btn btn-outline btn-square">
      <ArrowLeftIcon />
    </Carousel.PrevBtn>
    <Carousel.NextBtn className="btn btn-outline btn-square">
      <ArrowRightIcon />
    </Carousel.NextBtn>
  </div>
</Carousel>
```

**Important:** Children inside `Carousel.Container` must have the `carousel-children` class for proper width calculation.

---

### Choice

A flexible component for radio buttons, checkboxes, filters, and switches.

**Components:**
- `Choice` (Root) - Manages choice state
- `Choice.Trigger` - Individual choice trigger
- `Choice.Navigation` - Optional keyboard navigation wrapper

**Props:**
- `Choice` - `ComponentProps<"div"> & ChoiceContextT`
  - `multiple?: boolean` - Enable multiple selection
  - `activeChoice: string | string[] | null` - Current selection
  - `setActiveChoice: Dispatch<SetStateAction<...>>` - State setter
  - `requiredOne?: boolean` - Prevent deselecting last item when `multiple` is true
- `Choice.Trigger` - `ComponentProps<"button"> & { choiceName: string }`

**Single Selection (Radio):**

```tsx
import { Choice } from "@kadoui/react";

const [choice, setChoice] = useState<string | null>("1");

<Choice activeChoice={choice} setActiveChoice={setChoice}>
  <Choice.Navigation direction="x" className="flex gap-3">
    <Choice.Trigger choiceName="1" className="btn">
      Option 1
    </Choice.Trigger>
    <Choice.Trigger choiceName="2" className="btn">
      Option 2
    </Choice.Trigger>
  </Choice.Navigation>
</Choice>
```

**Multiple Selection (Checkbox/Filter):**

```tsx
const [filters, setFilters] = useState<string[]>([]);

<Choice multiple activeChoice={filters} setActiveChoice={setFilters}>
  <Choice.Navigation direction="x" className="flex gap-3">
    <Choice.Trigger choiceName="filter1" className="btn">
      Filter 1
    </Choice.Trigger>
    <Choice.Trigger choiceName="filter2" className="btn">
      Filter 2
    </Choice.Trigger>
  </Choice.Navigation>
</Choice>
```

**Required One (Prevent Empty Selection):**

```tsx
<Choice 
  multiple 
  requiredOne 
  activeChoice={filters} 
  setActiveChoice={setFilters}
>
  {/* At least one item must always be selected */}
</Choice>
```

---

### ClientOnly

Render children only on the client side (useful for SSR).

**Props:**
- `ClientOnlyPropsT` - `PropsWithChildren`

**Example:**

```tsx
import { ClientOnly } from "@kadoui/react";

<p>This renders on server and client</p>
<ClientOnly>
  <p>This only renders on client</p>
</ClientOnly>
```

---

### Clipboard

Copy text to clipboard with visual feedback.

**Props:**
- `ClipboardPropsT` - `ComponentProps<"button"> & { text: string; timeout?: number; copiedChildren?: ReactNode }`
  - `text: string` - Text to copy
  - `timeout?: number` - Timeout for copied state (default: 3000ms)
  - `copiedChildren?: ReactNode` - Content to show when copied

**Example:**

```tsx
import { Clipboard } from "@kadoui/react";
import { CopyIcon, CopyCheckIcon } from "lucide-react";

<Clipboard
  text="Hello World"
  className="btn btn-soft"
  copiedChildren={<CopyCheckIcon />}
  timeout={2000}
>
  <CopyIcon />
</Clipboard>
```

---

### ContextMenu

Right-click context menu.

**Components:**
- `ContextMenu` (Root) - Wrapper (responds to right-click)
- `ContextMenu.Body` - Menu content
- `ContextMenu.Item` - Menu item
- `ContextMenu.Navigation` - Optional keyboard navigation

**Example:**

```tsx
import { ContextMenu } from "@kadoui/react";
import { TrashIcon, RefreshCwIcon } from "lucide-react";

<ContextMenu className="border-4 border-dashed h-[33vh]">
  <span>Right-click here!</span>

  <ContextMenu.Body className="context-menu-body">
    <ContextMenu.Navigation direction="y" className="card card-menu">
      <ContextMenu.Item className="btn btn-ghost">
        <TrashIcon />
        <span>Delete</span>
      </ContextMenu.Item>
      <ContextMenu.Item className="btn btn-ghost">
        <RefreshCwIcon />
        <span>Reload</span>
      </ContextMenu.Item>
    </ContextMenu.Navigation>
  </ContextMenu.Body>
</ContextMenu>
```

**API:**
- `ContextMenu` - `ComponentProps<"div">`
- `ContextMenu.Body` - `ComponentProps<"div">`
- `ContextMenu.Item` - `ComponentProps<"button">`
- `ContextMenu.Navigation` - `AccessNavigationPropsT`

---

### Drawer

Slide-out panel from any edge.

**Components:**
- `Drawer` (Root)
- `Drawer.Toggle` - Button to open drawer
- `Drawer.Portal` - Portal wrapper (required)
- `Drawer.Body` - Drawer content

**Props:**
- `Drawer` - `PropsWithChildren`
- `Drawer.Body` - `HTMLMotionProps<"div"> & { position?: "top" | "right" | "bottom" | "left" }`

**Example:**

```tsx
import { Drawer } from "@kadoui/react";

<Drawer>
  <Drawer.Toggle className="btn">Open Drawer</Drawer.Toggle>

  <Drawer.Portal className="drawer-portal">
    <Drawer.Body className="drawer-body" position="left">
      <p>Drawer content</p>
    </Drawer.Body>
  </Drawer.Portal>
</Drawer>
```

**Positions:**
- `position="left"` (default in LTR)
- `position="right"` (default in RTL)
- `position="top"`
- `position="bottom"`

**Focus Management:**
Add `data-drawer="focus"` to any focusable element to auto-focus when drawer opens:

```tsx
<Drawer.Body>
  <input type="text" data-drawer="focus" placeholder="Auto-focused input" />
</Drawer.Body>
```

---

### Modal

Centered modal dialog.

**Components:**
- `Modal` (Root) - Accepts `defaultOpen?: boolean`
- `Modal.Toggle` - Button to toggle modal
- `Modal.Portal` - Portal wrapper (required)
- `Modal.Body` - Modal container
- `Modal.Header` - Header section
- `Modal.Content` - Content section

**Example:**

```tsx
import { Modal } from "@kadoui/react";

<Modal defaultOpen={false}>
  <Modal.Toggle className="btn">Open Modal</Modal.Toggle>

  <Modal.Portal className="modal-portal">
    <Modal.Body className="modal-body">
      <Modal.Header className="modal-header">
        Modal Title
      </Modal.Header>
      <Modal.Content className="modal-content">
        <p>Modal content goes here</p>
      </Modal.Content>
    </Modal.Body>
  </Modal.Portal>
</Modal>
```

**Focus Management:**
Add `data-modal="focus"` to auto-focus when modal opens:

```tsx
<Modal.Content>
  <input type="text" data-modal="focus" />
</Modal.Content>
```

**API:**
- `Modal` - `PropsWithChildren & { defaultOpen?: boolean }`
- `Modal.Toggle` - `ComponentProps<"button">`
- `Modal.Portal` - `HTMLMotionProps<"div">`
- `Modal.Body` - `HTMLMotionProps<"div">`
- `Modal.Header` - `ComponentProps<"div">`
- `Modal.Content` - `ComponentProps<"div">`

---

### OTP (One-Time Password)

Input component for OTP codes with auto-advance and paste support.

**Components:**
- `Otp` (Root) - Accepts `autoFocus?: boolean`
- `Otp.Inputs` - Renders multiple inputs
- `Otp.HiddenInput` - Hidden input for form submission

**Props:**
- `Otp` - `Omit<AccessNavigationPropsT, "direction"> & { autoFocus?: boolean }`
- `Otp.Inputs` - `ComponentProps<"input"> & { length: number; onLastChange?: (otp: string) => void }`
- `Otp.HiddenInput` - `ComponentProps<"input">`

**Example:**

```tsx
import { Otp } from "@kadoui/react";

<Otp className="otp" autoFocus>
  <Otp.Inputs
    length={6}
    className="input input-outline input-square"
    onLastChange={(otp) => console.log("OTP:", otp)}
  />
  <Otp.HiddenInput name="otp" />
</Otp>
```

**Features:**
- Auto-advances to next input on typing
- Supports paste (pastes across all inputs)
- Backspace navigates to previous input
- `onLastChange` callback when all inputs are filled

---

### Pagination

Pagination component with two variants: state-based and URL search params-based.

**Variants:**
- `PaginationWithState` - Uses React state
- `PaginationWithSearchParams` - Uses URL search params (Next.js)

**Components:**
- `PaginationWithState` / `PaginationWithSearchParams` (Root)
- `.Pages` - Renders page content (when using `pages` prop)
- `.Counts` - Page number buttons
- `.PrevBtn` - Previous button
- `.NextBtn` - Next button

**Props:**
- Root: `PaginationPropsT` - `ComponentProps<"div"> & (PaginationWithLengthT | PaginationWithPagesT)`
  - `pagesLength: number` OR `pages: PaginationPagesT[]`
  - `PaginationWithState` also requires: `page: number; setPage: Dispatch<SetStateAction<number>>`
  - `PaginationWithSearchParams` accepts: `pageKey?: string` (default: "page")

**With State (Simple):**

```tsx
import { PaginationWithState } from "@kadoui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

const [page, setPage] = useState(1);

<PaginationWithState pagesLength={10} page={page} setPage={setPage}>
  <div className="pagination">
    <PaginationWithState.PrevBtn className="btn btn-square">
      <ChevronLeftIcon />
    </PaginationWithState.PrevBtn>
    <PaginationWithState.Counts className="btn" />
    <PaginationWithState.NextBtn className="btn btn-square">
      <ChevronRightIcon />
    </PaginationWithState.NextBtn>
  </div>
</PaginationWithState>
```

**With Search Params (Next.js):**

```tsx
import { PaginationWithSearchParams } from "@kadoui/react";
import { Suspense } from "react";

<Suspense>
  <PaginationWithSearchParams pagesLength={10} pageKey="p">
    <div className="pagination">
      <PaginationWithSearchParams.PrevBtn className="btn">
        Previous
      </PaginationWithSearchParams.PrevBtn>
      <PaginationWithSearchParams.Counts className="btn" />
      <PaginationWithSearchParams.NextBtn className="btn">
        Next
      </PaginationWithSearchParams.NextBtn>
    </div>
  </PaginationWithSearchParams>
</Suspense>
```

**With Custom Pages:**

```tsx
const pages = [
  {
    name: "Page 1",
    component: <div>Page 1 Content</div>
  },
  {
    name: "Page 2",
    component: <div>Page 2 Content</div>
  }
];

<PaginationWithState pages={pages} page={page} setPage={setPage}>
  <PaginationWithState.Pages />
  {/* Navigation buttons */}
</PaginationWithState>
```

---

### PasswordInput

Password input with visibility toggle.

**Components:**
- `PasswordInput` (Root)
- `PasswordInput.Field` - Input field
- `PasswordInput.Toggle` - Visibility toggle button

**Example:**

```tsx
import { PasswordInput } from "@kadoui/react";
import { EyeIcon, EyeClosedIcon } from "lucide-react";

<PasswordInput className="input input-outline">
  <PasswordInput.Field className="input-field" placeholder="Password" />
  <PasswordInput.Toggle
    className="btn btn-ghost btn-sm"
    visibleChildren={<EyeIcon />}
  >
    <EyeClosedIcon />
  </PasswordInput.Toggle>
</PasswordInput>
```

**API:**
- `PasswordInput` - `ComponentProps<"label">`
- `PasswordInput.Field` - `ComponentProps<"input">`
- `PasswordInput.Toggle` - `ComponentProps<"button"> & { visibleChildren: ReactNode }`

---

### Popover

Popover component with multiple trigger modes.

**Components:**
- `Popover` (Root) - Accepts `mode?: "click" | "hover" | "both"`
- `Popover.Toggle` - Trigger button
- `Popover.Body` - Popover content
- `Popover.Navigation` - Optional keyboard navigation

**Props:**
- `Popover` - `ComponentProps<"div"> & { mode?: "click" | "hover" | "both" }`
- `Popover.Body` - `ComponentProps<"div"> & { preventClose?: boolean }`

**Click Mode:**

```tsx
import { Popover } from "@kadoui/react";

<Popover mode="click" className="popover">
  <Popover.Toggle className="btn">Click me</Popover.Toggle>
  <Popover.Body className="popover-body card">
    Popover content
  </Popover.Body>
</Popover>
```

**Hover Mode:**

```tsx
<Popover mode="hover" className="popover">
  <Popover.Toggle className="btn">Hover me</Popover.Toggle>
  <Popover.Body className="popover-body card">
    Popover content
  </Popover.Body>
</Popover>
```

**Both Mode:**

```tsx
<Popover mode="both" className="popover">
  <Popover.Toggle className="btn">Hover or click</Popover.Toggle>
  <Popover.Body className="popover-body card">
    Popover content
  </Popover.Body>
</Popover>
```

**With Navigation:**

```tsx
<Popover mode="click">
  <Popover.Navigation direction="y">
    <Popover.Toggle className="btn">Menu</Popover.Toggle>
    <Popover.Body className="card card-menu">
      <button className="btn">Option 1</button>
      <button className="btn">Option 2</button>
    </Popover.Body>
  </Popover.Navigation>
</Popover>
```

**Nested Popovers:**

```tsx
<Popover mode="click">
  <Popover.Toggle>Parent</Popover.Toggle>
  <Popover.Body>
    <Popover mode="click">
      <Popover.Toggle>Child</Popover.Toggle>
      <Popover.Body>Nested content</Popover.Body>
    </Popover>
  </Popover.Body>
</Popover>
```

---

### Portal

Render children into a different DOM node.

**Props:**
- `PortalPropsT` - `PropsWithChildren & { container?: Element }`

**Example:**

```tsx
import { Portal } from "@kadoui/react";

<Portal container={document.getElementById("portal-root")}>
  <p>This renders in a different DOM node</p>
</Portal>
```

**Default Behavior:**
If no `container` is provided, children are rendered into `document.body`.

---

### Progress

Progress bar component.

**Components:**
- `Progress` (Root) - Requires `value: number; maxValue?: number`
- `Progress.Bar` - Progress bar element

**Props:**
- `Progress` - `ComponentProps<"div"> & { value: number; maxValue?: number }`
- `Progress.Bar` - `HTMLMotionProps<"div"> & { duration?: number }`

**Example:**

```tsx
import { Progress } from "@kadoui/react";

<Progress className="progress" value={45} maxValue={100}>
  <Progress.Bar className="progress-bar" duration={2} />
</Progress>
```

**With Custom Content:**

```tsx
<Progress value={75}>
  <Progress.Bar>
    <span>75%</span>
  </Progress.Bar>
</Progress>
```

---

### QrCode

Generate QR codes from text/URLs.

**Props:**
- `QrCodePropsT` - `ComponentProps<"canvas"> & { value: string; options?: QRCodeRenderersOptions }`

**Example:**

```tsx
import { QrCode } from "@kadoui/react";

<QrCode
  className="w-96 rounded-lg"
  value="https://github.com/FarzadVav"
  options={{ width: 384, margin: 2 }}
/>
```

**Options:**
See [qrcode library options](https://www.npmjs.com/package/qrcode#options) for available configuration.

---

### Rating

Star rating component with hover effects.

**Components:**
- `Rating` (Root)
- `Rating.Items` - Rating items

**Props:**
- `Rating` - `ComponentProps<"div">`
- `Rating.Items` - `ComponentProps<"button"> & { count: number; value: number; onValueChange: (value: number) => void; element: ReactNode; activeElement: ReactNode }`

**Example:**

```tsx
import { Rating } from "@kadoui/react";
import { StarIcon } from "lucide-react";
import { useState } from "react";

const [rating, setRating] = useState(3);

<Rating className="rating">
  <Rating.Items
    className="rating-items"
    count={5}
    value={rating}
    onValueChange={setRating}
    element={<StarIcon className="size-9" />}
    activeElement={<StarIcon className="fill-foreground size-9" />}
  />
</Rating>
```

---

### SelectBox

Advanced select component with search and multi-select support.

**Components:**
- `SelectBox` (Root) - Requires `options: SelectBoxOptionT[]` and selection state
- `SelectBox.Input` - Input wrapper
- `SelectBox.Field` - Display field
- `SelectBox.List` - Dropdown list
- `SelectBox.SearchInput` - Search input wrapper
- `SelectBox.SearchField` - Search input field
- `SelectBox.Options` - Option buttons

**Types:**
```tsx
type SelectBoxOptionT = { name: string; value: string };
```

**Single Select:**

```tsx
import { SelectBox, SelectBoxOptionT } from "@kadoui/react";
import { ChevronDownIcon, SearchIcon } from "lucide-react";
import { useState } from "react";

const options: SelectBoxOptionT[] = [
  { name: "one", value: "One" },
  { name: "two", value: "Two" },
  { name: "three", value: "Three" }
];

const [selected, setSelected] = useState<SelectBoxOptionT | null>(null);

<SelectBox 
  options={options} 
  optionValue={selected} 
  setOptionValue={setSelected}
>
  <SelectBox.Input className="select-box-input input">
    <ChevronDownIcon />
    <SelectBox.Field className="input-field" placeholder="Select..." />
    <SelectBox.List className="select-box-list">
      <SelectBox.SearchInput className="input">
        <SearchIcon />
        <SelectBox.SearchField className="input-field" />
      </SelectBox.SearchInput>
      <SelectBox.Options className="select-box-option btn" />
    </SelectBox.List>
  </SelectBox.Input>
</SelectBox>
```

**Multi Select:**

```tsx
const [selected, setSelected] = useState<SelectBoxOptionT[]>([]);

<SelectBox 
  multiSelect
  options={options} 
  optionValue={selected} 
  setOptionValue={setSelected}
>
  {/* Same structure as single select */}
</SelectBox>
```

**API:**
- `SelectBox` - `ComponentPropsWithoutRef<"div"> & MergedSelectMode & { options: SelectBoxOptionT[] }`
- `SelectBox.Field` - `ComponentProps<"input">`
- `SelectBox.SearchField` - `ComponentProps<"input">`
- `SelectBox.Options` - `ComponentProps<"button">`

---

### Sheet

Bottom sheet component (mobile-friendly drawer from bottom).

**Components:**
- `Sheet` (Root)
- `Sheet.Toggle` - Toggle button
- `Sheet.Portal` - Portal wrapper
- `Sheet.Body` - Sheet container
- `Sheet.Header` - Header section
- `Sheet.Handlebar` - Drag handle
- `Sheet.Content` - Scrollable content

**Example:**

```tsx
import { Sheet } from "@kadoui/react";

<Sheet>
  <Sheet.Toggle className="btn">Open Sheet</Sheet.Toggle>

  <Sheet.Portal className="sheet-portal">
    <Sheet.Body className="sheet-body">
      <Sheet.Header className="sheet-header">
        <Sheet.Handlebar className="sheet-handlebar" />
      </Sheet.Header>
      <Sheet.Content className="sheet-content">
        <p>Sheet content</p>
      </Sheet.Content>
    </Sheet.Body>
  </Sheet.Portal>
</Sheet>
```

**Features:**
- Drag to close (drag down)
- Auto-focus support with `data-sheet="focus"`
- Smooth animations

---

### ShowMore

Truncate text with "show more" functionality.

**Components:**
- `ShowMore` (Root) - Requires `maxLines: number; defaultExpanded?: boolean`
- `ShowMore.Content` - Content to truncate
- `ShowMore.Fade` - Fade overlay (shown when collapsed)
- `ShowMore.Toggle` - Toggle button

**Example:**

```tsx
import { ShowMore } from "@kadoui/react";

<ShowMore className="max-w-96" maxLines={3} defaultExpanded={false}>
  <ShowMore.Content>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
  </ShowMore.Content>
  <ShowMore.Fade className="show-more-fade" />
  <ShowMore.Toggle className="btn">Show more</ShowMore.Toggle>
</ShowMore>
```

**API:**
- `ShowMore` - `ComponentProps<"div"> & { maxLines: number; defaultExpanded?: boolean }`
- `ShowMore.Content` - `ComponentProps<"div">`
- `ShowMore.Fade` - `ComponentProps<"div">`
- `ShowMore.Toggle` - `ComponentProps<"button">`

---

### Spoiler

Click to reveal hidden text (useful for spoiler warnings).

**Components:**
- `Spoiler` (Root)
- `Spoiler.Blur` - Blurred/hidden content

**Example:**

```tsx
import { Spoiler } from "@kadoui/react";

<p>
  Lorem ipsum dolor sit{" "}
  <Spoiler className="spoiler">
    <Spoiler.Blur className="spoiler-blur">
      amet consectetur adipisicing
    </Spoiler.Blur>
  </Spoiler>{" "}
  elit.
</p>
```

**API:**
- `Spoiler` - `ComponentProps<"span">`
- `Spoiler.Blur` - `ComponentProps<"span">`

---

### Submit

Form submit button with loading state.

**Components:**
- `Submit` (Root) - Must be inside a `<form>` with `action`
- `Submit.Loader` - Loading indicator

**Example:**

```tsx
import { Submit } from "@kadoui/react";
import { SendHorizonalIcon, LoaderIcon } from "lucide-react";

<form action={async () => {
  await new Promise(resolve => setTimeout(resolve, 1000));
}}>
  <Submit className="btn">
    <span>Submit</span>
    <Submit.Loader loader={<LoaderIcon className="animate-spin" />}>
      <SendHorizonalIcon />
    </Submit.Loader>
  </Submit>
</form>
```

**Features:**
- Automatically disabled during form submission
- Uses React Server Actions (`useFormStatus`)
- Shows loader during pending state

**API:**
- `Submit` - `ComponentProps<"button"> & { loader?: ReactNode }`
- `Submit.Loader` - `PropsWithChildren & { loader: ReactNode }`

---

### Swap

Cycle through different states/content.

**Components:**
- `Swap` (Root) - Requires `keys: string[]; activeKey: string; setActiveKey: Dispatch<SetStateAction<string>>`
- `Swap.Btn` - Button that cycles through keys

**Example:**

```tsx
import { Swap } from "@kadoui/react";
import { useState } from "react";

const SWAP_KEYS = ["one", "two", "three"];
const [swapKey, setSwapKey] = useState(SWAP_KEYS[0]);

<Swap keys={SWAP_KEYS} activeKey={swapKey} setActiveKey={setSwapKey}>
  <Swap.Btn className="btn" btnKey={SWAP_KEYS[0]}>
    {SWAP_KEYS[0]}
  </Swap.Btn>
  <Swap.Btn className="btn" btnKey={SWAP_KEYS[1]}>
    {SWAP_KEYS[1]}
  </Swap.Btn>
  <Swap.Btn className="btn" btnKey={SWAP_KEYS[2]}>
    {SWAP_KEYS[2]}
  </Swap.Btn>
</Swap>
```

**Behavior:**
- Only the button matching `activeKey` is rendered
- Clicking cycles to the next key in the array
- Wraps around (last → first)

---

### Tabs

Tabbed interface component.

**Components:**
- `Tabs` (Root) - Requires `activeTab: string; setActiveTab: Dispatch<SetStateAction<string>>`
- `Tabs.List` - Tab list container
- `Tabs.Tab` - Individual tab button
- `Tabs.Panel` - Tab panel content

**Example:**

```tsx
import { Tabs } from "@kadoui/react";
import { useState } from "react";

const [activeTab, setActiveTab] = useState("1");

<Tabs activeTab={activeTab} setActiveTab={setActiveTab}>
  <Tabs.List className="tabs-list" direction="x">
    <Tabs.Tab value="1" className="btn">
      Tab 1
    </Tabs.Tab>
    <Tabs.Tab value="2" className="btn">
      Tab 2
    </Tabs.Tab>
  </Tabs.List>

  <Tabs.Panel value="1" className="tabs-panel">
    Content for Tab 1
  </Tabs.Panel>
  <Tabs.Panel value="2" className="tabs-panel">
    Content for Tab 2
  </Tabs.Panel>
</Tabs>
```

**With AccessNavigation:**

```tsx
import { AccessNavigation } from "@kadoui/react";

<Tabs activeTab={activeTab} setActiveTab={setActiveTab}>
  <AccessNavigation direction="x">
    <Tabs.List className="join">
      <Tabs.Tab value="1" className="btn">Tab 1</Tabs.Tab>
      <Tabs.Tab value="2" className="btn">Tab 2</Tabs.Tab>
    </Tabs.List>
  </AccessNavigation>
  {/* Panels */}
</Tabs>
```

**API:**
- `Tabs` - `PropsWithChildren & { activeTab: string; setActiveTab: Dispatch<SetStateAction<string>> }`
- `Tabs.List` - `AccessNavigationPropsT`
- `Tabs.Tab` - `ComponentProps<"button"> & { value: string }`
- `Tabs.Panel` - `ComponentProps<"div"> & { value: string }`

---

### Theme

Theme management with dark/light/system modes.

**Components & Hooks:**
- `ThemeProvider` - Context provider (wrap your app)
- `ThemeScript` - SSR script (add to `<head>`)
- `useTheme` - Hook to access theme

**Setup:**

1. Add script to your HTML `<head>`:

```tsx
import { ThemeScript } from "@kadoui/react";

<head>
  <ThemeScript />
</head>
```

2. Wrap your app with `ThemeProvider`:

```tsx
import { ThemeProvider } from "@kadoui/react";

function App() {
  return (
    <ThemeProvider>
      {/* Your app */}
    </ThemeProvider>
  );
}
```

3. Use the hook:

```tsx
import { useTheme } from "@kadoui/react";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <button onClick={() => setTheme("light")}>Light</button>
      <button onClick={() => setTheme("dark")}>Dark</button>
      <button onClick={() => setTheme("system")}>System</button>
    </div>
  );
}
```

**Types:**
```tsx
type ThemeT = "dark" | "light" | "system";
```

---

## Next.js Integration

### LinkLoader

Show loading state during Next.js Link navigation.

**Import:**
```tsx
import { LinkLoader } from "@kadoui/react/next";
```

**Example:**

```tsx
import Link from "next/link";
import { LinkLoader } from "@kadoui/react/next";
import { ArrowRightIcon, LoaderIcon } from "lucide-react";

<Link href="/page" className="btn">
  <span>Go to Page</span>
  <LinkLoader loader={<LoaderIcon className="animate-spin" />}>
    <ArrowRightIcon />
  </LinkLoader>
</Link>
```

---

## Utilities

Import utilities from `@kadoui/react/utils`:

```tsx
import { cn, getBrowserScrollbarWidth } from "@kadoui/react/utils";
```

**Available Utilities:**
- `cn` - Class name utility (clsx + tailwind-merge)
- `getBrowserScrollbarWidth` - Get browser scrollbar width
- Form utilities (see source for details)

---

## TypeScript

All components are fully typed. Import types as needed:

```tsx
import type { 
  SelectBoxOptionT,
  ModalRootPropsT,
  AccordionContextT 
} from "@kadoui/react";
```

---

## Styling

Components are unstyled by default. We recommend using [@kadoui/css](https://www.npmjs.com/package/@kadoui/css) for styling, but you can use any CSS solution:

- Tailwind CSS
- CSS Modules
- Styled Components
- Emotion
- Plain CSS

**Example with Tailwind:**

```tsx
<Accordion.Toggle className="flex items-center justify-between p-4 bg-gray-100 rounded-lg hover:bg-gray-200">
  Toggle
</Accordion.Toggle>
```

---

## Accessibility

All components follow accessibility best practices:

- Proper ARIA attributes
- Keyboard navigation support
- Focus management
- Screen reader friendly

---

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## License

MIT © [Farzad Vahdati](https://github.com/FarzadVav)

---

<div align="center">

Made with ❤️ by [Farzad Vahdati](https://github.com/FarzadVav)

</div>
