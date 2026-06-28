"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CopyCheckIcon,
  CopyIcon,
  EyeClosedIcon,
  EyeIcon,
  FlagIcon,
  LoaderIcon,
  RefreshCwIcon,
  SearchIcon,
  SendHorizonalIcon,
  StarIcon,
  TrashIcon,
} from "lucide-react";
import {
  AccessNavigation,
  AccordionWithSearchParams,
  AccordionWithState,
  Breadcrumbs,
  ChoiceWithSearchParams,
  ChoiceWithState,
  ClientOnly,
  Clipboard,
  ContextMenu,
  DrawerSheetWithSearchParams,
  DrawerSheetWithState,
  LinkLoader,
  ModalWithSearchParams,
  ModalWithState,
  Otp,
  PaginationWithSearchParams,
  PaginationWithState,
  PasswordInput,
  PopoverWithSearchParams,
  PopoverWithState,
  Portal,
  Progress,
  QrCode,
  Rating,
  SelectBoxOptionT,
  SelectBoxWithSearchParams,
  SelectBoxWithState,
  ShowMoreWithSearchParams,
  ShowMoreWithState,
  Spoiler,
  Submit,
  SwapWithSearchParams,
  SwapWithState,
  useTheme,
} from "../../../packages/kadoui-react/dist/components-exports";

const PAGES_WITH_STATE = [
  {
    name: "Hello world",
    component: (
      <p>
        One: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
        officiis quia, dolores similique, cumque ut vel aspernatur non vitae
        voluptas reiciendis? Veniam, voluptates impedit soluta blanditiis ad nam
        eligendi dignissimos.
      </p>
    ),
  },
  {
    name: "Finish",
    component: (
      <p>
        Two: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
        officiis quia, dolores similique, cumque ut vel aspernatur non vitae
        voluptas reiciendis? Veniam, voluptates impedit soluta blanditiis ad nam
        eligendi dignissimos.
      </p>
    ),
  },
];
const PAGES_WITH_SEARCHPARAMS = [
  {
    name: "Hello world",
    component: (
      <div>
        <p>
          One: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
          officiis quia, dolores similique, cumque ut vel aspernatur non vitae
          voluptas reiciendis? Veniam, voluptates impedit soluta blanditiis ad
          nam eligendi dignissimos.
        </p>
        <div className="flex items-center gap-3 mt-3">
          <PaginationWithSearchParams.NextBtn className="btn btn-soft">
            Next
          </PaginationWithSearchParams.NextBtn>
        </div>
      </div>
    ),
  },
  {
    name: "The Game",
    component: (
      <div>
        <p>
          Two: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
          officiis quia, dolores similique, cumque ut vel aspernatur non vitae
          voluptas reiciendis? Veniam, voluptates impedit soluta blanditiis ad
          nam eligendi dignissimos.
        </p>
        <div className="flex items-center gap-3 mt-3">
          <PaginationWithSearchParams.PrevBtn className="btn btn-soft">
            Prev
          </PaginationWithSearchParams.PrevBtn>
          <PaginationWithSearchParams.NextBtn className="btn btn-soft">
            Next
          </PaginationWithSearchParams.NextBtn>
        </div>
      </div>
    ),
  },
  {
    name: "Greating",
    component: (
      <div>
        <p>
          Three: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
          officiis quia, dolores similique, cumque ut vel aspernatur non vitae
          voluptas reiciendis? Veniam, voluptates impedit soluta blanditiis ad
          nam eligendi dignissimos.
        </p>
        <div className="flex items-center gap-3 mt-3">
          <PaginationWithSearchParams.PrevBtn className="btn btn-soft">
            Prev
          </PaginationWithSearchParams.PrevBtn>
          <PaginationWithSearchParams.NextBtn className="btn btn-soft">
            Next
          </PaginationWithSearchParams.NextBtn>
        </div>
      </div>
    ),
  },
  {
    name: "Finish",
    component: (
      <div>
        <p>
          Four: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
          officiis quia, dolores similique, cumque ut vel aspernatur non vitae
          voluptas reiciendis? Veniam, voluptates impedit soluta blanditiis ad
          nam eligendi dignissimos.
        </p>
        <div className="flex items-center gap-3 mt-3">
          <PaginationWithSearchParams.PrevBtn className="btn btn-soft">
            Prev
          </PaginationWithSearchParams.PrevBtn>
        </div>
      </div>
    ),
  },
];

const SELECT_BOX_OPTIONS: SelectBoxOptionT[] = [
  { name: "one", value: "One" },
  { name: "two", value: "Two" },
  { name: "three", value: "Three" },
  { name: "four", value: "Four" },
  { name: "five", value: "Five" },
  { name: "six", value: "Six" },
];

const SWAP_KEYS = ["one", "two", "three"];

function Page() {
  const searchParams = useSearchParams();
  const { theme, setTheme, resolvedTheme, systemTheme, mounted } = useTheme();

  const [accordionItems, setAccordionItems] = useState<string[]>([]);
  const [accordionItem, setAccordionItem] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [pageWithPage, setPageWithPage] = useState(1);
  const [rating, setRating] = useState(3);
  const [singleSelectBoxValue, singleSetSelectBoxValue] =
    useState<SelectBoxOptionT | null>(null);
  const [multiSelectBoxValue, setMultiSelectBoxValue] = useState<
    SelectBoxOptionT[]
  >([]);
  const [swapKey, setSwapKey] = useState(SWAP_KEYS[0] as string);

  const [filterChoice, setFilterChoice] = useState<string[]>([]);
  const [radioChoice, setRadioChoice] = useState<string | null>("1");
  const [checkboxChoice, setCheckboxChoice] = useState<string[]>(["1"]);
  const [switchChoice, setSwitchChoice] = useState<string[]>([]);

  return (
    <>
      <header className="h-20 sticky top-0 bg-background/10 backdrop-blur-md border-b border-background-thin z-40">
        <nav className="wrapper flex items-center justify-between h-full">
          <h1 className="title">KadoUI React + TailwindCSS</h1>

          <PopoverWithState mode="click" direction="y">
            <PopoverWithState.Toggle className="btn data-[state=false]:btn-soft data-[state=true]:btn-fill">
              Theme:{" "}
              {mounted ? (
                theme === "system" ? (
                  `system (${resolvedTheme ?? systemTheme})`
                ) : (
                  theme
                )
              ) : (
                <LoaderIcon className="size-5 animate-spin" />
              )}
            </PopoverWithState.Toggle>

            <PopoverWithState.Body
              className="card card-menu card-y glass"
              position="bottom-center"
            >
              <button
                className={`btn ${mounted && theme === "light" ? "btn-fill" : "btn-ghost"}`}
                disabled={!mounted}
                onClick={() => setTheme("light")}
              >
                Light
              </button>
              <button
                className={`btn ${mounted && theme === "dark" ? "btn-fill" : "btn-ghost"}`}
                disabled={!mounted}
                onClick={() => setTheme("dark")}
              >
                Dark
              </button>
              <button
                className={`btn ${mounted && theme === "system" ? "btn-fill" : "btn-ghost"}`}
                disabled={!mounted}
                onClick={() => setTheme("system")}
              >
                System
                {mounted && systemTheme ? ` (${systemTheme})` : null}
              </button>
            </PopoverWithState.Body>
          </PopoverWithState>
        </nav>
      </header>

      <div className="wrapper mt-40">
        <p className="heading text-primary">
          TailwindCSS <ChevronDownIcon className="inline size-12" />
        </p>
      </div>
      <div className="wrapper mt-20">
        <p className="heading">Buttons</p>
        <div>
          <p className="title mt-6">Variants</p>
          <div className="flex items-center gap-3 mt-3">
            <button className="btn btn-fill">Btn Fill</button>
            <button className="btn btn-soft">Btn Soft</button>
            <button className="btn btn-ghost">Btn Ghost</button>
            <button className="btn btn-soft-outline">Btn Soft-Outline</button>
            <button className="btn btn-ghost-outline">Btn Ghost-Outline</button>
            <button className="btn btn-ghost btn-link">Btn Link</button>
          </div>
        </div>
        <div>
          <p className="title mt-6">Colors</p>
          <div className="flex items-center gap-3 mt-3">
            <button className="btn btn-fill">Click Me</button>
            <div className="p-1 bg-foreground">
              <button className="btn btn-fill btn-background">Click Me</button>
            </div>
            <button className="btn btn-fill btn-card">Click Me</button>
            <button className="btn btn-fill btn-primary">Click Me</button>
            <button className="btn btn-fill btn-secondary">Click Me</button>
            <button className="btn btn-fill btn-error">Click Me</button>
            <button className="btn btn-fill btn-success">Click Me</button>
            <button className="btn btn-fill btn-warning">Click Me</button>
            <button className="btn btn-fill btn-info">Click Me</button>
          </div>
        </div>
        <div>
          <p className="title mt-6">Sizes</p>
          <div className="flex items-center gap-3 mt-3">
            <button className="btn btn-fill btn-xs">
              <span>Btn XS</span>
              <CheckIcon />
            </button>
            <button className="btn btn-fill btn-sm">
              <span>Btn SM</span>
              <CheckIcon />
            </button>
            <button className="btn btn-fill">
              <span>Btn MD</span>
              <CheckIcon />
            </button>
            <button className="btn btn-fill btn-rounded">
              <span>Btn Rounded</span>
              <CheckIcon />
            </button>
            <button className="btn btn-fill btn-square">SQ</button>
            <button className="btn btn-fill btn-lg">
              <span>Btn LG</span>
              <CheckIcon />
            </button>
            <button className="btn btn-fill btn-xl">
              <span>Btn XL</span>
              <CheckIcon />
            </button>
          </div>
          <button className="btn btn-fill btn-full mt-3">Btn Full</button>
          <button className="btn btn-fill btn-row mt-3">
            <span>Btn Row</span>
            <CheckIcon />
          </button>
        </div>
      </div>
      <div className="wrapper mt-20">
        <p className="heading">Inputs</p>
        <div>
          <p className="title mt-6">Variants</p>
          <div className="space-y-3 mt-3">
            <label className="input input-ghost">
              <SearchIcon />
              <input
                type="text"
                className="input-field"
                placeholder="Input Ghost..."
              />
              <button className="btn btn-ghost btn-in-input btn-square">
                Go
              </button>
            </label>
            <label className="input input-ghost-outline">
              <SearchIcon />
              <input
                type="text"
                className="input-field"
                placeholder="Input Ghost-Outline..."
              />
              <button className="btn btn-ghost btn-in-input btn-square">
                Go
              </button>
            </label>
            <label className="input input-soft">
              <SearchIcon />
              <input
                type="text"
                className="input-field"
                placeholder="Input Soft..."
              />
              <button className="btn btn-ghost btn-in-input btn-square">
                Go
              </button>
            </label>
            <label className="input input-soft-outline">
              <SearchIcon />
              <input
                type="text"
                className="input-field"
                placeholder="Input Soft-Outline..."
              />
              <button className="btn btn-ghost btn-in-input btn-square">
                Go
              </button>
            </label>
            <label className="input input-fill">
              <SearchIcon />
              <input
                type="text"
                className="input-field"
                placeholder="Input Soft-Outline..."
              />
              <button className="btn btn-ghost btn-in-input btn-square btn-background">
                Go
              </button>
            </label>
          </div>
        </div>
        <div>
          <p className="title mt-6">Colors</p>
          <div className="space-y-3 mt-3">
            <label className="input input-ghost-outline">
              <SearchIcon />
              <input
                type="text"
                className="input-field"
                placeholder="Input foreground..."
              />
              <button className="btn btn-ghost  btn-in-input btn-square">
                Go
              </button>
            </label>
            <div className="p-3 bg-foreground">
              <label className="input input-ghost-outline input-background">
                <SearchIcon />
                <input
                  type="text"
                  className="input-field"
                  placeholder="Input background..."
                />
                <button className="btn btn-ghost btn-background btn-in-input btn-square">
                  Go
                </button>
              </label>
            </div>
            <label className="input input-ghost-outline input-card">
              <SearchIcon />
              <input
                type="text"
                className="input-field"
                placeholder="Input card..."
              />
              <button className="btn btn-ghost btn-card btn-in-input btn-square">
                Go
              </button>
            </label>
            <label className="input input-ghost-outline input-primary">
              <SearchIcon />
              <input
                type="text"
                className="input-field"
                placeholder="Input primary..."
              />
              <button className="btn btn-ghost btn-primary btn-in-input btn-square">
                Go
              </button>
            </label>
            <label className="input input-ghost-outline input-secondary">
              <SearchIcon />
              <input
                type="text"
                className="input-field"
                placeholder="Input secondary..."
              />
              <button className="btn btn-ghost btn-secondary btn-in-input btn-square">
                Go
              </button>
            </label>
            <label className="input input-ghost-outline input-error">
              <SearchIcon />
              <input
                type="text"
                className="input-field"
                placeholder="Input error..."
              />
              <button className="btn btn-ghost btn-error btn-in-input btn-square">
                Go
              </button>
            </label>
            <label className="input input-ghost-outline input-success">
              <SearchIcon />
              <input
                type="text"
                className="input-field"
                placeholder="Input success..."
              />
              <button className="btn btn-ghost btn-success btn-in-input btn-square">
                Go
              </button>
            </label>
            <label className="input input-ghost-outline input-warning">
              <SearchIcon />
              <input
                type="text"
                className="input-field"
                placeholder="Input warning..."
              />
              <button className="btn btn-ghost btn-warning btn-in-input btn-square">
                Go
              </button>
            </label>
            <label className="input input-ghost-outline input-info">
              <SearchIcon />
              <input
                type="text"
                className="input-field"
                placeholder="Input info..."
              />
              <button className="btn btn-ghost btn-info btn-in-input btn-square">
                Go
              </button>
            </label>
          </div>
        </div>
        <div>
          <p className="title mt-6">Sizes</p>
          <div className="space-y-3 mt-3">
            <label className="input input-ghost-outline input-xs">
              <SearchIcon />
              <input
                type="text"
                className="input-field"
                placeholder="Input xs..."
              />
              <button className="btn btn-ghost btn-square btn-xs btn-in-input">
                Go
              </button>
            </label>
            <label className="input input-ghost-outline input-sm">
              <SearchIcon />
              <input
                type="text"
                className="input-field"
                placeholder="Input sm..."
              />
              <button className="btn btn-ghost btn-sm btn-in-input btn-square">
                Go
              </button>
            </label>
            <label className="input input-ghost-outline">
              <SearchIcon />
              <input
                type="text"
                className="input-field"
                placeholder="Input md..."
              />
              <button className="btn btn-ghost btn-in-input btn-square">
                Go
              </button>
            </label>
            <label className="input input-ghost-outline input-rounded">
              <SearchIcon />
              <input
                type="text"
                className="input-field"
                placeholder="Input rounded..."
              />
              <button className="btn btn-ghost btn-rounded btn-in-input btn-square">
                G
              </button>
            </label>
            <label className="input input-ghost-outline input-square">
              <input type="text" placeholder="SQ" className="input-field" />
            </label>
            <label className="input input-ghost-outline input-lg">
              <SearchIcon />
              <input
                type="text"
                className="input-field"
                placeholder="Input lg..."
              />
              <button className="btn btn-ghost btn-lg btn-in-input btn-square">
                Go
              </button>
            </label>
            <label className="input input-ghost-outline input-xl">
              <SearchIcon />
              <input
                type="text"
                className="input-field"
                placeholder="Input xl..."
              />
              <button className="btn btn-ghost btn-xl btn-in-input btn-square">
                Go
              </button>
            </label>
          </div>
        </div>
      </div>
      <div className="wrapper mt-20">
        <p className="heading">Cards</p>
        <div className="space-y-3">
          <p className="title mt-6">Variants</p>
          <div className="card bg-card flex items-center justify-center max-w-60 min-h-60">
            Hello World
          </div>
          <div className="card card-x bg-card">
            <button className="btn btn-ghost">Btn 1</button>
            <button className="btn btn-ghost">Btn 2</button>
            <button className="btn btn-ghost">Btn 3</button>
          </div>
          <div className="card card-x card-fix-menu bg-card">
            <button className="btn btn-ghost">Btn 1</button>
            <button className="btn btn-ghost">Btn 2</button>
            <button className="btn btn-ghost">Btn 3</button>
          </div>
          <div className="card card-y bg-card max-w-60">
            <button className="btn btn-ghost btn-row">
              <span>Btn 1</span>
              <ArrowRightIcon />
            </button>
            <button className="btn btn-ghost btn-row">
              <span>Btn 2</span>
              <ArrowRightIcon />
            </button>
            <button className="btn btn-ghost btn-row">
              <span>Btn 3</span>
              <ArrowRightIcon />
            </button>
          </div>
        </div>
        <div className="space-y-3">
          <p className="title mt-6">Sizes</p>
          <div className="card card-x card-fix-menu bg-card card-xs">
            <button className="btn btn-ghost btn-xs">Btn 1</button>
            <button className="btn btn-ghost btn-xs">Btn 2</button>
            <button className="btn btn-ghost btn-xs">Btn 3</button>
          </div>
          <div className="card card-x card-fix-menu bg-card card-sm">
            <button className="btn btn-ghost btn-sm">Btn 1</button>
            <button className="btn btn-ghost btn-sm">Btn 2</button>
            <button className="btn btn-ghost btn-sm">Btn 3</button>
          </div>
          <div className="card card-x card-fix-menu bg-card">
            <button className="btn btn-ghost">Btn 1</button>
            <button className="btn btn-ghost">Btn 2</button>
            <button className="btn btn-ghost">Btn 3</button>
          </div>
          <div className="card card-x card-fix-menu bg-card card-lg">
            <button className="btn btn-ghost btn-lg">Btn 1</button>
            <button className="btn btn-ghost btn-lg">Btn 2</button>
            <button className="btn btn-ghost btn-lg">Btn 3</button>
          </div>
          <div className="card card-x card-fix-menu bg-card card-xl">
            <button className="btn btn-ghost btn-xl">Btn 1</button>
            <button className="btn btn-ghost btn-xl">Btn 2</button>
            <button className="btn btn-ghost btn-xl">Btn 3</button>
          </div>
        </div>
      </div>
      <div className="wrapper mt-20">
        <p className="heading">Shadow</p>
        <div className="space-y-6">
          <p className="title mt-6">Center</p>
          <div className="card w-32 aspect-square bg-card hover:shadow-xs" />
          <div className="card w-32 aspect-square bg-card hover:shadow-sm" />
          <div className="card w-32 aspect-square bg-card hover:shadow-md" />
          <div className="card w-32 aspect-square bg-card hover:shadow-lg" />
          <div className="card w-32 aspect-square bg-card hover:shadow-xl" />
        </div>
        <div className="space-y-6">
          <p className="title mt-6">Top</p>
          <div className="card w-32 aspect-square bg-card hover:shadow-xs-t" />
          <div className="card w-32 aspect-square bg-card hover:shadow-sm-t" />
          <div className="card w-32 aspect-square bg-card hover:shadow-md-t" />
          <div className="card w-32 aspect-square bg-card hover:shadow-lg-t" />
          <div className="card w-32 aspect-square bg-card hover:shadow-xl-t" />
        </div>
        <div className="space-y-6">
          <p className="title mt-6">Bittom</p>
          <div className="card w-32 aspect-square bg-card hover:shadow-xs-b" />
          <div className="card w-32 aspect-square bg-card hover:shadow-sm-b" />
          <div className="card w-32 aspect-square bg-card hover:shadow-md-b" />
          <div className="card w-32 aspect-square bg-card hover:shadow-lg-b" />
          <div className="card w-32 aspect-square bg-card hover:shadow-xl-b" />
        </div>
      </div>
      <div className="wrapper mt-20">
        <p className="heading">Joins</p>
        <div className="space-y-6 mt-6">
          <div className="space-y-3">
            <p className="title">X Joins</p>
            <div className="mt-6 space-y-3">
              <p className="title mt-6">Basic</p>
              <div className="join-x">
                <label className="input input-ghost-outline">
                  <SearchIcon />
                  <input type="text" className="input-field" />
                </label>
                <button className="btn btn-soft">Search</button>
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <p className="title mt-6">Border</p>
              <div className="join-x join-x-border">
                <button className="btn btn-ghost">One</button>
                <button className="btn btn-ghost">Two</button>
                <button className="btn btn-ghost">Three</button>
                <button className="btn btn-ghost">Three</button>
                <button className="btn btn-ghost">Four</button>
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <p className="title mt-6">No Border</p>
              <div className="join-x join-x-no-border">
                <button className="btn btn-soft-outline">
                  <TrashIcon className="text-error" />
                </button>
                <button className="btn btn-soft-outline">
                  <SearchIcon />
                </button>
                <label className="input input-ghost-outline">
                  <input type="text" className="input-field" />
                </label>
                <button className="btn btn-soft-outline">Search</button>
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <p className="title mt-6">Fix Border</p>
              <div className="join-x join-x-fix-border">
                <button className="btn btn-soft-outline">
                  <TrashIcon className="text-error" />
                </button>
                <button className="btn btn-soft-outline">
                  <SearchIcon />
                </button>
                <label className="input input-ghost-outline">
                  <input type="text" className="input-field" />
                </label>
                <button className="btn btn-soft-outline">Search</button>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <p className="title">Y Joins</p>
            <div className="mt-6 space-y-3">
              <p className="title mt-6">Basic</p>
              <div className="join-y">
                <button className="btn btn-soft">Search</button>
                <button className="btn btn-soft">Search</button>
                <button className="btn btn-soft">Search</button>
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <p className="title mt-6">Border</p>
              <div className="join-y join-y-border">
                <button className="btn btn-soft">Search</button>
                <button className="btn btn-soft">Search</button>
                <button className="btn btn-soft">Search</button>
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <p className="title mt-6">No Border</p>
              <div className="join-y join-y-no-border">
                <button className="btn btn-soft-outline">Search</button>
                <button className="btn btn-soft-outline">Search</button>
                <button className="btn btn-soft-outline">Search</button>
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <p className="title mt-6">Fix Border</p>
              <div className="join-y join-y-fix-border">
                <button className="btn btn-soft-outline">Search</button>
                <button className="btn btn-soft-outline">Search</button>
                <button className="btn btn-soft-outline">Search</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper mt-20">
        <p className="heading">Separates</p>
        <div className="mt-6 space-y-3">
          <p className="title mt-6">Xs</p>
          <div className="bg-card separate separate-t separate-xs">
            Separate top
          </div>
          <div className="bg-card separate separate-r separate-xs">
            Separate right
          </div>
          <div className="bg-card separate separate-b separate-xs">
            Separate bottom
          </div>
          <div className="bg-card separate separate-l separate-xs">
            Separate left
          </div>
        </div>
        <div className="mt-6 space-y-3">
          <p className="title mt-6">Sm</p>
          <div className="bg-card separate separate-t separate-sm">
            Separate top
          </div>
          <div className="bg-card separate separate-r separate-sm">
            Separate right
          </div>
          <div className="bg-card separate separate-b separate-sm">
            Separate bottom
          </div>
          <div className="bg-card separate separate-l separate-sm">
            Separate left
          </div>
        </div>
        <div className="mt-6 space-y-3">
          <p className="title mt-6">Md</p>
          <div className="bg-card separate separate-t">Separate top</div>
          <div className="bg-card separate separate-r">Separate right</div>
          <div className="bg-card separate separate-b">Separate bottom</div>
          <div className="bg-card separate separate-l">Separate left</div>
        </div>
        <div className="mt-6 space-y-3">
          <p className="title mt-6">Lg</p>
          <div className="bg-card separate separate-t separate-lg">
            Separate top
          </div>
          <div className="bg-card separate separate-r separate-lg">
            Separate right
          </div>
          <div className="bg-card separate separate-b separate-lg">
            Separate bottom
          </div>
          <div className="bg-card separate separate-l separate-lg">
            Separate left
          </div>
        </div>
        <div className="mt-6 space-y-3">
          <p className="title mt-6">Xl</p>
          <div className="bg-card separate separate-t separate-xl border-dashed border-error">
            Separate top
          </div>
          <div className="bg-card separate separate-r separate-xl border-double border-success">
            Separate right
          </div>
          <div className="bg-card separate separate-b separate-xl border-dotted border-primary">
            Separate bottom
          </div>
          <div className="bg-card separate separate-l separate-xl border-double border-secondary">
            Separate left
          </div>
        </div>
      </div>

      {/* --- */}

      <div className="wrapper mt-40">
        <p className="heading text-primary">
          React <ChevronDownIcon className="inline size-12" />
        </p>
      </div>
      <div className="wrapper my-20">
        <div className="space-y-6">
          <div className="space-y-3">
            <p className="heading">X AccessNavigation</p>
            <AccessNavigation
              direction="x"
              className="join-x join-x-border mt-3"
            >
              <button className="acn btn btn-soft">One</button>
              <button className="acn btn btn-soft">Two</button>
              <button className="acn btn btn-soft">Three</button>
              <button className="acn btn btn-soft">Four</button>
            </AccessNavigation>
          </div>
          <div className="space-y-3">
            <p className="heading">Y AccessNavigation</p>
            <AccessNavigation
              direction="y"
              className="card card-y bg-card mt-3"
            >
              <button className="acn btn btn-soft btn-row">One</button>
              <button className="acn btn btn-soft btn-row">Two</button>
              <button className="acn btn btn-soft btn-row">Three</button>
              <button className="acn btn btn-soft btn-row">Four</button>
            </AccessNavigation>
          </div>
        </div>

        <p className="heading mt-20">Accordion</p>
        <p className="title mt-6">Multiple mode</p>
        <AccordionWithState
          multiple
          direction="y"
          accordionState={accordionItems}
          onAccordionChange={(newItems) => setAccordionItems(newItems)}
        >
          <AccordionWithState.Item itemName="1">
            <AccordionWithState.Toggle className="btn element-w-full data-[state=true]:btn-fill data-[state=false]:btn-soft justify-between mt-6 group">
              <span>Open accordion 1</span>
              <ChevronDownIcon className="transition-transform element-icon-size group-data-[state=true]:-scale-y-100" />
            </AccordionWithState.Toggle>
            <AccordionWithState.Body>
              <AccordionWithState.Content>
                <div className="card bg-card">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  fugit accusamus unde, repellendus dolores, fuga nam commodi
                  sapiente omnis voluptatum error earum culpa asperiores eaque
                  ea enim possimus vero esse!
                </div>
              </AccordionWithState.Content>
            </AccordionWithState.Body>
          </AccordionWithState.Item>
          <AccordionWithState.Item itemName="2">
            <AccordionWithState.Toggle className="btn element-w-full data-[state=true]:btn-fill data-[state=false]:btn-soft justify-between mt-6 group">
              <span>Open accordion 2</span>
              <ChevronDownIcon className="transition-transform element-icon-size group-data-[state=true]:-scale-y-100" />
            </AccordionWithState.Toggle>
            <AccordionWithState.Body>
              <AccordionWithState.Content>
                <div className="card bg-card">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  fugit accusamus unde, repellendus dolores, fuga nam commodi
                  sapiente omnis voluptatum error earum culpa asperiores eaque
                  ea enim possimus vero esse!
                </div>
              </AccordionWithState.Content>
            </AccordionWithState.Body>
          </AccordionWithState.Item>
          <AccordionWithState.Item itemName="3">
            <AccordionWithState.Toggle className="btn element-w-full data-[state=true]:btn-fill data-[state=false]:btn-soft justify-between mt-6 group">
              <span>Open accordion 3</span>
              <ChevronDownIcon className="transition-transform element-icon-size group-data-[state=true]:-scale-y-100" />
            </AccordionWithState.Toggle>
            <AccordionWithState.Body>
              <AccordionWithState.Content>
                <div className="card bg-card">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  fugit accusamus unde, repellendus dolores, fuga nam commodi
                  sapiente omnis voluptatum error earum culpa asperiores eaque
                  ea enim possimus vero esse!
                </div>
              </AccordionWithState.Content>
            </AccordionWithState.Body>
          </AccordionWithState.Item>
        </AccordionWithState>
        <p className="title mt-6">Single mode</p>
        <AccordionWithState
          direction="y"
          accordionState={accordionItem}
          onAccordionChange={(newItems) => setAccordionItem(newItems)}
        >
          <AccordionWithState.Item itemName="1">
            <AccordionWithState.Toggle className="btn element-w-full data-[state=true]:btn-fill data-[state=false]:btn-soft justify-between mt-6 group">
              <span>Open accordion 1</span>
              <ChevronDownIcon className="transition-transform element-icon-size group-data-[state=true]:-scale-y-100" />
            </AccordionWithState.Toggle>
            <AccordionWithState.Body>
              <AccordionWithState.Content>
                <div className="card bg-card">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  fugit accusamus unde, repellendus dolores, fuga nam commodi
                  sapiente omnis voluptatum error earum culpa asperiores eaque
                  ea enim possimus vero esse!
                </div>
              </AccordionWithState.Content>
            </AccordionWithState.Body>
          </AccordionWithState.Item>
          <AccordionWithState.Item itemName="2">
            <AccordionWithState.Toggle className="btn element-w-full data-[state=true]:btn-fill data-[state=false]:btn-soft justify-between mt-6 group">
              <span>Open accordion 2</span>
              <ChevronDownIcon className="transition-transform element-icon-size group-data-[state=true]:-scale-y-100" />
            </AccordionWithState.Toggle>
            <AccordionWithState.Body>
              <AccordionWithState.Content>
                <div className="card bg-card">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  fugit accusamus unde, repellendus dolores, fuga nam commodi
                  sapiente omnis voluptatum error earum culpa asperiores eaque
                  ea enim possimus vero esse!
                </div>
              </AccordionWithState.Content>
            </AccordionWithState.Body>
          </AccordionWithState.Item>
          <AccordionWithState.Item itemName="3">
            <AccordionWithState.Toggle className="btn element-w-full data-[state=true]:btn-fill data-[state=false]:btn-soft justify-between mt-6 group">
              <span>Open accordion 3</span>
              <ChevronDownIcon className="transition-transform element-icon-size group-data-[state=true]:-scale-y-100" />
            </AccordionWithState.Toggle>
            <AccordionWithState.Body>
              <AccordionWithState.Content>
                <div className="card bg-card">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  fugit accusamus unde, repellendus dolores, fuga nam commodi
                  sapiente omnis voluptatum error earum culpa asperiores eaque
                  ea enim possimus vero esse!
                </div>
              </AccordionWithState.Content>
            </AccordionWithState.Body>
          </AccordionWithState.Item>
        </AccordionWithState>

        <p id="accordion-with-search-params" className="title mt-6">
          With search params:
        </p>
        <Suspense>
          <AccordionWithSearchParams direction="y" accordionKey="accordion">
            <AccordionWithSearchParams.Item itemName="1">
              <AccordionWithSearchParams.Toggle className="btn element-w-full data-[state=true]:btn-fill data-[state=false]:btn-soft justify-between mt-6 group">
                <span>Search params accordion 1</span>
                <ChevronDownIcon className="transition-transform element-icon-size group-data-[state=true]:-scale-y-100" />
              </AccordionWithSearchParams.Toggle>
              <AccordionWithSearchParams.Body>
                <AccordionWithSearchParams.Content>
                  <div className="card bg-card">
                    Accordion state is synced with the `accordion` search param.
                  </div>
                </AccordionWithSearchParams.Content>
              </AccordionWithSearchParams.Body>
            </AccordionWithSearchParams.Item>
            <AccordionWithSearchParams.Item itemName="2">
              <AccordionWithSearchParams.Toggle className="btn element-w-full data-[state=true]:btn-fill data-[state=false]:btn-soft justify-between mt-6 group">
                <span>Search params accordion 2</span>
                <ChevronDownIcon className="transition-transform element-icon-size group-data-[state=true]:-scale-y-100" />
              </AccordionWithSearchParams.Toggle>
              <AccordionWithSearchParams.Body>
                <AccordionWithSearchParams.Content>
                  <div className="card bg-card">
                    Current value: {searchParams.get("accordion") || "none"}
                  </div>
                </AccordionWithSearchParams.Content>
              </AccordionWithSearchParams.Body>
            </AccordionWithSearchParams.Item>
          </AccordionWithSearchParams>
        </Suspense>

        <p className="heading mt-20">Breadcrumbs</p>
        <Breadcrumbs
          className="mt-3 btn-xs"
          separator={<ChevronRightIcon className="size-3" />}
        >
          <Breadcrumbs.Item>
            <button className="btn btn-ghost btn-link">Home</button>
          </Breadcrumbs.Item>
          <Breadcrumbs.Item>
            <button className="btn btn-ghost btn-link">Articles</button>
          </Breadcrumbs.Item>
          <Breadcrumbs.Item isLastItem>
            <button className="btn btn-fill">How to gain money?</button>
          </Breadcrumbs.Item>
        </Breadcrumbs>

        <p className="heading mt-20">ClientOnly</p>
        <p className="mt-6">There is server</p>
        <ClientOnly>
          <p className="mt-3">There is client</p>
        </ClientOnly>

        <p className="heading mt-20">Clipboard</p>
        <label htmlFor="copy" className="input input-soft mt-6">
          <input
            readOnly
            type="text"
            className="input-field"
            defaultValue={"Kadoui-react"}
          />
          <Clipboard
            text="Kadoui-react"
            copiedChildren={<CopyCheckIcon />}
            className="btn btn-ghost btn-square"
            onCopy={() => alert("Copied to clipboard!")}
          >
            <CopyIcon />
          </Clipboard>
        </label>

        <p className="heading mt-20">ContextMenu</p>
        <ContextMenu className="border-4 border-dashed border-foreground mt-6 h-[33vh]">
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            Context menu!
          </span>

          <ContextMenu.Body direction="y" className="card card-y glass">
            <ContextMenu.Item className="btn btn-ghost">
              <TrashIcon />
              <span>DELETE</span>
            </ContextMenu.Item>
            <ContextMenu.Item className="btn btn-ghost">
              <RefreshCwIcon />
              <span>RELOAD</span>
            </ContextMenu.Item>
            <ContextMenu.Item className="btn btn-ghost">
              <FlagIcon />
              <span>IGNORE IT</span>
            </ContextMenu.Item>
          </ContextMenu.Body>
        </ContextMenu>

        <p className="heading mt-20">DrawerSheet</p>

        <p className="mt-6 font-medium">Bottom</p>
        <DrawerSheetWithState>
          <DrawerSheetWithState.Toggle className="btn btn-soft mt-3">
            Bottom
          </DrawerSheetWithState.Toggle>
          <DrawerSheetWithState.Portal>
            <DrawerSheetWithState.Body>
              <DrawerSheetWithState.Indicator className="flex items-center gap-3 justify-center border-b border-foreground/10">
                DrawerSheet at bottom
              </DrawerSheetWithState.Indicator>
              <DrawerSheetWithState.Content>
                <label className="input input-ghost-outline">
                  <SearchIcon />
                  <input
                    type="text"
                    className="input-field"
                    placeholder="Search..."
                    data-drawer-sheet="focus"
                  />
                </label>
                <p className="mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </DrawerSheetWithState.Content>
              <DrawerSheetWithState.Indicator className="flex items-center gap-3 border-t border-foreground/10">
                <DrawerSheetWithState.Toggle className="btn btn-soft">
                  OK By
                </DrawerSheetWithState.Toggle>
                <DrawerSheetWithState.Toggle className="btn btn-ghost btn-error">
                  Close
                </DrawerSheetWithState.Toggle>
              </DrawerSheetWithState.Indicator>
            </DrawerSheetWithState.Body>
          </DrawerSheetWithState.Portal>
        </DrawerSheetWithState>
        <DrawerSheetWithState>
          <DrawerSheetWithState.Toggle className="btn btn-soft mt-3">
            Bottom with gesture
          </DrawerSheetWithState.Toggle>
          <DrawerSheetWithState.Portal>
            <DrawerSheetWithState.Body gesture>
              <DrawerSheetWithState.Indicator className="flex items-center gap-3 justify-center border-b border-foreground/10">
                DrawerSheet at bottom with gesture
              </DrawerSheetWithState.Indicator>
              <DrawerSheetWithState.Content>
                <label className="input input-ghost-outline">
                  <SearchIcon />
                  <input
                    type="text"
                    data-drawer-sheet="focus"
                    className="input-field"
                    placeholder="Search..."
                  />
                </label>
                <p className="mt-3 opacity-50">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <p className="mt-3">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Cupiditate voluptate corporis assumenda ratione consequatur
                  quaerat nihil obcaecati explicabo unde excepturi provident
                  enim sint sed labore animi nostrum, sit, dolorum eum numquam,
                  vel adipisci porro. Placeat quisquam impedit amet praesentium
                  minus suscipit soluta nam sapiente quis nihil pariatur, dicta
                  vel mollitia asperiores sit tempora dolore consequuntur
                  distinctio expedita ut recusandae quas labore error.
                  Obcaecati, debitis eveniet quidem at sint dolor fugiat ullam a
                  temporibus minus amet, quibusdam dolore iusto rerum. Neque
                  esse vitae ad ex voluptatem iure deserunt eos, vel quisquam
                  rerum porro beatae, quis eius et voluptas consequatur cumque
                  sint commodi. Impedit dolorum temporibus odit, incidunt
                  perspiciatis repudiandae. Libero impedit ea explicabo animi
                  aperiam? Id quam natus itaque iusto, consectetur unde illum
                  rerum recusandae ipsa omnis deleniti ipsam consequuntur ad
                  assumenda laudantium provident nulla, magnam veniam quaerat!
                  Rerum nostrum odio, aliquam est laboriosam molestiae quos,
                  eius quam perferendis earum ex quidem architecto optio
                  officiis velit? Sit ipsum nihil tempora perferendis voluptatem
                  omnis obcaecati, nobis sunt autem minus, repellendus, facere
                  velit non dolorem? Aut accusamus voluptatibus excepturi
                  possimus explicabo ad sed repudiandae dignissimos, sint quos
                  officiis cum, eum quae quidem, nesciunt reiciendis beatae.
                  Officiis quos voluptates neque aspernatur, tempore possimus
                  eum nostrum ad totam cumque adipisci eaque dignissimos quis
                  ratione ipsa sint recusandae. Nostrum nam maxime aut quis modi
                  quasi, enim, tenetur repudiandae itaque corrupti consequuntur
                  quisquam. Quam accusamus porro dolorem, eos aliquid sapiente?
                  Quidem, facilis laudantium! Nulla voluptatem architecto,
                  praesentium unde explicabo cum molestiae tempore error
                  voluptate ex enim non distinctio quisquam iure incidunt quos
                  fuga saepe autem quaerat commodi itaque? Dolores voluptatum
                  voluptate, tempora commodi dicta eaque quod veritatis rem
                  necessitatibus totam recusandae consequuntur! Maxime numquam
                  amet sint molestiae aliquid eligendi fuga est autem,
                  temporibus quas voluptatibus exercitationem voluptatum veniam
                  ea consectetur ex ipsa animi tenetur neque dolorem
                  dignissimos? Nobis iure doloribus officia perspiciatis unde
                  possimus! Facilis ullam animi iusto nesciunt odit temporibus.
                  Recusandae quibusdam odio atque quasi laudantium! Aliquam nemo
                  asperiores sint optio perferendis ullam, nulla laborum iusto.
                  Provident aut ea rem maiores ratione laborum placeat,
                  necessitatibus optio quod vero sequi deserunt odio amet dicta
                  quae. Perspiciatis ducimus, deleniti ratione ipsa
                  necessitatibus quod quos in reprehenderit eum alias nulla
                  temporibus iure maiores, fuga quis? Corrupti excepturi
                  asperiores, eligendi velit magni blanditiis amet officiis
                  optio inventore id officia itaque, autem dolorum eaque facilis
                  suscipit assumenda quisquam? In aliquam rerum earum. Ullam
                  praesentium culpa sed veritatis necessitatibus molestias
                  doloremque dignissimos ut, ducimus exercitationem unde eos
                  velit hic nihil assumenda quod, vero magnam officia!
                  Repellendus accusantium ipsum iure non praesentium
                  exercitationem labore ex velit voluptas at assumenda inventore
                  deserunt a amet, ducimus eius provident aut quasi quibusdam
                  facilis ullam neque sit. Consequatur vero, dolores enim
                  provident dignissimos voluptatem fugiat delectus est velit
                  saepe natus aperiam deserunt laboriosam commodi voluptas
                  minima doloribus molestias ad ut debitis asperiores. Totam
                  nisi commodi optio veniam illum culpa ullam aliquam doloremque
                  sit repudiandae, rerum, facilis alias? Corporis quasi
                  cupiditate dolores quibusdam dicta quaerat ipsum assumenda
                  illum, iste doloremque, cum tenetur. Dolorum eveniet molestias
                  veritatis possimus obcaecati?
                </p>
              </DrawerSheetWithState.Content>
              <DrawerSheetWithState.Indicator className="flex items-center gap-3 border-t border-foreground/10">
                <DrawerSheetWithState.Toggle className="btn btn-soft">
                  OK By
                </DrawerSheetWithState.Toggle>
                <DrawerSheetWithState.Toggle className="btn btn-ghost btn-error">
                  Close
                </DrawerSheetWithState.Toggle>
              </DrawerSheetWithState.Indicator>
            </DrawerSheetWithState.Body>
          </DrawerSheetWithState.Portal>
        </DrawerSheetWithState>
        <DrawerSheetWithState>
          <DrawerSheetWithState.Toggle className="btn btn-soft mt-3">
            Bottom with offset
          </DrawerSheetWithState.Toggle>
          <DrawerSheetWithState.Portal>
            <DrawerSheetWithState.Body offset={20} gesture>
              <DrawerSheetWithState.Indicator className="flex items-center gap-3 justify-center border-b border-foreground/10 rounded-t-2xl">
                DrawerSheet at bottom with offset
              </DrawerSheetWithState.Indicator>
              <DrawerSheetWithState.Content>
                <label className="input input-ghost-outline">
                  <SearchIcon />
                  <input
                    type="text"
                    className="input-field"
                    placeholder="Search..."
                    data-drawer-sheet="focus"
                  />
                </label>
                <p className="mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </DrawerSheetWithState.Content>
              <DrawerSheetWithState.Indicator className="flex items-center gap-3 border-t border-foreground/10 rounded-b-2xl">
                <DrawerSheetWithState.Toggle className="btn btn-soft">
                  OK By
                </DrawerSheetWithState.Toggle>
                <DrawerSheetWithState.Toggle className="btn btn-ghost btn-error">
                  Close
                </DrawerSheetWithState.Toggle>
              </DrawerSheetWithState.Indicator>
            </DrawerSheetWithState.Body>
          </DrawerSheetWithState.Portal>
        </DrawerSheetWithState>

        <p className="mt-6 font-medium">Top</p>
        <DrawerSheetWithState>
          <DrawerSheetWithState.Toggle className="btn btn-soft mt-3">
            Top
          </DrawerSheetWithState.Toggle>
          <DrawerSheetWithState.Portal>
            <DrawerSheetWithState.Body position="top">
              <DrawerSheetWithState.Indicator className="flex items-center gap-3 justify-center border-b border-foreground/10">
                DrawerSheet at top
              </DrawerSheetWithState.Indicator>
              <DrawerSheetWithState.Content>
                <label className="input input-ghost-outline">
                  <SearchIcon />
                  <input
                    type="text"
                    className="input-field"
                    placeholder="Search..."
                    data-drawer-sheet="focus"
                  />
                </label>
                <p className="mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </DrawerSheetWithState.Content>
              <DrawerSheetWithState.Indicator className="flex items-center gap-3 border-t border-foreground/10">
                <DrawerSheetWithState.Toggle className="btn btn-soft">
                  OK By
                </DrawerSheetWithState.Toggle>
                <DrawerSheetWithState.Toggle className="btn btn-ghost btn-error">
                  Close
                </DrawerSheetWithState.Toggle>
              </DrawerSheetWithState.Indicator>
            </DrawerSheetWithState.Body>
          </DrawerSheetWithState.Portal>
        </DrawerSheetWithState>
        <DrawerSheetWithState>
          <DrawerSheetWithState.Toggle className="btn btn-soft mt-3">
            Top with gesture
          </DrawerSheetWithState.Toggle>
          <DrawerSheetWithState.Portal>
            <DrawerSheetWithState.Body position="top" gesture>
              <DrawerSheetWithState.Indicator className="flex items-center gap-3 justify-center border-b border-foreground/10">
                DrawerSheet at top with gesture
              </DrawerSheetWithState.Indicator>
              <DrawerSheetWithState.Content>
                <label className="input input-ghost-outline">
                  <SearchIcon />
                  <input
                    type="text"
                    data-drawer-sheet="focus"
                    className="input-field"
                    placeholder="Search..."
                  />
                </label>
                <p className="mt-3 opacity-50">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <p className="mt-3">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Cupiditate voluptate corporis assumenda ratione consequatur
                  quaerat nihil obcaecati explicabo unde excepturi provident
                  enim sint sed labore animi nostrum, sit, dolorum eum numquam,
                  vel adipisci porro. Placeat quisquam impedit amet praesentium
                  minus suscipit soluta nam sapiente quis nihil pariatur, dicta
                  vel mollitia asperiores sit tempora dolore consequuntur
                  distinctio expedita ut recusandae quas labore error.
                  Obcaecati, debitis eveniet quidem at sint dolor fugiat ullam a
                  temporibus minus amet, quibusdam dolore iusto rerum. Neque
                  esse vitae ad ex voluptatem iure deserunt eos, vel quisquam
                  rerum porro beatae, quis eius et voluptas consequatur cumque
                  sint commodi. Impedit dolorum temporibus odit, incidunt
                  perspiciatis repudiandae. Libero impedit ea explicabo animi
                  aperiam? Id quam natus itaque iusto, consectetur unde illum
                  rerum recusandae ipsa omnis deleniti ipsam consequuntur ad
                  assumenda laudantium provident nulla, magnam veniam quaerat!
                  Rerum nostrum odio, aliquam est laboriosam molestiae quos,
                  eius quam perferendis earum ex quidem architecto optio
                  officiis velit? Sit ipsum nihil tempora perferendis voluptatem
                  omnis obcaecati, nobis sunt autem minus, repellendus, facere
                  velit non dolorem? Aut accusamus voluptatibus excepturi
                  possimus explicabo ad sed repudiandae dignissimos, sint quos
                  officiis cum, eum quae quidem, nesciunt reiciendis beatae.
                  Officiis quos voluptates neque aspernatur, tempore possimus
                  eum nostrum ad totam cumque adipisci eaque dignissimos quis
                  ratione ipsa sint recusandae. Nostrum nam maxime aut quis modi
                  quasi, enim, tenetur repudiandae itaque corrupti consequuntur
                  quisquam. Quam accusamus porro dolorem, eos aliquid sapiente?
                  Quidem, facilis laudantium! Nulla voluptatem architecto,
                  praesentium unde explicabo cum molestiae tempore error
                  voluptate ex enim non distinctio quisquam iure incidunt quos
                  fuga saepe autem quaerat commodi itaque? Dolores voluptatum
                  voluptate, tempora commodi dicta eaque quod veritatis rem
                  necessitatibus totam recusandae consequuntur! Maxime numquam
                  amet sint molestiae aliquid eligendi fuga est autem,
                  temporibus quas voluptatibus exercitationem voluptatum veniam
                  ea consectetur ex ipsa animi tenetur neque dolorem
                  dignissimos? Nobis iure doloribus officia perspiciatis unde
                  possimus! Facilis ullam animi iusto nesciunt odit temporibus.
                  Recusandae quibusdam odio atque quasi laudantium! Aliquam nemo
                  asperiores sint optio perferendis ullam, nulla laborum iusto.
                  Provident aut ea rem maiores ratione laborum placeat,
                  necessitatibus optio quod vero sequi deserunt odio amet dicta
                  quae. Perspiciatis ducimus, deleniti ratione ipsa
                  necessitatibus quod quos in reprehenderit eum alias nulla
                  temporibus iure maiores, fuga quis? Corrupti excepturi
                  asperiores, eligendi velit magni blanditiis amet officiis
                  optio inventore id officia itaque, autem dolorum eaque facilis
                  suscipit assumenda quisquam? In aliquam rerum earum. Ullam
                  praesentium culpa sed veritatis necessitatibus molestias
                  doloremque dignissimos ut, ducimus exercitationem unde eos
                  velit hic nihil assumenda quod, vero magnam officia!
                  Repellendus accusantium ipsum iure non praesentium
                  exercitationem labore ex velit voluptas at assumenda inventore
                  deserunt a amet, ducimus eius provident aut quasi quibusdam
                  facilis ullam neque sit. Consequatur vero, dolores enim
                  provident dignissimos voluptatem fugiat delectus est velit
                  saepe natus aperiam deserunt laboriosam commodi voluptas
                  minima doloribus molestias ad ut debitis asperiores. Totam
                  nisi commodi optio veniam illum culpa ullam aliquam doloremque
                  sit repudiandae, rerum, facilis alias? Corporis quasi
                  cupiditate dolores quibusdam dicta quaerat ipsum assumenda
                  illum, iste doloremque, cum tenetur. Dolorum eveniet molestias
                  veritatis possimus obcaecati?
                </p>
              </DrawerSheetWithState.Content>
              <DrawerSheetWithState.Indicator className="flex items-center gap-3 border-t border-foreground/10">
                <DrawerSheetWithState.Toggle className="btn btn-soft">
                  OK By
                </DrawerSheetWithState.Toggle>
                <DrawerSheetWithState.Toggle className="btn btn-ghost btn-error">
                  Close
                </DrawerSheetWithState.Toggle>
              </DrawerSheetWithState.Indicator>
            </DrawerSheetWithState.Body>
          </DrawerSheetWithState.Portal>
        </DrawerSheetWithState>
        <DrawerSheetWithState>
          <DrawerSheetWithState.Toggle className="btn btn-soft mt-3">
            Top with offset
          </DrawerSheetWithState.Toggle>
          <DrawerSheetWithState.Portal>
            <DrawerSheetWithState.Body position="top" offset={20} gesture>
              <DrawerSheetWithState.Indicator className="flex items-center gap-3 justify-center border-b border-foreground/10 rounded-t-2xl">
                DrawerSheet at top with offset
              </DrawerSheetWithState.Indicator>
              <DrawerSheetWithState.Content>
                <label className="input input-ghost-outline">
                  <SearchIcon />
                  <input
                    type="text"
                    className="input-field"
                    placeholder="Search..."
                    data-drawer-sheet="focus"
                  />
                </label>
                <p className="mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </DrawerSheetWithState.Content>
              <DrawerSheetWithState.Indicator className="flex items-center gap-3 border-t border-foreground/10 rounded-b-2xl">
                <DrawerSheetWithState.Toggle className="btn btn-soft">
                  OK By
                </DrawerSheetWithState.Toggle>
                <DrawerSheetWithState.Toggle className="btn btn-ghost btn-error">
                  Close
                </DrawerSheetWithState.Toggle>
              </DrawerSheetWithState.Indicator>
            </DrawerSheetWithState.Body>
          </DrawerSheetWithState.Portal>
        </DrawerSheetWithState>

        <p className="mt-6 font-medium">Left</p>
        <DrawerSheetWithState>
          <DrawerSheetWithState.Toggle className="btn btn-soft mt-3">
            Left
          </DrawerSheetWithState.Toggle>
          <DrawerSheetWithState.Portal>
            <DrawerSheetWithState.Body position="left">
              <DrawerSheetWithState.Indicator className="flex items-center gap-3 justify-center border-b border-foreground/10">
                DrawerSheet at left
              </DrawerSheetWithState.Indicator>
              <DrawerSheetWithState.Content>
                <label className="input input-ghost-outline">
                  <SearchIcon />
                  <input
                    type="text"
                    className="input-field"
                    placeholder="Search..."
                    data-drawer-sheet="focus"
                  />
                </label>
                <p className="mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </DrawerSheetWithState.Content>
              <DrawerSheetWithState.Indicator className="flex items-center gap-3 border-t border-foreground/10">
                <DrawerSheetWithState.Toggle className="btn btn-soft">
                  OK By
                </DrawerSheetWithState.Toggle>
                <DrawerSheetWithState.Toggle className="btn btn-ghost btn-error">
                  Close
                </DrawerSheetWithState.Toggle>
              </DrawerSheetWithState.Indicator>
            </DrawerSheetWithState.Body>
          </DrawerSheetWithState.Portal>
        </DrawerSheetWithState>
        <DrawerSheetWithState>
          <DrawerSheetWithState.Toggle className="btn btn-soft mt-3">
            Left with gesture
          </DrawerSheetWithState.Toggle>
          <DrawerSheetWithState.Portal>
            <DrawerSheetWithState.Body position="left" gesture>
              <DrawerSheetWithState.Indicator className="flex items-center gap-3 justify-center border-b border-foreground/10">
                DrawerSheet at left with gesture
              </DrawerSheetWithState.Indicator>
              <DrawerSheetWithState.Content>
                <label className="input input-ghost-outline">
                  <SearchIcon />
                  <input
                    type="text"
                    data-drawer-sheet="focus"
                    className="input-field"
                    placeholder="Search..."
                  />
                </label>
                <p className="mt-3 opacity-50">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <p className="mt-3">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Cupiditate voluptate corporis assumenda ratione consequatur
                  quaerat nihil obcaecati explicabo unde excepturi provident
                  enim sint sed labore animi nostrum, sit, dolorum eum numquam,
                  vel adipisci porro. Placeat quisquam impedit amet praesentium
                  minus suscipit soluta nam sapiente quis nihil pariatur, dicta
                  vel mollitia asperiores sit tempora dolore consequuntur
                  distinctio expedita ut recusandae quas labore error.
                  Obcaecati, debitis eveniet quidem at sint dolor fugiat ullam a
                  temporibus minus amet, quibusdam dolore iusto rerum. Neque
                  esse vitae ad ex voluptatem iure deserunt eos, vel quisquam
                  rerum porro beatae, quis eius et voluptas consequatur cumque
                  sint commodi. Impedit dolorum temporibus odit, incidunt
                  perspiciatis repudiandae. Libero impedit ea explicabo animi
                  aperiam? Id quam natus itaque iusto, consectetur unde illum
                  rerum recusandae ipsa omnis deleniti ipsam consequuntur ad
                  assumenda laudantium provident nulla, magnam veniam quaerat!
                  Rerum nostrum odio, aliquam est laboriosam molestiae quos,
                  eius quam perferendis earum ex quidem architecto optio
                  officiis velit? Sit ipsum nihil tempora perferendis voluptatem
                  omnis obcaecati, nobis sunt autem minus, repellendus, facere
                  velit non dolorem? Aut accusamus voluptatibus excepturi
                  possimus explicabo ad sed repudiandae dignissimos, sint quos
                  officiis cum, eum quae quidem, nesciunt reiciendis beatae.
                  Officiis quos voluptates neque aspernatur, tempore possimus
                  eum nostrum ad totam cumque adipisci eaque dignissimos quis
                  ratione ipsa sint recusandae. Nostrum nam maxime aut quis modi
                  quasi, enim, tenetur repudiandae itaque corrupti consequuntur
                  quisquam. Quam accusamus porro dolorem, eos aliquid sapiente?
                  Quidem, facilis laudantium! Nulla voluptatem architecto,
                  praesentium unde explicabo cum molestiae tempore error
                  voluptate ex enim non distinctio quisquam iure incidunt quos
                  fuga saepe autem quaerat commodi itaque? Dolores voluptatum
                  voluptate, tempora commodi dicta eaque quod veritatis rem
                  necessitatibus totam recusandae consequuntur! Maxime numquam
                  amet sint molestiae aliquid eligendi fuga est autem,
                  temporibus quas voluptatibus exercitationem voluptatum veniam
                  ea consectetur ex ipsa animi tenetur neque dolorem
                  dignissimos? Nobis iure doloribus officia perspiciatis unde
                  possimus! Facilis ullam animi iusto nesciunt odit temporibus.
                  Recusandae quibusdam odio atque quasi laudantium! Aliquam nemo
                  asperiores sint optio perferendis ullam, nulla laborum iusto.
                  Provident aut ea rem maiores ratione laborum placeat,
                  necessitatibus optio quod vero sequi deserunt odio amet dicta
                  quae. Perspiciatis ducimus, deleniti ratione ipsa
                  necessitatibus quod quos in reprehenderit eum alias nulla
                  temporibus iure maiores, fuga quis? Corrupti excepturi
                  asperiores, eligendi velit magni blanditiis amet officiis
                  optio inventore id officia itaque, autem dolorum eaque facilis
                  suscipit assumenda quisquam? In aliquam rerum earum. Ullam
                  praesentium culpa sed veritatis necessitatibus molestias
                  doloremque dignissimos ut, ducimus exercitationem unde eos
                  velit hic nihil assumenda quod, vero magnam officia!
                  Repellendus accusantium ipsum iure non praesentium
                  exercitationem labore ex velit voluptas at assumenda inventore
                  deserunt a amet, ducimus eius provident aut quasi quibusdam
                  facilis ullam neque sit. Consequatur vero, dolores enim
                  provident dignissimos voluptatem fugiat delectus est velit
                  saepe natus aperiam deserunt laboriosam commodi voluptas
                  minima doloribus molestias ad ut debitis asperiores. Totam
                  nisi commodi optio veniam illum culpa ullam aliquam doloremque
                  sit repudiandae, rerum, facilis alias? Corporis quasi
                  cupiditate dolores quibusdam dicta quaerat ipsum assumenda
                  illum, iste doloremque, cum tenetur. Dolorum eveniet molestias
                  veritatis possimus obcaecati?
                </p>
              </DrawerSheetWithState.Content>
              <DrawerSheetWithState.Indicator className="flex items-center gap-3 border-t border-foreground/10">
                <DrawerSheetWithState.Toggle className="btn btn-soft">
                  OK By
                </DrawerSheetWithState.Toggle>
                <DrawerSheetWithState.Toggle className="btn btn-ghost btn-error">
                  Close
                </DrawerSheetWithState.Toggle>
              </DrawerSheetWithState.Indicator>
            </DrawerSheetWithState.Body>
          </DrawerSheetWithState.Portal>
        </DrawerSheetWithState>
        <DrawerSheetWithState>
          <DrawerSheetWithState.Toggle className="btn btn-soft mt-3">
            Left with offset
          </DrawerSheetWithState.Toggle>
          <DrawerSheetWithState.Portal>
            <DrawerSheetWithState.Body position="left" offset={20} gesture>
              <DrawerSheetWithState.Indicator className="flex items-center gap-3 justify-center border-b border-foreground/10 rounded-t-2xl">
                DrawerSheet at left with offset
              </DrawerSheetWithState.Indicator>
              <DrawerSheetWithState.Content>
                <label className="input input-ghost-outline">
                  <SearchIcon />
                  <input
                    type="text"
                    className="input-field"
                    placeholder="Search..."
                    data-drawer-sheet="focus"
                  />
                </label>
                <p className="mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </DrawerSheetWithState.Content>
              <DrawerSheetWithState.Indicator className="flex items-center gap-3 border-t border-foreground/10 rounded-b-2xl">
                <DrawerSheetWithState.Toggle className="btn btn-soft">
                  OK By
                </DrawerSheetWithState.Toggle>
                <DrawerSheetWithState.Toggle className="btn btn-ghost btn-error">
                  Close
                </DrawerSheetWithState.Toggle>
              </DrawerSheetWithState.Indicator>
            </DrawerSheetWithState.Body>
          </DrawerSheetWithState.Portal>
        </DrawerSheetWithState>

        <p className="mt-6 font-medium">Right</p>
        <DrawerSheetWithState>
          <DrawerSheetWithState.Toggle className="btn btn-soft mt-3">
            Right
          </DrawerSheetWithState.Toggle>
          <DrawerSheetWithState.Portal>
            <DrawerSheetWithState.Body position="right">
              <DrawerSheetWithState.Indicator className="flex items-center gap-3 justify-center border-b border-foreground/10">
                DrawerSheet at right
              </DrawerSheetWithState.Indicator>
              <DrawerSheetWithState.Content>
                <label className="input input-ghost-outline">
                  <SearchIcon />
                  <input
                    type="text"
                    className="input-field"
                    placeholder="Search..."
                    data-drawer-sheet="focus"
                  />
                </label>
                <p className="mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </DrawerSheetWithState.Content>
              <DrawerSheetWithState.Indicator className="flex items-center gap-3 border-t border-foreground/10">
                <DrawerSheetWithState.Toggle className="btn btn-soft">
                  OK By
                </DrawerSheetWithState.Toggle>
                <DrawerSheetWithState.Toggle className="btn btn-ghost btn-error">
                  Close
                </DrawerSheetWithState.Toggle>
              </DrawerSheetWithState.Indicator>
            </DrawerSheetWithState.Body>
          </DrawerSheetWithState.Portal>
        </DrawerSheetWithState>
        <DrawerSheetWithState>
          <DrawerSheetWithState.Toggle className="btn btn-soft mt-3">
            Right with gesture
          </DrawerSheetWithState.Toggle>
          <DrawerSheetWithState.Portal>
            <DrawerSheetWithState.Body position="right" gesture>
              <DrawerSheetWithState.Indicator className="flex items-center gap-3 justify-center border-b border-foreground/10">
                DrawerSheet at right with gesture
              </DrawerSheetWithState.Indicator>
              <DrawerSheetWithState.Content>
                <label className="input input-ghost-outline">
                  <SearchIcon />
                  <input
                    type="text"
                    data-drawer-sheet="focus"
                    className="input-field"
                    placeholder="Search..."
                  />
                </label>
                <p className="mt-3 opacity-50">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <p className="mt-3">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Cupiditate voluptate corporis assumenda ratione consequatur
                  quaerat nihil obcaecati explicabo unde excepturi provident
                  enim sint sed labore animi nostrum, sit, dolorum eum numquam,
                  vel adipisci porro. Placeat quisquam impedit amet praesentium
                  minus suscipit soluta nam sapiente quis nihil pariatur, dicta
                  vel mollitia asperiores sit tempora dolore consequuntur
                  distinctio expedita ut recusandae quas labore error.
                  Obcaecati, debitis eveniet quidem at sint dolor fugiat ullam a
                  temporibus minus amet, quibusdam dolore iusto rerum. Neque
                  esse vitae ad ex voluptatem iure deserunt eos, vel quisquam
                  rerum porro beatae, quis eius et voluptas consequatur cumque
                  sint commodi. Impedit dolorum temporibus odit, incidunt
                  perspiciatis repudiandae. Libero impedit ea explicabo animi
                  aperiam? Id quam natus itaque iusto, consectetur unde illum
                  rerum recusandae ipsa omnis deleniti ipsam consequuntur ad
                  assumenda laudantium provident nulla, magnam veniam quaerat!
                  Rerum nostrum odio, aliquam est laboriosam molestiae quos,
                  eius quam perferendis earum ex quidem architecto optio
                  officiis velit? Sit ipsum nihil tempora perferendis voluptatem
                  omnis obcaecati, nobis sunt autem minus, repellendus, facere
                  velit non dolorem? Aut accusamus voluptatibus excepturi
                  possimus explicabo ad sed repudiandae dignissimos, sint quos
                  officiis cum, eum quae quidem, nesciunt reiciendis beatae.
                  Officiis quos voluptates neque aspernatur, tempore possimus
                  eum nostrum ad totam cumque adipisci eaque dignissimos quis
                  ratione ipsa sint recusandae. Nostrum nam maxime aut quis modi
                  quasi, enim, tenetur repudiandae itaque corrupti consequuntur
                  quisquam. Quam accusamus porro dolorem, eos aliquid sapiente?
                  Quidem, facilis laudantium! Nulla voluptatem architecto,
                  praesentium unde explicabo cum molestiae tempore error
                  voluptate ex enim non distinctio quisquam iure incidunt quos
                  fuga saepe autem quaerat commodi itaque? Dolores voluptatum
                  voluptate, tempora commodi dicta eaque quod veritatis rem
                  necessitatibus totam recusandae consequuntur! Maxime numquam
                  amet sint molestiae aliquid eligendi fuga est autem,
                  temporibus quas voluptatibus exercitationem voluptatum veniam
                  ea consectetur ex ipsa animi tenetur neque dolorem
                  dignissimos? Nobis iure doloribus officia perspiciatis unde
                  possimus! Facilis ullam animi iusto nesciunt odit temporibus.
                  Recusandae quibusdam odio atque quasi laudantium! Aliquam nemo
                  asperiores sint optio perferendis ullam, nulla laborum iusto.
                  Provident aut ea rem maiores ratione laborum placeat,
                  necessitatibus optio quod vero sequi deserunt odio amet dicta
                  quae. Perspiciatis ducimus, deleniti ratione ipsa
                  necessitatibus quod quos in reprehenderit eum alias nulla
                  temporibus iure maiores, fuga quis? Corrupti excepturi
                  asperiores, eligendi velit magni blanditiis amet officiis
                  optio inventore id officia itaque, autem dolorum eaque facilis
                  suscipit assumenda quisquam? In aliquam rerum earum. Ullam
                  praesentium culpa sed veritatis necessitatibus molestias
                  doloremque dignissimos ut, ducimus exercitationem unde eos
                  velit hic nihil assumenda quod, vero magnam officia!
                  Repellendus accusantium ipsum iure non praesentium
                  exercitationem labore ex velit voluptas at assumenda inventore
                  deserunt a amet, ducimus eius provident aut quasi quibusdam
                  facilis ullam neque sit. Consequatur vero, dolores enim
                  provident dignissimos voluptatem fugiat delectus est velit
                  saepe natus aperiam deserunt laboriosam commodi voluptas
                  minima doloribus molestias ad ut debitis asperiores. Totam
                  nisi commodi optio veniam illum culpa ullam aliquam doloremque
                  sit repudiandae, rerum, facilis alias? Corporis quasi
                  cupiditate dolores quibusdam dicta quaerat ipsum assumenda
                  illum, iste doloremque, cum tenetur. Dolorum eveniet molestias
                  veritatis possimus obcaecati?
                </p>
              </DrawerSheetWithState.Content>
              <DrawerSheetWithState.Indicator className="flex items-center gap-3 border-t border-foreground/10">
                <DrawerSheetWithState.Toggle className="btn btn-soft">
                  OK By
                </DrawerSheetWithState.Toggle>
                <DrawerSheetWithState.Toggle className="btn btn-ghost btn-error">
                  Close
                </DrawerSheetWithState.Toggle>
              </DrawerSheetWithState.Indicator>
            </DrawerSheetWithState.Body>
          </DrawerSheetWithState.Portal>
        </DrawerSheetWithState>
        <DrawerSheetWithState>
          <DrawerSheetWithState.Toggle className="btn btn-soft mt-3">
            Right with offset
          </DrawerSheetWithState.Toggle>
          <DrawerSheetWithState.Portal>
            <DrawerSheetWithState.Body position="right" offset={20} gesture>
              <DrawerSheetWithState.Indicator className="flex items-center gap-3 justify-center border-b border-foreground/10 rounded-t-2xl">
                DrawerSheet at right with offset
              </DrawerSheetWithState.Indicator>
              <DrawerSheetWithState.Content>
                <label className="input input-ghost-outline">
                  <SearchIcon />
                  <input
                    type="text"
                    className="input-field"
                    placeholder="Search..."
                    data-drawer-sheet="focus"
                  />
                </label>
                <p className="mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </DrawerSheetWithState.Content>
              <DrawerSheetWithState.Indicator className="flex items-center gap-3 border-t border-foreground/10 rounded-b-2xl">
                <DrawerSheetWithState.Toggle className="btn btn-soft">
                  OK By
                </DrawerSheetWithState.Toggle>
                <DrawerSheetWithState.Toggle className="btn btn-ghost btn-error">
                  Close
                </DrawerSheetWithState.Toggle>
              </DrawerSheetWithState.Indicator>
            </DrawerSheetWithState.Body>
          </DrawerSheetWithState.Portal>
        </DrawerSheetWithState>

        <p id="drawer-with-search-params" className="title mt-6">
          With search params:
        </p>
        <Suspense>
          <DrawerSheetWithSearchParams openKey="drawer">
            <DrawerSheetWithSearchParams.Toggle className="btn btn-soft mt-3">
              Open drawer via search params
            </DrawerSheetWithSearchParams.Toggle>
            <DrawerSheetWithSearchParams.Portal>
              <DrawerSheetWithSearchParams.Body>
                <DrawerSheetWithSearchParams.Indicator className="flex items-center gap-3 justify-center border-b border-foreground/10">
                  Drawer synced with `drawer=true`
                </DrawerSheetWithSearchParams.Indicator>
                <DrawerSheetWithSearchParams.Content>
                  <p>
                    Open state is stored in the URL. Close this drawer to remove
                    the search param.
                  </p>
                </DrawerSheetWithSearchParams.Content>
                <DrawerSheetWithSearchParams.Indicator className="flex items-center gap-3 border-t border-foreground/10">
                  <DrawerSheetWithSearchParams.Toggle className="btn btn-soft">
                    Close
                  </DrawerSheetWithSearchParams.Toggle>
                </DrawerSheetWithSearchParams.Indicator>
              </DrawerSheetWithSearchParams.Body>
            </DrawerSheetWithSearchParams.Portal>
          </DrawerSheetWithSearchParams>
        </Suspense>

        <p className="heading mt-20">Modal</p>
        <ModalWithState>
          <ModalWithState.Toggle className="btn btn-soft mt-6">
            Open Short Content Modal
          </ModalWithState.Toggle>

          <ModalWithState.Portal>
            <ModalWithState.Body>
              <ModalWithState.Indicator className="rounded-t-2xl border-b border-foreground/10">
                <label className="input input-ghost-outline input-full">
                  <SearchIcon />
                  <input
                    type="text"
                    data-modal="focus"
                    className="input-field"
                    placeholder="Search..."
                  />
                </label>
              </ModalWithState.Indicator>
              <ModalWithState.Content>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident, quos veniam! Placeat similique molestiae ex?
                </p>
              </ModalWithState.Content>
              <ModalWithState.Indicator className="flex items-center gap-3 rounded-b-2xl border-t border-foreground/10">
                <p className="font-bold justify-center mr-auto">
                  Do you trust she?
                </p>
                <ModalWithState.Toggle className="btn btn-soft palette-error">
                  No
                </ModalWithState.Toggle>
                <ModalWithState.Toggle className="btn btn-fill palette-success">
                  Yes
                </ModalWithState.Toggle>
              </ModalWithState.Indicator>
            </ModalWithState.Body>
          </ModalWithState.Portal>
        </ModalWithState>
        <ModalWithState>
          <ModalWithState.Toggle className="btn btn-soft mt-6">
            Open Long Content Modal
          </ModalWithState.Toggle>

          <ModalWithState.Portal>
            <ModalWithState.Body>
              <ModalWithState.Indicator className="rounded-t-2xl border-b border-foreground/10">
                <label className="input input-ghost-outline input-full">
                  <SearchIcon />
                  <input
                    type="text"
                    data-modal="focus"
                    className="input-field"
                    placeholder="Search..."
                  />
                </label>
              </ModalWithState.Indicator>
              <ModalWithState.Content>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui
                  maxime non eius eos veritatis libero, animi pariatur illo
                  inventore aliquid consectetur expedita a aut enim quasi
                  excepturi reiciendis ipsam. Asperiores modi magni, accusamus
                  reprehenderit animi ex ad voluptatem doloribus maiores autem!
                  Vel nam nesciunt, numquam recusandae voluptate illum quis
                  quibusdam quaerat provident, dolorum qui sed modi possimus id
                  dolore ipsa dignissimos animi expedita, ipsum repellat fugiat
                  sit. Velit quo libero nisi, nemo sunt nobis, illo similique
                  qui adipisci consequatur repellat eius illum facilis ratione
                  in, corrupti magnam nam ut itaque fugiat. Molestiae atque
                  veritatis incidunt deserunt unde quia inventore deleniti
                  placeat architecto, perspiciatis, dolore, laborum et quaerat!
                  Nobis eligendi deleniti accusantium cupiditate! Ea quam iste
                  voluptatibus error harum ullam eaque odit iusto necessitatibus
                  veniam at facere repudiandae tempore repellendus voluptatem
                  impedit corporis quidem, porro adipisci, aperiam ab accusamus
                  aliquid, vitae doloribus? Laborum, voluptatibus ipsam saepe
                  optio temporibus nobis. Sequi officiis maiores aut ut unde
                  reprehenderit praesentium dolorem voluptatem exercitationem ab
                  expedita, fugit quidem debitis at qui cupiditate omnis
                  perferendis in ullam quis quia hic quibusdam molestias?
                  Voluptates fuga animi atque eligendi dolore dolorem laudantium
                  sit, sint laboriosam ut enim. Ab illo rerum molestias voluptas
                  a dolorum. Dolorum alias nobis voluptas sunt repudiandae,
                  perferendis eaque vel aliquam fuga iste, ipsum perspiciatis!
                  Eum tempora modi quos dolore, recusandae architecto at
                  laudantium vitae praesentium ullam neque incidunt quaerat
                  sequi est fugiat ea voluptates vero, aliquid error rem hic.
                  Aliquid facere, debitis officia ipsum culpa alias inventore
                  optio odio vero unde minima? Eveniet placeat delectus,
                  architecto ipsum fuga quia voluptatum. Vero, dolorum, officiis
                  ipsam illo nam quo enim commodi quia soluta similique
                  excepturi explicabo, odio neque aliquam ut. Nulla nihil,
                  eveniet autem dicta, necessitatibus provident quos consequatur
                  saepe, excepturi optio perferendis debitis ipsum. Eveniet,
                  molestiae! Sit, culpa officia est quasi natus labore ea sed
                  illo, iusto dignissimos obcaecati cum consectetur magnam ipsa
                  odio beatae a possimus. Reprehenderit, nostrum adipisci velit
                  nihil tenetur minus repudiandae ullam tempora doloremque
                  possimus, error, itaque aliquam dolor accusamus? Facere,
                  delectus error perferendis, similique eos recusandae
                  doloremque illum excepturi dicta quibusdam quaerat consectetur
                  eius consequuntur quos adipisci quia, assumenda enim sit!
                  Officiis, ipsam sit. Modi eligendi totam impedit doloremque
                  facilis animi qui doloribus aut dolor? Natus eos nam harum
                  sint, repellat repellendus numquam suscipit! Dicta, facere!
                  Vero doloribus ex at repellat deleniti a enim consectetur
                  fugit error qui rerum, voluptas nihil consequatur facilis
                  corporis, aspernatur delectus sunt eos dolorum. Earum
                  blanditiis enim architecto exercitationem ipsa, quis quaerat
                  dicta accusamus nostrum sequi ea. Facere nemo quod nam. Atque
                  voluptate labore pariatur, recusandae nobis reprehenderit
                  quam. Quo enim commodi natus officia rem deserunt! Ab, odit
                  cupiditate? Sapiente, voluptatem amet. Harum, tempora. Commodi
                  iste adipisci repudiandae similique, porro fuga vitae odio
                  minus nisi officiis iusto? Nesciunt tempora ab iure doloribus
                  possimus quam dignissimos, numquam quibusdam fugit impedit
                  molestias illum asperiores deleniti inventore explicabo quis a
                  alias dolores voluptate odit distinctio commodi! Aperiam nemo
                  eveniet ipsa, temporibus vel perferendis quia dolor, officia
                  quaerat accusantium cumque maiores placeat quas ratione
                  consequuntur rem nulla ducimus. Error accusantium expedita
                  aperiam nemo iste, magnam ratione, inventore commodi dolores
                  quae mollitia suscipit consequuntur deleniti temporibus
                  repudiandae assumenda rem officiis earum. Illo possimus
                  dolorem rem beatae nihil obcaecati reiciendis nam non, odio
                  accusantium explicabo aperiam hic porro soluta et adipisci
                  cumque, culpa ex accusamus distinctio numquam iusto ratione
                  enim fugiat! Aliquam quas voluptas iusto cumque ipsum odit
                  tempore impedit omnis, nam doloribus debitis numquam similique
                  sit porro quam inventore perspiciatis sed eos. Itaque nisi,
                  magni repellendus fugiat consectetur minus deserunt error
                  pariatur quam enim nostrum incidunt rerum nobis veritatis
                  cumque, labore natus esse soluta perferendis neque quo est
                  laboriosam quis! Quis alias optio magnam autem? Nam ab error
                  porro ipsum nostrum tempore quod corrupti blanditiis quaerat
                  a. Delectus aperiam impedit dolores expedita vero
                  necessitatibus reiciendis, quia consequuntur a amet. Accusamus
                  tempore incidunt explicabo saepe iste corrupti ipsam
                  dignissimos aut, natus eligendi quod in soluta nulla maxime
                  sapiente totam maiores porro illum repellat deserunt eaque?
                  Totam itaque eaque laborum voluptatum est nostrum, accusantium
                  deleniti ab praesentium iusto tempore ullam odio nihil
                  delectus consequuntur nisi quod aliquid tempora perspiciatis
                  ad fuga! Culpa neque, rerum esse ratione tempore suscipit eos
                  exercitationem eaque magnam ipsa deserunt quaerat? Nemo
                  dolorem perspiciatis consequatur! Maxime nisi quod omnis nulla
                  eum repudiandae tempora? Alias esse inventore dicta molestias,
                  numquam eum repellat suscipit ratione? Debitis asperiores
                  blanditiis ducimus deleniti natus recusandae temporibus ipsa
                  voluptatibus doloribus maxime ea inventore eligendi, quam
                  corporis. Voluptatibus necessitatibus, blanditiis eaque cumque
                  molestias asperiores tenetur in ullam laboriosam voluptates
                  fugiat voluptas officiis rem reprehenderit doloremque magnam
                  natus ratione numquam aliquam suscipit ea doloribus fuga
                  eligendi? Sunt labore laborum earum tempora quas optio aliquam
                  dolor? Neque, pariatur reprehenderit blanditiis at dolorem
                  optio maxime dignissimos corporis quia alias illo sapiente
                  tempora quod ipsa exercitationem. Fuga officia at ipsum!
                  Facilis esse aliquid non. Non atque amet ut deleniti earum
                  asperiores in quis aut reiciendis totam nihil nisi minus
                  voluptate ullam incidunt voluptates vero ex eveniet tempore
                  quas voluptatibus, quisquam dolorem repudiandae. Sint alias
                  perspiciatis temporibus sunt hic optio harum porro, ex ipsam
                  soluta accusantium iste tempora maxime cupiditate provident
                  esse animi, incidunt dolor nam suscipit consequuntur quos
                  obcaecati? Ab magni amet consectetur a inventore sapiente
                  saepe assumenda iusto animi mollitia sed adipisci natus,
                  accusamus velit? At doloremque veniam, perspiciatis quo
                  impedit totam saepe laudantium, laboriosam officiis animi quam
                  distinctio sed sit earum modi iste veritatis architecto. Sequi
                  molestias perspiciatis consectetur ab, omnis magnam quae
                  voluptas. Atque sapiente illo, blanditiis quis delectus
                  doloribus commodi sequi culpa quae possimus iste veniam iusto
                  repellendus excepturi explicabo reprehenderit unde placeat
                  perspiciatis animi voluptatibus eaque exercitationem repellat.
                  Commodi quae obcaecati rem, voluptates nihil est voluptas
                  perferendis odit, assumenda laudantium sunt repellendus esse
                  incidunt delectus numquam? Unde, commodi. Quam, illum. Quis
                  maiores ipsa in adipisci odit iure incidunt fuga aliquam
                  delectus, quia ducimus tenetur ullam hic, qui, repellendus
                  inventore eligendi eum placeat! Numquam non dolor at
                  exercitationem, deserunt ullam in officia quibusdam iure eius
                  laudantium doloremque minima perferendis culpa velit tempora
                  delectus! Minus, fugit recusandae omnis rem provident dolorum
                  rerum aliquid id sequi ea!
                </p>
              </ModalWithState.Content>
              <ModalWithState.Indicator className="flex items-center gap-3 rounded-b-2xl border-t border-foreground/10">
                <p className="font-bold justify-center mr-auto">
                  Do you trust she?
                </p>
                <ModalWithState.Toggle className="btn btn-soft palette-error">
                  No
                </ModalWithState.Toggle>
                <ModalWithState.Toggle className="btn btn-fill palette-success">
                  Yes
                </ModalWithState.Toggle>
              </ModalWithState.Indicator>
            </ModalWithState.Body>
          </ModalWithState.Portal>
        </ModalWithState>

        <p id="modal-with-search-params" className="title mt-6">
          With search params:
        </p>
        <Suspense>
          <ModalWithSearchParams openKey="modal">
            <ModalWithSearchParams.Toggle className="btn btn-soft mt-3">
              Open modal via search params
            </ModalWithSearchParams.Toggle>
            <ModalWithSearchParams.Portal>
              <ModalWithSearchParams.Body>
                <ModalWithSearchParams.Indicator className="rounded-t-2xl border-b border-foreground/10">
                  Modal synced with URL
                </ModalWithSearchParams.Indicator>
                <ModalWithSearchParams.Content>
                  <p>
                    Modal open state is synced with the `modal=true` search
                    param.
                  </p>
                </ModalWithSearchParams.Content>
                <ModalWithSearchParams.Indicator className="flex items-center gap-3 rounded-b-2xl border-t border-foreground/10">
                  <ModalWithSearchParams.Toggle className="btn btn-soft">
                    Close
                  </ModalWithSearchParams.Toggle>
                </ModalWithSearchParams.Indicator>
              </ModalWithSearchParams.Body>
            </ModalWithSearchParams.Portal>
          </ModalWithSearchParams>
        </Suspense>

        <p className="heading mt-20">OTP</p>
        <Otp className="mt-6">
          <Otp.Inputs
            length={6}
            onLastChange={(otp) => alert(otp)}
            className="input input-ghost-outline element-square-size"
          />

          <Otp.HiddenInput />
        </Otp>

        <p id="pagination-with-search-params" className="heading pt-20">
          Pagination
        </p>
        <p className="mt-6">With state:</p>
        <p className="mt-3">Page is {page}</p>
        <PaginationWithState pagesLength={6} page={page} setPage={setPage}>
          <div className="flex items-center gap-3 mt-3">
            <PaginationWithState.PrevBtn className="btn btn-soft btn-square">
              <ChevronLeftIcon />
            </PaginationWithState.PrevBtn>

            <PaginationWithState.Counts className="btn btn-square data-[state=false]:btn-ghost data-[state=true]:btn-fill" />

            <PaginationWithState.NextBtn className="btn btn-soft btn-square">
              <ChevronRightIcon />
            </PaginationWithState.NextBtn>
          </div>
        </PaginationWithState>
        <p className="mt-6">With search params:</p>
        <p className="mt-3">Page is {searchParams.get("page") || 1}</p>
        <Suspense>
          <PaginationWithSearchParams pagesLength={6}>
            <div className="flex items-center gap-3 mt-3">
              <PaginationWithSearchParams.PrevBtn className="btn btn-soft btn-square">
                <ChevronLeftIcon />
              </PaginationWithSearchParams.PrevBtn>

              <PaginationWithSearchParams.Counts className="btn btn-square data-[state=false]:btn-ghost data-[state=true]:btn-fill" />

              <PaginationWithSearchParams.NextBtn className="btn btn-soft btn-square">
                <ChevronRightIcon />
              </PaginationWithSearchParams.NextBtn>
            </div>
          </PaginationWithSearchParams>
        </Suspense>

        <p id="page-pagination-with-search-params" className="heading mt-20">
          Pagination with pages
        </p>
        <p className="mt-6">With state:</p>
        <PaginationWithState
          page={pageWithPage}
          pages={PAGES_WITH_STATE}
          setPage={setPageWithPage}
        >
          <div className="w-lg">
            <PaginationWithState.Pages />

            <div className="flex items-center gap-3 mt-3">
              <PaginationWithState.PrevBtn className="btn btn-soft btn-square">
                <ChevronLeftIcon />
              </PaginationWithState.PrevBtn>

              <PaginationWithState.Counts className="btn data-[state=false]:btn-ghost data-[state=true]:btn-fill">
                {(pagePaginationWithSateNumber) =>
                  `Page Number ${pagePaginationWithSateNumber}`
                }
              </PaginationWithState.Counts>

              <PaginationWithState.NextBtn className="btn btn-soft btn-square">
                <ChevronRightIcon />
              </PaginationWithState.NextBtn>
            </div>
          </div>
        </PaginationWithState>
        <p className="mt-6">Like tabs:</p>
        <PaginationWithState
          page={pageWithPage}
          pages={PAGES_WITH_STATE}
          setPage={setPageWithPage}
        >
          <div className="join-x join-x-no-border mt-3">
            <PaginationWithState.Counts className="btn data-[state=false]:btn-ghost-outline data-[state=true]:btn-soft-outline rounded-b-none border-b-0!">
              {(tabNumber) => `Tab ${tabNumber}`}
            </PaginationWithState.Counts>
          </div>
          <div className="card bg-card rounded-tl-none">
            <PaginationWithState.Pages />
          </div>
        </PaginationWithState>
        <p className="mt-6">With search params:</p>
        <Suspense>
          <PaginationWithSearchParams
            pageKey="page-2"
            pages={PAGES_WITH_SEARCHPARAMS}
          >
            <div>
              <PaginationWithSearchParams.Pages />

              <div className="flex items-center gap-3 mt-3">
                <PaginationWithSearchParams.PrevBtn className="btn btn-soft btn-square">
                  <ChevronLeftIcon />
                </PaginationWithSearchParams.PrevBtn>

                <PaginationWithState.Counts className="btn data-[state=false]:btn-ghost data-[state=true]:btn-fill">
                  {(pagePaginationWithSateNumber) =>
                    `Page Number ${pagePaginationWithSateNumber}`
                  }
                </PaginationWithState.Counts>

                <PaginationWithSearchParams.NextBtn className="btn btn-soft btn-square">
                  <ChevronRightIcon />
                </PaginationWithSearchParams.NextBtn>
              </div>
            </div>
          </PaginationWithSearchParams>
        </Suspense>
        <p id="pagination-with-progress" className="pt-6">
          With proggres bar:
        </p>
        <Suspense>
          <PaginationWithSearchParams
            pageKey="page-3"
            pages={PAGES_WITH_SEARCHPARAMS}
          >
            <div className="flex items-center gap-3 mt-3 mb-9">
              <PaginationWithSearchParams.Counts
                className="btn shrink-0 relative btn-square data-[skipped=false]:data-[state=false]:btn-ghost data-[state=true]:btn-soft data-[skipped=true]:btn-fill"
                ProgressElem={
                  <div className="w-32 h-2 rounded-full overflow-hidden bg-background-thin group">
                    <div className="w-0 group-data-[state=true]:w-1/2 group-data-[skipped=true]:w-full h-full bg-foreground"></div>
                  </div>
                }
              >
                {(count) => (
                  <>
                    <span className="font-bold">{count}</span>
                    <span className="absolute w-max top-full left-1/2 -translate-x-1/2 text-foreground">
                      {PAGES_WITH_SEARCHPARAMS[count - 1].name}
                    </span>
                  </>
                )}
              </PaginationWithSearchParams.Counts>
            </div>

            <PaginationWithSearchParams.Pages />
          </PaginationWithSearchParams>
        </Suspense>

        <p className="heading mt-20">PasswordInput</p>
        <PasswordInput className="input input-ghost-outline input-xl mt-3">
          <span>Password:</span>
          <PasswordInput.Field className="input-field" />
          <PasswordInput.Toggle
            className="btn btn-ghost btn-square btn-xl btn-in-input"
            visibleChildren={<EyeIcon />}
          >
            <EyeClosedIcon />
          </PasswordInput.Toggle>
        </PasswordInput>

        <p className="heading mt-20">Popover</p>
        <PopoverWithState mode="hover" direction="y" className="mt-6">
          <PopoverWithState.Toggle className="btn btn-soft">
            Hover me
          </PopoverWithState.Toggle>

          <PopoverWithState.Body
            className="card card-menu bg-card"
            position="bottom-left-in"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing.
          </PopoverWithState.Body>
        </PopoverWithState>
        <PopoverWithState mode="both" direction="y" className="mt-3">
          <PopoverWithState.Toggle className="btn btn-soft">
            Hover and click me
          </PopoverWithState.Toggle>

          <PopoverWithState.Body
            position="bottom-left-in"
            className="card card-menu bg-card"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing.
          </PopoverWithState.Body>
        </PopoverWithState>
        <PopoverWithState mode="click" direction="y" className="mt-3">
          <PopoverWithState.Toggle className="btn acn data-[state=false]:btn-soft data-[state=true]:btn-fill">
            Click me
          </PopoverWithState.Toggle>

          <PopoverWithState.Body
            position="bottom-left-in"
            className="card card-menu card-y bg-card"
          >
            <button className="btn btn-ghost btn-row acn">Like</button>
            <button className="btn btn-ghost btn-row acn">Ignore</button>
            <button className="btn btn-ghost btn-row acn">Download</button>
            <PopoverWithState direction="y">
              <PopoverWithState.Toggle className="btn acn data-[state=false]:btn-ghost data-[state=true]:btn-soft">
                <span>Share via</span>
                <ChevronRightIcon />
              </PopoverWithState.Toggle>
              <PopoverWithState.Body
                className="card card-menu card-y bg-card"
                position="right-center"
                offset={16}
              >
                <button className="btn btn-ghost btn-row acn">Link</button>
                <button className="btn btn-ghost btn-row acn">Instagram</button>
                <button className="btn btn-ghost btn-row acn">Telegram</button>
                <button className="btn btn-ghost btn-row acn">X</button>
              </PopoverWithState.Body>
            </PopoverWithState>
          </PopoverWithState.Body>
        </PopoverWithState>

        <p id="popover-with-search-params" className="title mt-6">
          With search params:
        </p>
        <Suspense>
          <PopoverWithSearchParams
            mode="click"
            direction="y"
            openKey="popover"
            className="mt-3"
          >
            <PopoverWithSearchParams.Toggle className="btn data-[state=false]:btn-soft data-[state=true]:btn-fill">
              Popover via search params
            </PopoverWithSearchParams.Toggle>
            <PopoverWithSearchParams.Body
              className="card card-menu bg-card"
              position="bottom-left-in"
            >
              Popover open state is synced with `popover=true`.
            </PopoverWithSearchParams.Body>
          </PopoverWithSearchParams>
        </Suspense>

        <p className="heading mt-20">Portal</p>
        <p className="mt-6">Portal are a large text on the end of page</p>
        <Portal>
          <p className="wrapper my-20">
            PORTAL: Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perspiciatis quasi mollitia veniam consequuntur dicta! Harum, eos
            consectetur iste rem minus omnis aut est officiis quos in quae nisi?
            Dignissimos deleniti dolorem consequuntur, itaque, possimus
            molestiae ex, quasi facilis similique commodi vitae perspiciatis
            beatae iure est ullam quos ab maiores ratione hic iste quis
            reiciendis accusantium reprehenderit. Aliquid delectus iusto
            voluptatibus voluptatum architecto velit modi distinctio nihil
            assumenda veniam? Ipsum possimus amet corporis quos sint corrupti
            enim temporibus deleniti similique. Id ut fuga doloribus.
            Consequatur quia fugiat libero obcaecati facilis? Asperiores aperiam
            facilis omnis eius rem aliquam nam? Nostrum earum dolorem, expedita
            quam repudiandae consequuntur, ipsam quas laudantium quaerat ex
            eaque molestiae labore. Autem quam aspernatur recusandae
            perferendis, explicabo reprehenderit officia molestias excepturi
            blanditiis placeat ratione architecto esse vitae labore quae
            possimus voluptates repudiandae. Explicabo cumque sunt aliquid eaque
            autem reiciendis praesentium reprehenderit ab commodi dolores ipsam
            nisi, accusantium adipisci animi eius fugit dolor necessitatibus
            totam nostrum in harum dignissimos inventore. Labore voluptas
            doloribus quibusdam praesentium? Assumenda obcaecati minus quod
            iusto dignissimos ipsam consequatur, totam dolorem maiores magnam
            molestias fugiat doloribus ea mollitia, numquam optio quisquam nobis
            voluptate quibusdam! Repellendus distinctio id autem rerum magnam
            neque voluptas sapiente consequatur? Velit sint nisi libero? Fugiat
            minima perspiciatis rem atque aspernatur quis vitae incidunt,
            temporibus qui est dolorum explicabo et. Sint atque rem suscipit
            fuga eum saepe. Officia, tempora minus. Corporis dolorum voluptatum
            dignissimos eveniet error sit exercitationem aliquid reprehenderit
            perspiciatis unde, deserunt recusandae nisi consequatur architecto
            saepe iusto totam dolorem ex odit at. Ipsa obcaecati quod odit
            explicabo nulla commodi nobis sapiente! Illum esse, nisi nihil
            voluptatibus amet accusantium explicabo est debitis, placeat beatae
            adipisci dolorum fugiat rem vel recusandae temporibus nemo! Quidem,
            labore. Fuga quae unde dolores animi, molestias voluptatum, eligendi
            aperiam corporis nulla autem dignissimos, itaque quis? Fugiat
            asperiores iusto quidem expedita eum modi laborum rerum sint
            obcaecati, provident natus ratione a alias ipsum architecto, sit
            ducimus nobis. Voluptas, velit nesciunt rem consequatur commodi,
            error architecto illo necessitatibus dolorum rerum officiis modi,
            vitae ea laboriosam. Commodi delectus quas ducimus, totam earum
            deleniti laboriosam pariatur enim provident quasi tempore impedit
            eveniet aspernatur ad quisquam. Illum, dicta omnis. Animi distinctio
            quod autem numquam laboriosam. Rerum enim accusamus voluptatibus
            corporis, nihil molestias in, exercitationem assumenda ea incidunt
            dolorem dignissimos excepturi iure quis doloremque et nesciunt
            aspernatur temporibus nobis minus eius cum natus pariatur sequi.
            Aliquam soluta dolorem ullam voluptatem praesentium sequi commodi
            distinctio, id porro ipsum possimus ratione fugit est rerum dolores
            cupiditate rem perspiciatis voluptatum asperiores libero modi
            eveniet doloribus. Enim repudiandae animi quos ea minima perferendis
            optio temporibus ad voluptates earum incidunt sit quam odio
            quisquam, ipsum doloribus quia blanditiis iste modi debitis nisi!
            Sit repellat recusandae, impedit repellendus itaque modi quae minus,
            odit optio eligendi ut voluptatum dicta tenetur et adipisci sapiente
            pariatur. Ab vero eos optio illum nam veritatis, saepe fugiat beatae
            sit placeat recusandae delectus veniam iusto, odit illo aliquid
            eveniet numquam excepturi eligendi repellat? Officia nihil ipsam ad
            ab, possimus doloribus, repudiandae consequuntur ipsum magnam
            provident beatae, quisquam accusamus? Magnam, ipsa quam mollitia
            atque similique, iure veniam non fugiat voluptatem porro quidem
            dolores asperiores. Quo, saepe eius fugiat deserunt accusantium
            optio reprehenderit voluptate nulla aliquid sequi cupiditate porro
            temporibus facilis dolor officia, qui deleniti? Similique
            necessitatibus numquam natus suscipit corrupti, quaerat ducimus
            tempore consequatur hic asperiores voluptatibus delectus voluptate
            nihil. Maiores sed aliquid laborum, tempore, qui ducimus quos,
            assumenda omnis facere dicta illo saepe cupiditate alias provident
            quaerat nemo! Fuga, porro assumenda enim, harum doloremque ullam
            autem nihil id, optio excepturi officiis dolorem? Consectetur nobis
            porro quidem veniam necessitatibus nemo iusto perspiciatis maiores.
            Perferendis cumque reiciendis incidunt eligendi distinctio
            voluptatibus soluta, cupiditate repudiandae consectetur asperiores,
            optio quos esse vel vitae dicta iure nam alias voluptatum repellat,
            porro consequatur nihil. Repellat ipsam laudantium natus adipisci
            nihil magni quibusdam odio sit delectus a neque beatae deserunt,
            sint at eum architecto cumque expedita! Tempore accusantium nostrum
            repellendus corporis, mollitia, nesciunt deserunt dolores at
            repellat aliquam illo neque nulla modi dignissimos sit placeat
            officiis impedit itaque quidem corrupti maxime quod. Accusamus,
            quae? Reiciendis maxime earum, sunt aliquid quia recusandae fugiat
            fugit officia odio obcaecati ipsa, provident est quasi cum deleniti,
            quam quae facilis? Error quam nobis, inventore atque sunt porro.
            Pariatur incidunt minima nesciunt nulla quos nam veniam debitis est
            consequatur aliquid ea quaerat quia beatae, cum eligendi
            consequuntur dignissimos voluptatum commodi molestias amet natus
            odio impedit eum asperiores. Incidunt, rerum quasi cumque unde
            nesciunt temporibus facere vitae molestias nulla et alias, ea
            voluptatem amet odio veniam id expedita nostrum voluptates eligendi,
            repudiandae architecto saepe laborum! Voluptatibus debitis maiores
            consequatur repellendus vel quis, necessitatibus velit dolor, ipsam,
            quae at laborum odio inventore sequi totam earum distinctio quaerat
            perferendis. Odit error accusantium blanditiis quia harum nulla in
            consectetur, maxime cumque officiis corporis labore, quas nostrum,
            voluptas similique et mollitia ad placeat! Voluptate cum nobis
            libero ab tempore id at, corporis ad? Eum cumque vero magnam?
            Possimus minus temporibus ducimus reprehenderit perferendis? At,
            doloribus in, sunt similique praesentium, cupiditate minima id
            necessitatibus dolor ratione eius et eveniet voluptates iusto sed?
            Animi accusantium eum cum consequuntur, dignissimos alias fugit
            repellendus, corrupti, quibusdam beatae similique praesentium vel
            recusandae reiciendis ut accusamus sunt quo pariatur nihil et
            dolorem incidunt aspernatur error illum? Iure sapiente dolore eum
            magnam cumque neque temporibus ipsam ducimus ex doloremque,
            perspiciatis et incidunt illum fugit quaerat facilis veritatis
            tempore aut quisquam exercitationem rem libero! Temporibus minus id
            dolorum, alias perferendis quis sint voluptates corrupti ullam
            commodi. Laborum saepe architecto cupiditate adipisci velit cumque
            neque fugit ut, fuga reprehenderit! Dolor dolorum est quisquam alias
            distinctio amet dolores, sit minima! Reiciendis sit tempora cumque
            dolore debitis iure dolorem fugit itaque officia ducimus, harum
            velit ipsum veritatis nam nesciunt quos odit quia, qui repudiandae
            nulla! Explicabo quis rem, quae perferendis ex odit ratione, minima
            autem dolorem magnam incidunt ipsum corporis numquam eos officiis
            alias temporibus quibusdam et dolore sunt. Molestias perferendis
            quidem delectus rerum eos quas? Eos fuga quam qui at nostrum
            reiciendis voluptatibus praesentium sit! Fugit vitae error ratione
            animi nobis repellat, aliquam suscipit.
          </p>
        </Portal>

        <p className="heading mt-20">Progress</p>
        <Progress className="rounded-full mt-6 text-xs" value={75}>
          <Progress.Bar className="flex items-center justify-center" />
        </Progress>

        <p className="heading mt-20">QrCode</p>
        <QrCode
          options={{ width: 384 }}
          className="mt-6 w-96 rounded-lg"
          value="https://github.com/FarzadVav"
        />

        <p className="heading mt-20">Rating</p>
        <Rating className="flex items-center mt-6" direction="x">
          <Rating.Items
            count={5}
            value={rating}
            onValueChange={setRating}
            element={<StarIcon className="size-9" />}
            activeElement={<StarIcon className="fill-foreground size-9" />}
            className="transition-all px-1 not-active:hover:-translate-y-1 active:scale-90 focus-visible:animate-bounce focus-visible:outline-none"
          />
        </Rating>

        <p className="heading mt-20">SelectBox</p>
        <div className="mt-6">
          <p className="title">With state:</p>
          <p className="mt-3">Single select mode:</p>
          <SelectBoxWithState
            direction="y"
            className="mt-3"
            options={SELECT_BOX_OPTIONS}
            optionValue={singleSelectBoxValue}
            setOptionValue={singleSetSelectBoxValue}
          >
            <SelectBoxWithState.Input className="input input-soft group">
              <ChevronDownIcon className="transition-transform group-focus-within:-scale-y-100" />
              <SelectBoxWithState.Field
                className="input-field"
                placeholder="Select an option..."
              />
              <SelectBoxWithState.List className="card card-y bg-card *:shrink-0">
                <SelectBoxWithState.SearchInput className="input input-ghost-outline">
                  <SearchIcon />
                  <SelectBoxWithState.SearchField className="input-field" />
                </SelectBoxWithState.SearchInput>
                <SelectBoxWithState.Options className="btn btn-row data-[state=false]:not-hover:btn-ghost data-[state=false]:hover:btn-soft data-[state=true]:btn-fill" />
              </SelectBoxWithState.List>
            </SelectBoxWithState.Input>
          </SelectBoxWithState>

          <p className="title mt-6">Multi select mode:</p>
          <SelectBoxWithState
            multiSelect
            direction="y"
            className="mt-3"
            options={SELECT_BOX_OPTIONS}
            optionValue={multiSelectBoxValue}
            setOptionValue={setMultiSelectBoxValue}
          >
            <SelectBoxWithState.Input className="input input-soft group">
              <ChevronDownIcon className="transition-transform group-focus-within:-scale-y-100" />
              <SelectBoxWithState.Field
                className="input-field"
                placeholder="Select an option..."
              />
              <SelectBoxWithState.List className="card card-y bg-card *:shrink-0">
                <SelectBoxWithState.SearchInput className="input input-ghost-outline">
                  <SearchIcon />
                  <SelectBoxWithState.SearchField className="input-field" />
                </SelectBoxWithState.SearchInput>
                <SelectBoxWithState.Options className="btn btn-row data-[state=false]:not-hover:btn-ghost data-[state=false]:hover:btn-soft data-[state=true]:btn-fill" />
              </SelectBoxWithState.List>
            </SelectBoxWithState.Input>
          </SelectBoxWithState>

          <p id="selectbox-with-search-params" className="title mt-6">
            With search params:
          </p>
          <Suspense>
            <p className="mt-3">Single select mode:</p>
            <SelectBoxWithSearchParams
              direction="y"
              className="mt-3"
              options={SELECT_BOX_OPTIONS}
              valueKey="select-single"
            >
              <SelectBoxWithSearchParams.Input className="input input-soft group">
                <ChevronDownIcon className="transition-transform group-focus-within:-scale-y-100" />
                <SelectBoxWithSearchParams.Field
                  className="input-field"
                  placeholder="Select via search params..."
                />
                <SelectBoxWithSearchParams.List className="card card-y bg-card *:shrink-0">
                  <SelectBoxWithSearchParams.SearchInput className="input input-ghost-outline">
                    <SearchIcon />
                    <SelectBoxWithSearchParams.SearchField className="input-field" />
                  </SelectBoxWithSearchParams.SearchInput>
                  <SelectBoxWithSearchParams.Options className="btn btn-row data-[state=false]:not-hover:btn-ghost data-[state=false]:hover:btn-soft data-[state=true]:btn-fill" />
                </SelectBoxWithSearchParams.List>
              </SelectBoxWithSearchParams.Input>
            </SelectBoxWithSearchParams>

            <p className="title mt-6">Multi select mode:</p>
            <SelectBoxWithSearchParams
              multiSelect
              direction="y"
              className="mt-3"
              options={SELECT_BOX_OPTIONS}
              valueKey="select-multi"
            >
              <SelectBoxWithSearchParams.Input className="input input-soft group">
                <ChevronDownIcon className="transition-transform group-focus-within:-scale-y-100" />
                <SelectBoxWithSearchParams.Field
                  className="input-field"
                  placeholder="Select via search params..."
                />
                <SelectBoxWithSearchParams.List className="card card-y bg-card *:shrink-0">
                  <SelectBoxWithSearchParams.SearchInput className="input input-ghost-outline">
                    <SearchIcon />
                    <SelectBoxWithSearchParams.SearchField className="input-field" />
                  </SelectBoxWithSearchParams.SearchInput>
                  <SelectBoxWithSearchParams.Options className="btn btn-row data-[state=false]:not-hover:btn-ghost data-[state=false]:hover:btn-soft data-[state=true]:btn-fill" />
                </SelectBoxWithSearchParams.List>
              </SelectBoxWithSearchParams.Input>
            </SelectBoxWithSearchParams>
          </Suspense>
        </div>

        <p className="heading mt-20">ShowMore</p>
        <p className="title mt-6">With state:</p>
        <ShowMoreWithState className="max-w-96 mt-3" maxLines={4}>
          <ShowMoreWithState.Content>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Accusantium exercitationem repellendus debitis, dignissimos non
            quis! Fugit ducimus adipisci minus quas est expedita, voluptatibus
            minima ad facere quis, dolor ipsum debitis!
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad soluta
            ex esse!
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, nobis
            minima iure consequuntur totam dolor exercitationem libero numquam.
            Exercitationem necessitatibus voluptatem, repudiandae nihil neque
            iusto?
          </ShowMoreWithState.Content>

          <ShowMoreWithState.Fade className="show-more-fade" />

          <ShowMoreWithState.Toggle className="btn data-[state=false]:btn-ghost data-[state=true]:btn-fill mt-1.5">
            {(isShowMore) => (isShowMore ? "Show less" : "Show more")}
          </ShowMoreWithState.Toggle>
        </ShowMoreWithState>

        <p className="title mt-6">With search params:</p>
        <Suspense>
          <ShowMoreWithSearchParams
            className="max-w-96 mt-3"
            maxLines={4}
            openKey="showMore"
          >
            <ShowMoreWithSearchParams.Content>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusantium exercitationem repellendus debitis, dignissimos non
              quis! Fugit ducimus adipisci minus quas est expedita, voluptatibus
              minima ad facere quis, dolor ipsum debitis!
              <br />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
              soluta ex esse!
              <br />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic,
              nobis minima iure consequuntur totam dolor exercitationem libero
              numquam. Expanded state is synced with the `showMore=true` search
              param.
            </ShowMoreWithSearchParams.Content>

            <ShowMoreWithSearchParams.Fade className="show-more-fade" />

            <ShowMoreWithSearchParams.Toggle className="btn data-[state=false]:btn-ghost data-[state=true]:btn-fill mt-1.5">
              {(isShowMore) => (isShowMore ? "Show less" : "Show more")}
            </ShowMoreWithSearchParams.Toggle>
          </ShowMoreWithSearchParams>
        </Suspense>

        <p className="heading mt-20">Spoiler</p>
        <p className="mt-6">
          <Spoiler>
            Lorem ipsum dolor sit{" "}
            <Spoiler.Blur>amet consectetur adipisicing</Spoiler.Blur> elit.
            Officiis nemo incidunt tenetur assumenda consequuntur beatae harum
            iusto, libero labore! Ea quo dolore accusantium veniam illo vel quae
            nihil iure aliquid.
          </Spoiler>
        </p>

        <p className="heading mt-20">Submit</p>
        <form
          className="mt-6"
          action={async () => {
            await new Promise((resolve) => setTimeout(resolve, 2000));
          }}
        >
          <Submit className="btn btn-soft">
            {(isPending) => (
              <>
                <span>Send Message</span>
                {isPending ? (
                  <LoaderIcon className="animate-spin" />
                ) : (
                  <SendHorizonalIcon />
                )}
              </>
            )}
          </Submit>
        </form>

        <p className="heading mt-20">Swap</p>
        <div className="mt-6">
          <SwapWithState
            keys={SWAP_KEYS}
            activeKey={swapKey}
            setActiveKey={setSwapKey}
          >
            {SWAP_KEYS.map((key) => (
              <SwapWithState.Btn
                key={key}
                className="btn btn-soft"
                btnKey={key}
              >
                {(btnKey) => `Key ${btnKey}`}
              </SwapWithState.Btn>
            ))}
          </SwapWithState>
        </div>

        <p id="swap-with-search-params" className="title mt-6">
          With search params:
        </p>
        <Suspense>
          <SwapWithSearchParams keys={SWAP_KEYS} activeKeyKey="swap">
            {SWAP_KEYS.map((key) => (
              <SwapWithSearchParams.Btn
                key={key}
                className="btn btn-soft"
                btnKey={key}
              >
                {(btnKey) => `Key ${btnKey}`}
              </SwapWithSearchParams.Btn>
            ))}
          </SwapWithSearchParams>
        </Suspense>

        <p className="heading mt-20">LinkLoader</p>
        <Link className="btn btn-soft mt-6" href={"/test"}>
          <span>Test page</span>
          <LinkLoader>
            {(isPending) =>
              isPending ? (
                <LoaderIcon className="animate-spin" />
              ) : (
                <ArrowUpRightIcon />
              )
            }
          </LinkLoader>
        </Link>

        <p className="heading mt-20">Choice</p>
        <p className="title mt-6">With state:</p>
        <p className="mt-6">Filter mode:</p>
        <ChoiceWithState
          multiple
          direction="x"
          choiceState={filterChoice}
          onChoiceChange={setFilterChoice}
          className="flex items-center gap-3 mt-3"
        >
          <ChoiceWithState.Toggle
            choiceName="1"
            className="btn data-[state=false]:btn-soft data-[state=true]:btn-fill"
          >
            Filter 1
          </ChoiceWithState.Toggle>
          <ChoiceWithState.Toggle
            choiceName="2"
            className="btn data-[state=false]:btn-soft data-[state=true]:btn-fill"
          >
            Filter 2
          </ChoiceWithState.Toggle>
          <ChoiceWithState.Toggle
            choiceName="3"
            className="btn data-[state=false]:btn-soft data-[state=true]:btn-fill"
          >
            Filter 3
          </ChoiceWithState.Toggle>
        </ChoiceWithState>

        <p className="mt-6">Radio Mode:</p>
        <ChoiceWithState
          requiredOne
          direction="x"
          choiceState={radioChoice}
          onChoiceChange={setRadioChoice}
          className="flex items-center gap-3 mt-3"
        >
          <ChoiceWithState.Toggle
            choiceName="1"
            className="choice choice-xs choice-radio"
          >
            <ChoiceWithState.Thumb className="choice-radio-thumb" />
          </ChoiceWithState.Toggle>
          <ChoiceWithState.Toggle
            choiceName="2"
            className="choice choice-sm choice-radio"
          >
            <ChoiceWithState.Thumb className="choice-radio-thumb" />
          </ChoiceWithState.Toggle>
          <ChoiceWithState.Toggle
            className="choice choice-radio"
            choiceName="3"
          >
            <ChoiceWithState.Thumb className="choice-radio-thumb" />
          </ChoiceWithState.Toggle>
          <ChoiceWithState.Toggle
            choiceName="4"
            className="choice choice-lg choice-radio"
          >
            <ChoiceWithState.Thumb className="choice-radio-thumb" />
          </ChoiceWithState.Toggle>
          <ChoiceWithState.Toggle
            choiceName="5"
            className="choice choice-xl choice-radio"
          >
            <ChoiceWithState.Thumb className="choice-radio-thumb" />
          </ChoiceWithState.Toggle>
        </ChoiceWithState>

        <p className="mt-6">CheckBox Mode:</p>
        <ChoiceWithState
          multiple
          requiredOne
          direction="x"
          choiceState={checkboxChoice}
          onChoiceChange={setCheckboxChoice}
          className="flex items-center gap-3 mt-3"
        >
          <ChoiceWithState.Toggle
            choiceName="1"
            className="choice choice-xs choice-checkbox"
          >
            <ChoiceWithState.Thumb className="choice-checkbox-thumb">
              <CheckIcon />
            </ChoiceWithState.Thumb>
          </ChoiceWithState.Toggle>
          <ChoiceWithState.Toggle
            choiceName="2"
            className="choice choice-sm choice-checkbox"
          >
            <ChoiceWithState.Thumb className="choice-checkbox-thumb">
              <CheckIcon />
            </ChoiceWithState.Thumb>
          </ChoiceWithState.Toggle>
          <ChoiceWithState.Toggle
            className="choice choice-checkbox"
            choiceName="3"
          >
            <ChoiceWithState.Thumb className="choice-checkbox-thumb">
              <CheckIcon />
            </ChoiceWithState.Thumb>
          </ChoiceWithState.Toggle>
          <ChoiceWithState.Toggle
            className="choice choice-lg choice-checkbox"
            choiceName="4"
          >
            <ChoiceWithState.Thumb className="choice-checkbox-thumb">
              <CheckIcon />
            </ChoiceWithState.Thumb>
          </ChoiceWithState.Toggle>
          <ChoiceWithState.Toggle
            className="choice choice-xl choice-checkbox"
            choiceName="5"
          >
            <ChoiceWithState.Thumb className="choice-checkbox-thumb">
              <CheckIcon />
            </ChoiceWithState.Thumb>
          </ChoiceWithState.Toggle>
        </ChoiceWithState>

        <p className="mt-6">Switch mode:</p>
        <ChoiceWithState
          multiple
          direction="x"
          choiceState={switchChoice}
          onChoiceChange={setSwitchChoice}
          className="flex items-center gap-3 mt-3"
        >
          <ChoiceWithState.Toggle
            className="choice choice-xs choice-switch"
            choiceName="1"
          >
            <span className="choice-switch-thumb" />
          </ChoiceWithState.Toggle>
          <ChoiceWithState.Toggle
            className="choice choice-sm choice-switch"
            choiceName="2"
          >
            <span className="choice-switch-thumb" />
          </ChoiceWithState.Toggle>
          <ChoiceWithState.Toggle
            className="choice choice-switch"
            choiceName="3"
          >
            <span className="choice-switch-thumb" />
          </ChoiceWithState.Toggle>
          <ChoiceWithState.Toggle
            className="choice choice-lg choice-switch"
            choiceName="4"
          >
            <span className="choice-switch-thumb" />
          </ChoiceWithState.Toggle>
          <ChoiceWithState.Toggle
            className="choice choice-xl choice-switch placeholder:text-palette/50"
            choiceName="5"
          >
            <span className="choice-switch-thumb" />
          </ChoiceWithState.Toggle>
        </ChoiceWithState>

        <p className="title mt-6">With search params:</p>
        <Suspense>
          <p className="mt-6">Filter mode:</p>
          <ChoiceWithSearchParams
            multiple
            direction="x"
            choiceKey="choice-filter"
            className="flex items-center gap-3 mt-3"
          >
            <ChoiceWithSearchParams.Toggle
              choiceName="1"
              className="btn data-[state=false]:btn-soft data-[state=true]:btn-fill"
            >
              Filter 1
            </ChoiceWithSearchParams.Toggle>
            <ChoiceWithSearchParams.Toggle
              choiceName="2"
              className="btn data-[state=false]:btn-soft data-[state=true]:btn-fill"
            >
              Filter 2
            </ChoiceWithSearchParams.Toggle>
            <ChoiceWithSearchParams.Toggle
              choiceName="3"
              className="btn data-[state=false]:btn-soft data-[state=true]:btn-fill"
            >
              Filter 3
            </ChoiceWithSearchParams.Toggle>
          </ChoiceWithSearchParams>

          <p className="mt-6">Radio mode:</p>
          <ChoiceWithSearchParams
            requiredOne
            direction="x"
            choiceKey="choice-radio"
            className="flex items-center gap-3 mt-3"
          >
            <ChoiceWithSearchParams.Toggle
              choiceName="1"
              className="choice choice-xs choice-radio"
            >
              <ChoiceWithSearchParams.Thumb className="choice-radio-thumb" />
            </ChoiceWithSearchParams.Toggle>
            <ChoiceWithSearchParams.Toggle
              choiceName="2"
              className="choice choice-sm choice-radio"
            >
              <ChoiceWithSearchParams.Thumb className="choice-radio-thumb" />
            </ChoiceWithSearchParams.Toggle>
            <ChoiceWithSearchParams.Toggle
              className="choice choice-radio"
              choiceName="3"
            >
              <ChoiceWithSearchParams.Thumb className="choice-radio-thumb" />
            </ChoiceWithSearchParams.Toggle>
            <ChoiceWithSearchParams.Toggle
              choiceName="4"
              className="choice choice-lg choice-radio"
            >
              <ChoiceWithSearchParams.Thumb className="choice-radio-thumb" />
            </ChoiceWithSearchParams.Toggle>
            <ChoiceWithSearchParams.Toggle
              choiceName="5"
              className="choice choice-xl choice-radio"
            >
              <ChoiceWithSearchParams.Thumb className="choice-radio-thumb" />
            </ChoiceWithSearchParams.Toggle>
          </ChoiceWithSearchParams>

          <p className="mt-6">CheckBox mode:</p>
          <ChoiceWithSearchParams
            multiple
            requiredOne
            direction="x"
            choiceKey="choice-checkbox"
            className="flex items-center gap-3 mt-3"
          >
            <ChoiceWithSearchParams.Toggle
              choiceName="1"
              className="choice choice-xs choice-checkbox"
            >
              <ChoiceWithSearchParams.Thumb className="choice-checkbox-thumb">
                <CheckIcon />
              </ChoiceWithSearchParams.Thumb>
            </ChoiceWithSearchParams.Toggle>
            <ChoiceWithSearchParams.Toggle
              choiceName="2"
              className="choice choice-sm choice-checkbox"
            >
              <ChoiceWithSearchParams.Thumb className="choice-checkbox-thumb">
                <CheckIcon />
              </ChoiceWithSearchParams.Thumb>
            </ChoiceWithSearchParams.Toggle>
            <ChoiceWithSearchParams.Toggle
              className="choice choice-checkbox"
              choiceName="3"
            >
              <ChoiceWithSearchParams.Thumb className="choice-checkbox-thumb">
                <CheckIcon />
              </ChoiceWithSearchParams.Thumb>
            </ChoiceWithSearchParams.Toggle>
            <ChoiceWithSearchParams.Toggle
              className="choice choice-lg choice-checkbox"
              choiceName="4"
            >
              <ChoiceWithSearchParams.Thumb className="choice-checkbox-thumb">
                <CheckIcon />
              </ChoiceWithSearchParams.Thumb>
            </ChoiceWithSearchParams.Toggle>
            <ChoiceWithSearchParams.Toggle
              className="choice choice-xl choice-checkbox"
              choiceName="5"
            >
              <ChoiceWithSearchParams.Thumb className="choice-checkbox-thumb">
                <CheckIcon />
              </ChoiceWithSearchParams.Thumb>
            </ChoiceWithSearchParams.Toggle>
          </ChoiceWithSearchParams>

          <p className="mt-6">Switch mode:</p>
          <ChoiceWithSearchParams
            multiple
            direction="x"
            choiceKey="choice-switch"
            className="flex items-center gap-3 mt-3"
          >
            <ChoiceWithSearchParams.Toggle
              className="choice choice-xs choice-switch"
              choiceName="1"
            >
              <span className="choice-switch-thumb" />
            </ChoiceWithSearchParams.Toggle>
            <ChoiceWithSearchParams.Toggle
              className="choice choice-sm choice-switch"
              choiceName="2"
            >
              <span className="choice-switch-thumb" />
            </ChoiceWithSearchParams.Toggle>
            <ChoiceWithSearchParams.Toggle
              className="choice choice-switch"
              choiceName="3"
            >
              <span className="choice-switch-thumb" />
            </ChoiceWithSearchParams.Toggle>
            <ChoiceWithSearchParams.Toggle
              className="choice choice-lg choice-switch"
              choiceName="4"
            >
              <span className="choice-switch-thumb" />
            </ChoiceWithSearchParams.Toggle>
            <ChoiceWithSearchParams.Toggle
              className="choice choice-xl choice-switch placeholder:text-palette/50"
              choiceName="5"
            >
              <span className="choice-switch-thumb" />
            </ChoiceWithSearchParams.Toggle>
          </ChoiceWithSearchParams>
        </Suspense>
      </div>
    </>
  );
}

export default function PlaygroundPage() {
  return (
    <Suspense>
      <Page />
    </Suspense>
  );
}
