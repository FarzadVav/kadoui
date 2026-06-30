"use client";

import { ArrowRightIcon, CheckIcon, SearchIcon, TrashIcon } from "lucide-react";
import { DemoLabel, Preview } from "@/components/docs/Preview";

export function ButtonVariantsDemo() {
  return (
    <Preview title="Variants">
      <button type="button" className="btn btn-fill">Btn Fill</button>
      <button type="button" className="btn btn-soft">Btn Soft</button>
      <button type="button" className="btn btn-ghost">Btn Ghost</button>
      <button type="button" className="btn btn-soft-outline">Btn Soft-Outline</button>
      <button type="button" className="btn btn-ghost-outline">Btn Ghost-Outline</button>
      <button type="button" className="btn btn-ghost btn-link">Btn Link</button>
    </Preview>
  );
}

export function ButtonColorsDemo() {
  return (
    <Preview title="Colors" layout="column">
      <div className="flex flex-wrap items-center gap-3">
        <button type="button" className="btn btn-fill">Click Me</button>
        <div className="p-1 bg-foreground">
          <button type="button" className="btn btn-fill btn-background">Click Me</button>
        </div>
        <button type="button" className="btn btn-fill btn-card">Click Me</button>
        <button type="button" className="btn btn-fill btn-primary">Click Me</button>
        <button type="button" className="btn btn-fill btn-secondary">Click Me</button>
        <button type="button" className="btn btn-fill btn-error">Click Me</button>
        <button type="button" className="btn btn-fill btn-success">Click Me</button>
        <button type="button" className="btn btn-fill btn-warning">Click Me</button>
        <button type="button" className="btn btn-fill btn-info">Click Me</button>
      </div>
    </Preview>
  );
}

export function ButtonSizesDemo() {
  return (
    <Preview title="Sizes" layout="column">
      <div className="flex flex-wrap items-center gap-3">
        <button type="button" className="btn btn-fill btn-xs">
          <span>Btn XS</span>
          <CheckIcon />
        </button>
        <button type="button" className="btn btn-fill btn-sm">
          <span>Btn SM</span>
          <CheckIcon />
        </button>
        <button type="button" className="btn btn-fill">
          <span>Btn MD</span>
          <CheckIcon />
        </button>
        <button type="button" className="btn btn-fill btn-rounded">
          <span>Btn Rounded</span>
          <CheckIcon />
        </button>
        <button type="button" className="btn btn-fill btn-square">SQ</button>
        <button type="button" className="btn btn-fill btn-lg">
          <span>Btn LG</span>
          <CheckIcon />
        </button>
        <button type="button" className="btn btn-fill btn-xl">
          <span>Btn XL</span>
          <CheckIcon />
        </button>
      </div>
      <button type="button" className="btn btn-fill btn-full">Btn Full</button>
      <button type="button" className="btn btn-fill btn-row">
        <span>Btn Row</span>
        <CheckIcon />
      </button>
    </Preview>
  );
}

export function InputVariantsDemo() {
  return (
    <Preview title="Variants" layout="column">
      <label className="input input-ghost">
        <SearchIcon />
        <input type="text" className="input-field" placeholder="Input Ghost..." />
        <button type="button" className="btn btn-ghost btn-in-input btn-square">Go</button>
      </label>
      <label className="input input-ghost-outline">
        <SearchIcon />
        <input type="text" className="input-field" placeholder="Input Ghost-Outline..." />
        <button type="button" className="btn btn-ghost btn-in-input btn-square">Go</button>
      </label>
      <label className="input input-soft">
        <SearchIcon />
        <input type="text" className="input-field" placeholder="Input Soft..." />
        <button type="button" className="btn btn-ghost btn-in-input btn-square">Go</button>
      </label>
      <label className="input input-soft-outline">
        <SearchIcon />
        <input type="text" className="input-field" placeholder="Input Soft-Outline..." />
        <button type="button" className="btn btn-ghost btn-in-input btn-square">Go</button>
      </label>
      <label className="input input-fill">
        <SearchIcon />
        <input type="text" className="input-field" placeholder="Input Fill..." />
        <button type="button" className="btn btn-ghost btn-in-input btn-square btn-background">Go</button>
      </label>
    </Preview>
  );
}

export function InputColorsDemo() {
  const items = [
    { inputClass: "", btnClass: "", label: "foreground", wrap: "" },
    { inputClass: "input-background", btnClass: "btn-background", label: "background", wrap: "bg-foreground p-3 rounded-lg" },
    { inputClass: "input-card", btnClass: "btn-card", label: "card", wrap: "" },
    { inputClass: "input-primary", btnClass: "btn-primary", label: "primary", wrap: "" },
    { inputClass: "input-secondary", btnClass: "btn-secondary", label: "secondary", wrap: "" },
    { inputClass: "input-error", btnClass: "btn-error", label: "error", wrap: "" },
    { inputClass: "input-success", btnClass: "btn-success", label: "success", wrap: "" },
    { inputClass: "input-warning", btnClass: "btn-warning", label: "warning", wrap: "" },
    { inputClass: "input-info", btnClass: "btn-info", label: "info", wrap: "" },
  ];

  return (
    <Preview title="Colors" layout="column">
      {items.map(({ inputClass, btnClass, label, wrap }) => {
        const input = (
          <label className={`input input-ghost-outline ${inputClass}`}>
            <SearchIcon />
            <input type="text" className="input-field" placeholder={`Input ${label}...`} />
            <button type="button" className={`btn btn-ghost btn-in-input btn-square ${btnClass}`}>
              Go
            </button>
          </label>
        );
        return wrap ? (
          <div key={label} className={wrap}>{input}</div>
        ) : (
          <div key={label}>{input}</div>
        );
      })}
    </Preview>
  );
}

export function InputSizesDemo() {
  return (
    <Preview title="Sizes" layout="column">
      <label className="input input-ghost-outline input-xs">
        <SearchIcon />
        <input type="text" className="input-field" placeholder="Input xs..." />
        <button type="button" className="btn btn-ghost btn-square btn-xs btn-in-input">Go</button>
      </label>
      <label className="input input-ghost-outline input-sm">
        <SearchIcon />
        <input type="text" className="input-field" placeholder="Input sm..." />
        <button type="button" className="btn btn-ghost btn-sm btn-in-input btn-square">Go</button>
      </label>
      <label className="input input-ghost-outline">
        <SearchIcon />
        <input type="text" className="input-field" placeholder="Input md..." />
        <button type="button" className="btn btn-ghost btn-in-input btn-square">Go</button>
      </label>
      <label className="input input-ghost-outline input-rounded">
        <SearchIcon />
        <input type="text" className="input-field" placeholder="Input rounded..." />
        <button type="button" className="btn btn-ghost btn-rounded btn-in-input btn-square">G</button>
      </label>
      <label className="input input-ghost-outline input-square backdrop-blur-md">
        <input type="text" placeholder="SQ" className="input-field" />
      </label>
      <label className="input input-ghost-outline input-lg">
        <SearchIcon />
        <input type="text" className="input-field" placeholder="Input lg..." />
        <button type="button" className="btn btn-ghost btn-lg btn-in-input btn-square">Go</button>
      </label>
      <label className="input input-ghost-outline input-xl">
        <SearchIcon />
        <input type="text" className="input-field" placeholder="Input xl..." />
        <button type="button" className="btn btn-ghost btn-xl btn-in-input btn-square">Go</button>
      </label>
    </Preview>
  );
}

export function CardDemo() {
  return (
    <Preview title="Variants & sizes" layout="column">
      <DemoLabel>Basic card</DemoLabel>
      <div className="card bg-card flex items-center justify-center max-w-60 min-h-40">
        Hello World
      </div>

      <DemoLabel>card-x</DemoLabel>
      <div className="card card-x bg-card">
        <button type="button" className="btn btn-ghost">Btn 1</button>
        <button type="button" className="btn btn-ghost">Btn 2</button>
        <button type="button" className="btn btn-ghost">Btn 3</button>
      </div>

      <DemoLabel>card-x card-fix-menu</DemoLabel>
      <div className="card card-x card-fix-menu bg-card">
        <button type="button" className="btn btn-ghost">Btn 1</button>
        <button type="button" className="btn btn-ghost">Btn 2</button>
        <button type="button" className="btn btn-ghost">Btn 3</button>
      </div>

      <DemoLabel>card-y</DemoLabel>
      <div className="card card-y bg-card max-w-60">
        <button type="button" className="btn btn-ghost btn-row">
          <span>Btn 1</span>
          <ArrowRightIcon />
        </button>
        <button type="button" className="btn btn-ghost btn-row">
          <span>Btn 2</span>
          <ArrowRightIcon />
        </button>
        <button type="button" className="btn btn-ghost btn-row">
          <span>Btn 3</span>
          <ArrowRightIcon />
        </button>
      </div>

      <DemoLabel>Sizes (card-xs → card-xl)</DemoLabel>
      {(["xs", "sm", "", "lg", "xl"] as const).map((size) => (
        <div
          key={size || "md"}
          className={`card card-x card-fix-menu bg-card ${size ? `card-${size}` : ""}`}
        >
          <button type="button" className={`btn btn-ghost ${size ? `btn-${size}` : ""}`}>Btn 1</button>
          <button type="button" className={`btn btn-ghost ${size ? `btn-${size}` : ""}`}>Btn 2</button>
          <button type="button" className={`btn btn-ghost ${size ? `btn-${size}` : ""}`}>Btn 3</button>
        </div>
      ))}
    </Preview>
  );
}

export function ShadowDemo() {
  const center = ["hover:shadow-xs", "hover:shadow-sm", "hover:shadow-md", "hover:shadow-lg", "hover:shadow-xl"];
  const top = ["hover:shadow-xs-t", "hover:shadow-sm-t", "hover:shadow-md-t", "hover:shadow-lg-t", "hover:shadow-xl-t"];
  const bottom = ["hover:shadow-xs-b", "hover:shadow-sm-b", "hover:shadow-md-b", "hover:shadow-lg-b", "hover:shadow-xl-b"];

  return (
    <Preview title="Shadow scale (hover to preview)" layout="column">
      <DemoLabel>Center</DemoLabel>
      <div className="flex flex-wrap gap-4">
        {center.map((cls) => (
          <div key={cls} className={`card w-24 aspect-square bg-card ${cls}`} />
        ))}
      </div>
      <DemoLabel>Top</DemoLabel>
      <div className="flex flex-wrap gap-4">
        {top.map((cls) => (
          <div key={cls} className={`card w-24 aspect-square bg-card ${cls}`} />
        ))}
      </div>
      <DemoLabel>Bottom</DemoLabel>
      <div className="flex flex-wrap gap-4">
        {bottom.map((cls) => (
          <div key={cls} className={`card w-24 aspect-square bg-card ${cls}`} />
        ))}
      </div>
    </Preview>
  );
}

export function GlassDemo() {
  const colors = [
    "background",
    "foreground",
    "card",
    "primary",
    "secondary",
    "error",
    "success",
    "warning",
    "info",
  ] as const;

  return (
    <Preview title="Glass color variants" layout="column">
      <div className="relative w-full overflow-hidden rounded-xl bg-linear-to-br from-primary/40 to-secondary/40 p-6">
        <div className="flex flex-wrap gap-3">
          {colors.map((color) => (
            <div key={color} className={`card card-sm glass glass-${color}`}>
              glass-{color}
            </div>
          ))}
        </div>
      </div>
    </Preview>
  );
}

export function JoinDemo() {
  return (
    <Preview title="Join utilities" layout="column">
      <DemoLabel>join-x — input + button</DemoLabel>
      <div className="join-x">
        <label className="input input-ghost-outline">
          <SearchIcon />
          <input type="text" className="input-field" />
        </label>
        <button type="button" className="btn btn-soft">Search</button>
      </div>

      <DemoLabel>join-x-border</DemoLabel>
      <div className="join-x join-x-border">
        {["One", "Two", "Three", "Four"].map((l) => (
          <button key={l} type="button" className="btn btn-ghost">{l}</button>
        ))}
      </div>

      <DemoLabel>join-x-no-border</DemoLabel>
      <div className="join-x join-x-no-border">
        <button type="button" className="btn btn-soft-outline">
          <TrashIcon className="text-error" />
        </button>
        <button type="button" className="btn btn-soft-outline">
          <SearchIcon />
        </button>
        <label className="input input-ghost-outline">
          <input type="text" className="input-field" />
        </label>
        <button type="button" className="btn btn-soft-outline">Search</button>
      </div>

      <DemoLabel>join-x-fix-border</DemoLabel>
      <div className="join-x join-x-fix-border">
        <button type="button" className="btn btn-soft-outline">
          <TrashIcon className="text-error" />
        </button>
        <button type="button" className="btn btn-soft-outline">
          <SearchIcon />
        </button>
        <label className="input input-ghost-outline">
          <input type="text" className="input-field" />
        </label>
        <button type="button" className="btn btn-soft-outline">Search</button>
      </div>

      <DemoLabel>join-y variants</DemoLabel>
      <div className="flex flex-wrap gap-6">
        <div className="join-y">
          <button type="button" className="btn btn-soft">Basic</button>
          <button type="button" className="btn btn-soft">Basic</button>
        </div>
        <div className="join-y join-y-border">
          <button type="button" className="btn btn-soft">Border</button>
          <button type="button" className="btn btn-soft">Border</button>
        </div>
        <div className="join-y join-y-no-border">
          <button type="button" className="btn btn-soft-outline">No border</button>
          <button type="button" className="btn btn-soft-outline">No border</button>
        </div>
        <div className="join-y join-y-fix-border">
          <button type="button" className="btn btn-soft-outline">Fix border</button>
          <button type="button" className="btn btn-soft-outline">Fix border</button>
        </div>
      </div>
    </Preview>
  );
}

export function SeparatorDemo() {
  const sizes = [
    { size: "separate-xs", label: "Xs" },
    { size: "separate-sm", label: "Sm" },
    { size: "", label: "Md" },
    { size: "separate-lg", label: "Lg" },
    { size: "separate-xl", label: "Xl" },
  ] as const;

  const directions = ["t", "r", "b", "l"] as const;

  return (
    <Preview title="Separator directions & sizes" layout="column">
      {sizes.map(({ size, label }) => (
        <div key={label}>
          <DemoLabel>{label}</DemoLabel>
          <div className="grid gap-2 sm:grid-cols-2">
            {directions.map((dir) => (
              <div
                key={dir}
                className={`bg-card separate separate-${dir} ${size} border-foreground/20 ${
                  label === "Xl"
                    ? dir === "t"
                      ? "border-dashed border-error"
                      : dir === "r"
                        ? "border-double border-success"
                        : dir === "b"
                          ? "border-dotted border-primary"
                          : "border-double border-secondary"
                    : "border-solid"
                }`}
              >
                Separate {dir}
              </div>
            ))}
          </div>
        </div>
      ))}
    </Preview>
  );
}

export function ChoiceCssDemo() {
  const sizes = ["xs", "sm", "", "lg", "xl"] as const;

  return (
    <Preview title="Choice control types & sizes" layout="column">
      <DemoLabel>Radio</DemoLabel>
      <div className="flex flex-wrap items-center gap-3">
        {sizes.map((size) => (
          <button
            key={`radio-${size || "md"}`}
            type="button"
            className={`choice choice-radio ${size ? `choice-${size}` : ""}`}
            data-state="true"
          >
            <span className="choice-radio-thumb" />
          </button>
        ))}
      </div>

      <DemoLabel>Checkbox</DemoLabel>
      <div className="flex flex-wrap items-center gap-3">
        {sizes.map((size) => (
          <button
            key={`checkbox-${size || "md"}`}
            type="button"
            className={`choice choice-checkbox ${size ? `choice-${size}` : ""}`}
            data-state="true"
          >
            <span className="choice-checkbox-thumb">
              <CheckIcon className="size-3" />
            </span>
          </button>
        ))}
      </div>

      <DemoLabel>Switch</DemoLabel>
      <div className="flex flex-wrap items-center gap-3">
        {sizes.map((size) => (
          <button
            key={`switch-${size || "md"}`}
            type="button"
            className={`choice choice-switch ${size ? `choice-${size}` : ""}`}
            data-state="true"
          >
            <span className="choice-switch-thumb" />
          </button>
        ))}
      </div>

      <DemoLabel>Colors</DemoLabel>
      <div className="flex flex-wrap gap-3">
        {(["primary", "secondary", "error", "success", "warning", "info"] as const).map((c) => (
          <button
            key={c}
            type="button"
            className={`choice choice-switch choice-${c}`}
            data-state="true"
          >
            <span className="choice-switch-thumb" />
          </button>
        ))}
      </div>
    </Preview>
  );
}
