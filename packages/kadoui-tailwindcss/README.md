# @kadoui/tailwindcss

<div align="center">

**A comprehensive Tailwind CSS utility system for building beautiful, accessible UIs**

[![npm version](https://img.shields.io/npm/v/@kadoui/tailwindcss.svg)](https://www.npmjs.com/package/@kadoui/tailwindcss)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

</div>

---

## Introduction

`@kadoui/tailwindcss` is a comprehensive Tailwind CSS utility system that provides a complete design system with components, utilities, and design tokens. It's designed to work seamlessly with `@kadoui/react` components but can be used independently with any framework.

### Key Features

- 🎨 **Complete Design System** - Pre-built components and utilities
- 🎯 **Consistent Spacing** - Unified spacing scale
- 🌓 **Dark Mode Support** - Built-in dark mode utilities
- 📱 **Responsive** - Mobile-first approach
- 🎭 **Customizable** - Easy to extend and customize
- ♿ **Accessible** - Built with accessibility in mind
- 🚀 **Tailwind CSS 4** - Uses latest Tailwind CSS features

---

## Installation

```bash
npm install @kadoui/tailwindcss tailwindcss
# or
pnpm add @kadoui/tailwindcss tailwindcss
# or
yarn add @kadoui/tailwindcss tailwindcss
```

### Peer Dependencies

- `tailwindcss` ^4.0.0
- `@tailwindcss/postcss` ^4.0.0 (for PostCSS)

---

## Quick Start

### 1. Import in your CSS

Create or update your main CSS file (e.g., `globals.css`):

```css
@import "tailwindcss";
@import "@kadoui/tailwindcss";
```

### 2. Configure Theme Variables

Set up your color system and design tokens:

```css
:root {
  /* Background colors */
  --background: #efefef;
  --background-thin: #ffffff;
  --background-thick: #dfdfdf;

  /* Foreground colors */
  --foreground: #151515;
  --foreground-thin: #303030;
  --foreground-thick: #000000;

  /* Semantic colors */
  --primary: #ff5e00;
  --primary-foreground: #ffffff;
  --secondary: #ab00c2;
  --secondary-foreground: #ffffff;
  --error: #ff0000;
  --error-foreground: #ffffff;
  --success: #00b600;
  --success-foreground: #ffffff;
  --warning: #ffd900;
  --warning-foreground: #ffffff;
  --info: #0000dd;
  --info-foreground: #ffffff;

  /* Palette system */
  --palette: var(--foreground);
  --brush: var(--background);

  /* Element sizing variables */
  --element-xs-h: calc(var(--spacing) * 6);
  --element-sm-h: calc(var(--spacing) * 8);
  --element-medium-h: calc(var(--spacing) * 10);
  --element-lg-h: calc(var(--spacing) * 12);
  --element-xl-h: calc(var(--spacing) * 14);

  --element-xs-spacing: calc(var(--spacing) * 1);
  --element-sm-spacing: calc(var(--spacing) * 1.5);
  --element-medium-spacing: calc(var(--spacing) * 3);
  --element-lg-spacing: calc(var(--spacing) * 6);
  --element-xl-spacing: calc(var(--spacing) * 9);

  /* Default element size */
  --element-h: var(--element-medium-h);
  --element-spacing: var(--element-medium-spacing);
  --element-text: var(--text-base);
  --element-leading: var(--text-base--line-height);
  --element-rounded: var(--radius-lg);
}

@theme {
  --color-background: var(--background);
  --color-background-thin: var(--background-thin);
  --color-background-thick: var(--background-thick);
  --color-foreground: var(--foreground);
  --color-foreground-thin: var(--foreground-thin);
  --color-foreground-thick: var(--foreground-thick);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-error: var(--error);
  --color-error-foreground: var(--error-foreground);
  --color-success: var(--success);
  --color-success-foreground: var(--success-foreground);
  --color-warning: var(--warning);
  --color-warning-foreground: var(--warning-foreground);
  --color-info: var(--info);
  --color-info-foreground: var(--info-foreground);

  --color-palette: var(--palette);
  --color-brush: var(--brush);
}

/* Dark mode */
[data-theme="dark"] {
  --background: #151515;
  --background-thin: #303030;
  --background-thick: #000000;
  --foreground: #efefef;
  --foreground-thin: #ffffff;
  --foreground-thick: #dfdfdf;
}

@custom-variant dark (&:where([data-theme=dark], [data-theme=dark] *));
```

### 3. PostCSS Configuration (Optional)

If you need PostCSS configuration:

```js
// postcss.config.js
import { kadouiPostcssConfig } from "@kadoui/tailwindcss/postcss";

export default kadouiPostcssConfig;
```

Or manually:

```js
// postcss.config.js
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
```

---

## Design System

### Spacing Scale

The design system uses a consistent spacing scale based on Tailwind's default spacing:

| Level | Value       | Usage                |
| ----- | ----------- | -------------------- |
| lvl-1 | `0.5` (2px) | Tight spacing, icons |
| lvl-2 | `1.5` (6px) | Small gaps           |
| lvl-3 | `3` (12px)  | Default spacing      |
| lvl-4 | `6` (24px)  | Large gaps           |
| lvl-5 | `9` (36px)  | Extra large gaps     |
| lvl-6 | `12` (48px) | Section spacing      |
| lvl-7 | `16` (64px) | Page sections        |
| lvl-8 | `20` (80px) | Major sections       |

### Breakpoints

| Breakpoint | Min Width | Description         |
| ---------- | --------- | ------------------- |
| `sm`       | 640px     | Mobile              |
| `md`       | 768px     | Tablet              |
| `lg`       | 1024px    | Desktop             |
| `xl`       | 1280px    | Large desktop       |
| `2xl`      | 1536px    | Extra large desktop |

**Recommended Usage:**

- `sm` - Mobile-first (default)
- `sm:` - Tablet and up
- `lg:` - Desktop and up

### Color System

#### Base Colors

- `background` - Main background color
- `background-thin` - Lighter background variant
- `background-thick` - Darker background variant
- `foreground` - Main text color
- `foreground-thin` - Lighter text variant
- `foreground-thick` - Darker text variant

#### Semantic Colors

- `primary` - Primary brand color
- `secondary` - Secondary brand color
- `error` - Error states
- `success` - Success states
- `warning` - Warning states
- `info` - Informational states

Each semantic color has a corresponding `-foreground` variant for text/icons.

#### Palette System

The palette system allows you to dynamically change colors using CSS variables:

- `--color-palette` - Main color (used for backgrounds, borders, etc.)
- `--color-brush` - Contrasting color (used for text, icons, etc.)

**Palette Utilities:**

```css
/* Set palette to background colors */
palette-background
palette-background-thin
palette-background-thick

/* Set palette to foreground colors */
palette-foreground
palette-foreground-thin
palette-foreground-thick

/* Set palette to semantic colors */
palette-primary
palette-secondary
palette-error
palette-success
palette-warning
palette-info
```

**Example:**

```html
<!-- Button uses foreground palette -->
<button class="btn btn-fill palette-foreground">Click me</button>

<!-- Button uses primary palette -->
<button class="btn btn-fill palette-primary">Primary</button>
```

### Element Sizing System

The element sizing system provides consistent sizing across components:

#### Size Variants

- `element-xs` - Extra small (6 × spacing)
- `element-sm` - Small (8 × spacing)
- `element-md` - Medium (10 × spacing) - **Default**
- `element-lg` - Large (12 × spacing)
- `element-xl` - Extra large (14 × spacing)

Each size variant sets:

- `--element-h` - Height
- `--element-spacing` - Padding/spacing
- `--element-text` - Font size
- `--element-leading` - Line height
- `--element-rounded` - Border radius

**Example:**

```html
<!-- Small button -->
<button class="btn btn-fill element-sm">Small</button>

<!-- Default button -->
<button class="btn btn-fill">Default</button>

<!-- Large button -->
<button class="btn btn-fill element-lg">Large</button>
```

#### Element Utilities

- `element-square-size` - Makes element square (width = height)
- `element-w-full` - Full width element
- `element-icon-size` - Icon size (half of element height)

**Example:**

```html
<!-- Square button -->
<button class="btn btn-fill element-square-size">
  <Icon />
</button>

<!-- Full width button -->
<button class="btn btn-fill element-w-full">Full Width</button>

<!-- Icon -->
<Icon class="element-icon-size" />
```

### Border Radius

| Level | Class         | Value              |
| ----- | ------------- | ------------------ |
| lvl-1 | `rounded`     | Small radius       |
| lvl-2 | `rounded-md`  | Medium radius      |
| lvl-3 | `rounded-lg`  | Large radius       |
| lvl-4 | `rounded-xl`  | Extra large radius |
| lvl-5 | `rounded-2xl` | 2XL radius         |

---

## Base Utilities

### Typography

#### Headings

```html
<h1 class="heading">Main Heading</h1>
```

**Recommended Pattern:**

```html
<h1 class="text-xl sm:text-2xl lg:text-5xl font-black">Responsive Heading</h1>
```

#### Titles

```html
<h2 class="title">Section Title</h2>
```

**Recommended Pattern:**

```html
<h2 class="text-base sm:text-lg lg:text-xl font-bold">Responsive Title</h2>
```

#### Paragraphs

**Recommended Pattern:**

```html
<p class="text-sm sm:text-base">Responsive paragraph text</p>
```

### Layout Utilities

#### Wrapper

Centered container with max-width:

```html
<div class="wrapper">
  <!-- Content -->
</div>
```

**Default:** `max-w-5xl` with horizontal padding

### General Utilities

#### Link

Styled link with hover underline:

```html
<a
  href="#"
  class="link"
  >Link text</a
>
```

#### Highlight

Highlight text with background:

```html
<span class="highlight">Highlighted text</span>
```

#### Ignore / Not-Ignore

Hide/show elements:

```html
<div class="ignore">Hidden</div>
<div class="not-ignore">Visible</div>
```

#### No Scrollbar

Hide scrollbar:

```html
<div class="no-scrollbar overflow-auto">Scrollable content</div>
```

#### Width Fix

```html
<div class="w-fix">Content with max-width</div>
```

---

## Component Styles

### Button

Buttons are the foundation of interactive elements.

#### Base Button

```html
<button class="btn">Button</button>
```

#### Button Variants

- `btn-fill` - Filled button (background + text)
- `btn-outline` - Outlined button (border + text)
- `btn-soft` - Soft button (subtle background)
- `btn-ghost` - Ghost button (text only, hover background)

**Examples:**

```html
<!-- Filled button -->
<button class="btn btn-fill">Primary</button>

<!-- Outlined button -->
<button class="btn btn-outline">Secondary</button>

<!-- Soft button -->
<button class="btn btn-soft">Tertiary</button>

<!-- Ghost button -->
<button class="btn btn-ghost">Minimal</button>
```

#### Button States

Buttons automatically handle:

- `disabled` - Reduced opacity, no pointer events
- `focus-visible` - Outline ring
- `active` - Reduced opacity
- `hover` - Background changes

**Example:**

```html
<button
  class="btn btn-fill"
  disabled>
  Disabled
</button>
```

#### Button Sizes

```html
<button class="btn btn-fill element-xs">Extra Small</button>
<button class="btn btn-fill element-sm">Small</button>
<button class="btn btn-fill">Default</button>
<button class="btn btn-fill element-lg">Large</button>
<button class="btn btn-fill element-xl">Extra Large</button>
```

#### Square Buttons

```html
<button class="btn btn-fill element-square-size">
  <Icon />
</button>
```

#### Full Width Buttons

```html
<button class="btn btn-fill element-w-full">Full Width</button>
```

#### Button with Data States

```html
<!-- Active state -->
<button class="btn data-[state=true]:btn-fill data-[state=false]:btn-soft">Toggle</button>
```

---

### Input

Inputs are built using `<label>` elements for better accessibility.

#### Base Input

```html
<label class="input">
  <input
    type="text"
    class="input-field"
    placeholder="Enter text" />
</label>
```

#### Input Variants

- `input-outline` - Outlined input (border)
- `input-soft` - Soft input (background)

**Examples:**

```html
<!-- Outlined input -->
<label class="input input-outline">
  <input
    type="text"
    class="input-field"
    placeholder="Outlined" />
</label>

<!-- Soft input -->
<label class="input input-soft">
  <input
    type="text"
    class="input-field"
    placeholder="Soft" />
</label>
```

#### Input with Icons

```html
<label class="input input-outline">
  <SearchIcon class="element-icon-size" />
  <input
    type="text"
    class="input-field"
    placeholder="Search" />
</label>
```

#### Input Sizes

```html
<label class="input input-outline element-xs">
  <input
    type="text"
    class="input-field"
    placeholder="XS" />
</label>

<label class="input input-outline element-sm">
  <input
    type="text"
    class="input-field"
    placeholder="SM" />
</label>

<label class="input input-outline">
  <input
    type="text"
    class="input-field"
    placeholder="Default" />
</label>
```

#### Textarea

```html
<label class="input input-outline">
  <textarea
    class="input-field"
    placeholder="Message"></textarea>
</label>
```

#### File Input

```html
<label class="input input-outline">
  <input
    type="file"
    class="input-field" />
</label>
```

---

### Card

Card component for content containers.

#### Base Card

```html
<div class="card">Card content</div>
```

#### Card Variants

- `card-menu` - Menu-style card (width: max-content)
- `card-y` - Vertical card (flex column with gap)
- `card-x` - Horizontal card (flex row with gap)

**Examples:**

```html
<!-- Basic card -->
<div class="card bg-background-thin">
  <p>Card content</p>
</div>

<!-- Menu card -->
<div class="card card-menu card-y">
  <button class="btn btn-ghost">Item 1</button>
  <button class="btn btn-ghost">Item 2</button>
</div>

<!-- Horizontal card -->
<div class="card card-x">
  <span>Left</span>
  <span>Right</span>
</div>
```

#### Card Sizes

Cards inherit element sizing:

```html
<div class="card element-sm">Small card</div>
<div class="card">Default card</div>
<div class="card element-lg">Large card</div>
```

---

### Badge

Badge component for labels and tags.

#### Base Badge

```html
<span class="badge">Badge</span>
```

#### Badge Variants

- `badge-fill` - Filled badge
- `badge-outline` - Outlined badge
- `badge-soft` - Soft badge

**Examples:**

```html
<span class="badge badge-fill">New</span>
<span class="badge badge-outline">Tag</span>
<span class="badge badge-soft">Label</span>
```

#### Badge Sizes

```html
<span class="badge badge-fill element-xs">XS</span>
<span class="badge badge-fill element-sm">SM</span>
<span class="badge badge-fill">Default</span>
```

---

### Alert

Alert component for notifications and messages.

#### Base Alert

```html
<div class="alert">Alert message</div>
```

**Example:**

```html
<div class="alert palette-error">
  <Icon />
  <span>Error message</span>
</div>
```

#### Alert with Palette

```html
<!-- Error alert -->
<div class="alert palette-error">Error occurred</div>

<!-- Success alert -->
<div class="alert palette-success">Operation successful</div>

<!-- Info alert -->
<div class="alert palette-info">Information message</div>
```

---

### KBD (Keyboard)

Display keyboard shortcuts.

#### Base KBD

```html
<kbd class="kbd">Ctrl</kbd>
```

**Example:**

```html
<kbd class="kbd">Ctrl</kbd> + <kbd class="kbd">K</kbd>
```

---

### Join

Join elements together seamlessly.

#### Base Join

```html
<div class="join">
  <button class="btn">One</button>
  <button class="btn">Two</button>
  <button class="btn">Three</button>
</div>
```

#### Join with Border

```html
<div class="join join-border">
  <button class="btn btn-outline">One</button>
  <button class="btn btn-outline">Two</button>
  <button class="btn btn-outline">Three</button>
</div>
```

#### Join Fix Border

Removes double borders:

```html
<div class="join join-border join-fix-border">
  <button class="btn btn-outline">One</button>
  <button class="btn btn-outline">Two</button>
</div>
```

**Note:** Join automatically handles RTL (right-to-left) layouts.

---

### Separator

Separate content with borders and spacing.

#### Separator Directions

- `separate-t` - Top separator
- `separate-r` - Right separator
- `separate-b` - Bottom separator
- `separate-l` - Left separator
- `separate-y` - Vertical separator (top + bottom)
- `separate-x` - Horizontal separator (left + right)

**Examples:**

```html
<!-- Bottom separator -->
<div class="separate-b">Content with bottom border and spacing</div>

<!-- Vertical separator -->
<div class="separate-y">Content with top and bottom borders</div>
```

---

### Position Utilities

Position elements relative to their container.

#### Individual Positions

**Top:**

- `top-center` - Center vertically, top edge
- `top-boundary` - Top boundary
- `top-out` - Outside top edge

**Right:**

- `right-center` - Center horizontally, right edge
- `right-boundary` - Right boundary
- `right-out` - Outside right edge

**Bottom:**

- `bottom-center` - Center vertically, bottom edge
- `bottom-boundary` - Bottom boundary
- `bottom-out` - Outside bottom edge

**Left:**

- `left-center` - Center horizontally, left edge
- `left-boundary` - Left boundary
- `left-out` - Outside left edge

**Center:**

- `inset-center` - Perfect center (top-center + left-center)

#### Compound Positions

- `position-t` - Top center
- `position-tr` - Top right
- `position-r` - Right center
- `position-br` - Bottom right
- `position-b` - Bottom center
- `position-bl` - Bottom left
- `position-l` - Left center
- `position-tl` - Top left

**Example:**

```html
<div class="relative">
  <div class="absolute position-b card">Popover content</div>
</div>
```

---

## Component-Specific Styles

### Accordion

```html
<div class="accordion-body">Accordion content</div>
```

---

### Modal

```html
<!-- Portal (backdrop) -->
<div class="modal-portal">
  <!-- Body -->
  <div class="modal-body">
    <!-- Header -->
    <div class="modal-header">Modal Title</div>
    <!-- Content -->
    <div class="modal-content">Modal content</div>
  </div>
</div>
```

---

### Drawer

```html
<!-- Portal (backdrop) -->
<div class="drawer-portal">
  <!-- Body -->
  <div class="drawer-body">Drawer content</div>
</div>
```

---

### Sheet

```html
<!-- Portal (backdrop) -->
<div class="sheet-portal">
  <!-- Body -->
  <div class="sheet-body">
    <!-- Header -->
    <div class="sheet-header">
      <div class="sheet-handlebar"></div>
    </div>
    <!-- Content -->
    <div class="sheet-content">Sheet content</div>
  </div>
</div>
```

---

### Popover

```html
<div class="popover">
  <button class="btn">Trigger</button>
  <div class="popover-body position-b card">Popover content</div>
</div>
```

**Position Classes:**

- `position-t` - Top
- `position-tr` - Top right
- `position-r` - Right
- `position-br` - Bottom right
- `position-b` - Bottom (default)
- `position-bl` - Bottom left
- `position-l` - Left
- `position-tl` - Top left

---

### Context Menu

```html
<div class="context-menu">
  <div class="context-menu-body card card-menu card-y">
    <button class="btn btn-ghost">Option 1</button>
    <button class="btn btn-ghost">Option 2</button>
  </div>
</div>
```

**With Navigation:**

```html
<div class="context-menu-navigation card card-menu card-y">
  <button class="btn btn-ghost">Item 1</button>
  <button class="btn btn-ghost">Item 2</button>
</div>
```

---

### SelectBox

```html
<div class="select-box-input input input-outline">
  <ChevronDownIcon />
  <input
    type="text"
    class="input-field"
    placeholder="Select..." />
  <div class="select-box-list card card-y">
    <div class="input input-outline">
      <SearchIcon />
      <input
        type="text"
        class="input-field" />
    </div>
    <button class="select-box-option btn">Option 1</button>
    <button class="select-box-option btn">Option 2</button>
  </div>
</div>
```

---

### Choice

Choice component for radio buttons, checkboxes, and switches.

#### Radio

```html
<div class="choice choice-radio">
  <span class="choice-radio-trigger"></span>
</div>
```

**Sizes:**

```html
<div class="choice choice-radio element-xs"></div>
<div class="choice choice-radio element-sm"></div>
<div class="choice choice-radio"></div>
<div class="choice choice-radio element-lg"></div>
<div class="choice choice-radio element-xl"></div>
```

#### Checkbox

```html
<div class="choice choice-checkbox">
  <span class="choice-checkbox-trigger">
    <CheckIcon />
  </span>
</div>
```

#### Switch

```html
<div class="choice choice-switch">
  <span class="choice-switch-trigger"></span>
</div>
```

**States:**

Use `data-state` attribute:

- `data-state="true"` - Active/checked
- `data-state="false"` - Inactive/unchecked

---

### Pagination

```html
<div class="pagination">
  <button class="btn">Prev</button>
  <button class="btn">1</button>
  <button class="btn">2</button>
  <button class="btn">Next</button>
</div>
```

---

### Progress

```html
<div class="progress">
  <div
    class="progress-bar"
    style="width: 45%">
    45%
  </div>
</div>
```

---

### Rating

```html
<div class="rating">
  <button class="rating-items">
    <StarIcon />
  </button>
</div>
```

---

### Carousel

```html
<div class="carousel">
  <!-- Fade overlays -->
  <div class="carousel-left-fade"></div>
  <div class="carousel-right-fade"></div>

  <!-- Container -->
  <div class="carousel-container">
    <div class="carousel-children card">Item 1</div>
    <div class="carousel-children card">Item 2</div>
  </div>
</div>
```

**Important:** Children must have `carousel-children` class for proper width calculation.

---

### Breadcrumbs

```html
<nav class="breadcrumbs">
  <div class="breadcrumbs-item">
    <a
      href="#"
      class="btn link"
      >Home</a
    >
  </div>
  <div class="breadcrumbs-item">
    <a
      href="#"
      class="btn link"
      >Articles</a
    >
  </div>
  <div class="breadcrumbs-item">
    <span class="btn btn-fill">Current</span>
  </div>
</nav>
```

---

### OTP

```html
<div class="otp">
  <input
    type="text"
    class="input input-outline input-square" />
  <input
    type="text"
    class="input input-outline input-square" />
  <input
    type="text"
    class="input input-outline input-square" />
</div>
```

---

### Show More

```html
<div class="relative">
  <div class="show-more-content">Long content here...</div>
  <div class="show-more-fade"></div>
  <button class="btn">Show more</button>
</div>
```

---

### Spoiler

```html
<span class="spoiler">
  <span class="spoiler-blur">Hidden text</span>
</span>
```

**States:**

- `data-state="false"` - Blurred (default)
- `data-state="true"` - Revealed

---

### Affix

```html
<button class="affix btn btn-fill">
  <ArrowUpIcon />
</button>
```

**States:**

- `data-state="false"` - Hidden
- `data-state="true"` - Visible

---

## Dark Mode

Dark mode is supported via the `[data-theme="dark"]` attribute.

### Setup

```css
[data-theme="dark"] {
  --background: #151515;
  --background-thin: #303030;
  --background-thick: #000000;
  --foreground: #efefef;
  --foreground-thin: #ffffff;
  --foreground-thick: #dfdfdf;
}

@custom-variant dark (&:where([data-theme=dark], [data-theme=dark] *));
```

### Usage

```html
<html data-theme="dark">
  <!-- Dark mode active -->
</html>
```

### Dark Mode Utilities

Use the `dark:` variant:

```html
<div class="bg-background dark:bg-background-thick">Content</div>
```

---

## Customization

### Adding Custom Colors

1. Define CSS variables:

```css
:root {
  --custom-color: #ff0000;
  --custom-color-foreground: #ffffff;
}

@theme {
  --color-custom-color: var(--custom-color);
  --color-custom-color-foreground: var(--custom-color-foreground);
}
```

2. Create palette utility:

```css
@utility palette-custom-color {
  --color-palette: var(--color-custom-color);
  --color-brush: var(--color-custom-color-foreground);
}
```

3. Use it:

```html
<button class="btn btn-fill palette-custom-color">Custom</button>
```

### Custom Element Sizes

```css
:root {
  --element-xxl-h: calc(var(--spacing) * 16);
  --element-xxl-spacing: calc(var(--spacing) * 12);
  --element-xxl-text: var(--text-2xl);
  --element-xxl-leading: var(--text-2xl--line-height);
  --element-xxl-rounded: var(--radius-2xl);
}

@utility element-xxl {
  --element-h: var(--element-xxl-h);
  --element-spacing: var(--element-xxl-spacing);
  --element-text: var(--element-xxl-text);
  --element-leading: var(--element-xxl-leading);
  --element-rounded: var(--element-xxl-rounded);
}
```

### Custom Utilities

```css
@utility my-custom-utility {
  @apply bg-palette text-brush p-4 rounded-lg;
}
```

---

## Best Practices

### 1. Use Element Sizing System

Always use element sizing utilities for consistency:

```html
<!-- ✅ Good -->
<button class="btn btn-fill element-sm">Small</button>

<!-- ❌ Avoid -->
<button class="btn btn-fill h-8 px-3 text-sm">Small</button>
```

### 2. Use Palette System

Use palette utilities for dynamic theming:

```html
<!-- ✅ Good -->
<button class="btn btn-fill palette-primary">Primary</button>

<!-- ❌ Avoid -->
<button class="btn bg-primary text-primary-foreground">Primary</button>
```

### 3. Responsive Typography

Use responsive text classes:

```html
<!-- ✅ Good -->
<h1 class="text-xl sm:text-2xl lg:text-5xl font-black">Heading</h1>

<!-- ❌ Avoid -->
<h1 class="text-5xl">Heading</h1>
```

### 4. Component Composition

Combine utilities for complex components:

```html
<!-- ✅ Good -->
<div class="card card-menu card-y bg-background-thin">
  <button class="btn btn-ghost">Item 1</button>
  <button class="btn btn-ghost">Item 2</button>
</div>
```

### 5. Data States

Use `data-state` for component states:

```html
<!-- ✅ Good -->
<button class="btn data-[state=true]:btn-fill data-[state=false]:btn-soft">Toggle</button>
```

---

## Integration with @kadoui/react

This package is designed to work seamlessly with `@kadoui/react`:

```tsx
import { Accordion } from "@kadoui/react";

<Accordion>
  <Accordion.Toggle className="btn btn-soft">Toggle</Accordion.Toggle>
  <Accordion.Body className="accordion-body">Content</Accordion.Body>
</Accordion>;
```

See [@kadoui/react documentation](https://www.npmjs.com/package/@kadoui/react) for component usage.

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
