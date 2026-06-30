"use client";

import Link from "next/link";
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
  Accordion,
  AccordionWithSearchParams,
  Breadcrumbs,
  Choice,
  ChoiceWithSearchParams,
  ClientOnly,
  Clipboard,
  ContextMenu,
  DrawerSheet,
  DrawerSheetWithSearchParams,
  LinkLoader,
  Modal,
  ModalWithSearchParams,
  Otp,
  Pagination,
  PaginationWithSearchParams,
  PasswordInput,
  Popover,
  PopoverWithSearchParams,
  Portal,
  Progress,
  QrCode,
  Rating,
  Search,
  SelectBox,
  SelectBoxOptionT,
  SelectBoxWithSearchParams,
  ShowMore,
  ShowMoreWithSearchParams,
  Spoiler,
  Submit,
  Swap,
  SwapWithSearchParams,
  useTheme,
} from "@kadoui/react";
import { DemoLabel, Preview } from "@/components/docs/Preview";

const SELECT_BOX_OPTIONS: SelectBoxOptionT[] = [
  { name: "one", value: "One" },
  { name: "two", value: "Two" },
  { name: "three", value: "Three" },
  { name: "four", value: "Four" },
  { name: "five", value: "Five" },
  { name: "six", value: "Six" },
];

const SWAP_KEYS = ["one", "two", "three"];

const PAGES_WITH_STATE = [
  { name: "Hello world", component: <p className="text-sm">Page one content.</p> },
  { name: "Finish", component: <p className="text-sm">Page two content.</p> },
];

const ACCORDION_CONTENT = (
  <div className="card bg-card text-sm p-3">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos fugit accusamus
    unde, repellendus dolores, fuga nam commodi sapiente omnis voluptatum.
  </div>
);

function AccordionItems({ prefix = "" }: { prefix?: string }) {
  return (
    <>
      {["1", "2", "3"].map((id) => (
        <Accordion.Item key={id} itemName={id}>
          <Accordion.Toggle className="btn btn-full btn-row data-[state=true]:btn-fill data-[state=false]:btn-soft justify-between group">
            <span>
              {prefix}accordion {id}
            </span>
            <ChevronDownIcon className="transition-transform group-data-[state=true]:-scale-y-100" />
          </Accordion.Toggle>
          <Accordion.Body>
            <Accordion.Content className="pt-1">{ACCORDION_CONTENT}</Accordion.Content>
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </>
  );
}

export function AccessNavigationDemo() {
  return (
    <div className="space-y-6 w-full">
      <Preview title="X AccessNavigation">
        <AccessNavigation direction="x" className="join-x join-x-border">
          <button type="button" className="acn btn btn-soft">One</button>
          <button type="button" className="acn btn btn-soft">Two</button>
          <button type="button" className="acn btn btn-soft">Three</button>
          <button type="button" className="acn btn btn-soft">Four</button>
        </AccessNavigation>
      </Preview>
      <Preview title="Y AccessNavigation" layout="column">
        <AccessNavigation direction="y" className="card card-y bg-card w-full max-w-xs">
          <button type="button" className="acn btn btn-soft btn-row">One</button>
          <button type="button" className="acn btn btn-soft btn-row">Two</button>
          <button type="button" className="acn btn btn-soft btn-row">Three</button>
          <button type="button" className="acn btn btn-soft btn-row">Four</button>
        </AccessNavigation>
      </Preview>
    </div>
  );
}

export function AccordionDemo() {
  const [multiple, setMultiple] = useState<string[]>([]);
  const [single, setSingle] = useState<string | null>(null);

  return (
    <div className="space-y-6 w-full">
      <Preview title="Multiple mode" layout="column">
        <Accordion
          multiple
          direction="y"
          accordionState={multiple}
          onAccordionChange={setMultiple}
          className="w-full"
        >
          <AccordionItems />
        </Accordion>
      </Preview>
      <Preview title="Single mode" layout="column">
        <Accordion
          direction="y"
          accordionState={single}
          onAccordionChange={setSingle}
          className="w-full"
        >
          <AccordionItems />
        </Accordion>
      </Preview>
      <Preview title="With search params" layout="column">
        <Suspense fallback={<p className="text-sm text-foreground/50">Loading...</p>}>
          <AccordionWithSearchParams direction="y" accordionKey="accordion">
            {["1", "2"].map((id) => (
              <AccordionWithSearchParams.Item key={id} itemName={id}>
                <AccordionWithSearchParams.Toggle className="btn btn-full btn-row data-[state=true]:btn-fill data-[state=false]:btn-soft justify-between group">
                  <span>Search params accordion {id}</span>
                  <ChevronDownIcon className="transition-transform group-data-[state=true]:-scale-y-100" />
                </AccordionWithSearchParams.Toggle>
                <AccordionWithSearchParams.Body>
                  <AccordionWithSearchParams.Content className="pt-1">
                    {ACCORDION_CONTENT}
                  </AccordionWithSearchParams.Content>
                </AccordionWithSearchParams.Body>
              </AccordionWithSearchParams.Item>
            ))}
          </AccordionWithSearchParams>
        </Suspense>
      </Preview>
    </div>
  );
}

export function BreadcrumbsDemo() {
  return (
    <Preview>
      <Breadcrumbs className="flex items-center gap-3" separator={<ChevronRightIcon className="size-4" />}>
        <Breadcrumbs.Item>
          <button type="button" className="btn btn-ghost btn-link">Home</button>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <button type="button" className="btn btn-ghost btn-link">Articles</button>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item isLastItem>
          <button type="button" className="btn btn-fill">How to gain money?</button>
        </Breadcrumbs.Item>
      </Breadcrumbs>
    </Preview>
  );
}

export function ClientOnlyDemo() {
  return (
    <Preview layout="column">
      <p className="text-sm">There is server</p>
      <ClientOnly>
        <p className="text-sm text-primary">There is client (after mount)</p>
      </ClientOnly>
    </Preview>
  );
}

export function ClipboardDemo() {
  return (
    <Preview>
      <label htmlFor="copy-demo" className="input input-soft w-full max-w-sm">
        <input
          readOnly
          id="copy-demo"
          type="text"
          className="input-field"
          defaultValue="Kadoui-react"
        />
        <Clipboard
          text="Kadoui-react"
          copiedChildren={<CopyCheckIcon />}
          className="btn btn-ghost btn-square"
        >
          <CopyIcon />
        </Clipboard>
      </label>
    </Preview>
  );
}

export function ContextMenuDemo() {
  return (
    <Preview layout="column">
      <ContextMenu className="border-4 border-dashed border-foreground h-40 w-full relative">
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm text-foreground/60">
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
    </Preview>
  );
}

export function DrawerSheetDemo() {
  return (
    <Preview title="Bottom drawer" layout="column">
      <DrawerSheet>
        <DrawerSheet.Toggle className="btn btn-soft">Bottom</DrawerSheet.Toggle>
        <DrawerSheet.Portal className="glass">
          <DrawerSheet.Body className="flex flex-col">
            <DrawerSheet.Indicator className="p-3 bg-card flex items-center gap-3 justify-center border-b border-foreground/10">
              DrawerSheet at bottom
            </DrawerSheet.Indicator>
            <DrawerSheet.Content className="flex-1 p-3 bg-card">
              <label className="input input-ghost-outline">
                <SearchIcon />
                <input type="text" className="input-field" placeholder="Search..." data-drawer-sheet="focus" />
              </label>
              <p className="mt-3 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </DrawerSheet.Content>
            <DrawerSheet.Indicator className="p-3 bg-card flex items-center gap-3 border-t border-foreground/10">
              <DrawerSheet.Toggle className="btn btn-soft">OK By</DrawerSheet.Toggle>
              <DrawerSheet.Toggle className="btn btn-ghost btn-error">Close</DrawerSheet.Toggle>
            </DrawerSheet.Indicator>
          </DrawerSheet.Body>
        </DrawerSheet.Portal>
      </DrawerSheet>
      <DemoLabel>With gesture</DemoLabel>
      <DrawerSheet>
        <DrawerSheet.Toggle className="btn btn-soft">Bottom + gesture</DrawerSheet.Toggle>
        <DrawerSheet.Portal className="glass">
          <DrawerSheet.Body gesture className="flex flex-col">
            <DrawerSheet.Indicator className="mx-auto mt-2 h-1 w-12 rounded-full bg-foreground/20" />
            <DrawerSheet.Content className="p-3 bg-card text-sm">Drag down to dismiss.</DrawerSheet.Content>
          </DrawerSheet.Body>
        </DrawerSheet.Portal>
      </DrawerSheet>
      <DemoLabel>With search params</DemoLabel>
      <Suspense fallback={null}>
        <DrawerSheetWithSearchParams openKey="drawer">
          <DrawerSheetWithSearchParams.Toggle className="btn btn-soft">URL-synced drawer</DrawerSheetWithSearchParams.Toggle>
          <DrawerSheetWithSearchParams.Portal className="glass">
            <DrawerSheetWithSearchParams.Body className="p-3 bg-card text-sm">
              Synced with <code>drawer=true</code> search param.
            </DrawerSheetWithSearchParams.Body>
          </DrawerSheetWithSearchParams.Portal>
        </DrawerSheetWithSearchParams>
      </Suspense>
    </Preview>
  );
}

export function ModalDemo() {
  return (
    <div className="space-y-6 w-full">
      <Preview title="Short content modal" layout="column">
        <Modal>
          <Modal.Toggle className="btn btn-soft">Open Short Content Modal</Modal.Toggle>
          <Modal.Portal className="glass p-3 flex justify-center items-center">
            <Modal.Body className="w-lg flex items-stretch justify-center flex-col max-w-lg w-full">
              <Modal.Indicator className="shrink-0 p-3 bg-card rounded-t-2xl border-b border-foreground/10">
                <label className="input input-ghost-outline input-full">
                  <SearchIcon />
                  <input type="text" data-modal="focus" className="input-field" placeholder="Search..." />
                </label>
              </Modal.Indicator>
              <Modal.Content className="flex-1 p-3 bg-card text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Modal.Content>
              <Modal.Indicator className="shrink-0 p-3 bg-card flex items-center gap-3 rounded-b-2xl border-t border-foreground/10">
                <p className="font-bold mr-auto">Do you trust she?</p>
                <Modal.Toggle className="btn btn-soft btn-error">No</Modal.Toggle>
                <Modal.Toggle className="btn btn-fill btn-success">Yes</Modal.Toggle>
              </Modal.Indicator>
            </Modal.Body>
          </Modal.Portal>
        </Modal>
      </Preview>
      <Preview title="With search params" layout="column">
        <Suspense fallback={null}>
          <ModalWithSearchParams openKey="modal">
            <ModalWithSearchParams.Toggle className="btn btn-soft">Open modal via search params</ModalWithSearchParams.Toggle>
            <ModalWithSearchParams.Portal className="glass p-3 flex justify-center items-center">
              <ModalWithSearchParams.Body className="w-lg flex flex-col max-w-lg w-full">
                <ModalWithSearchParams.Indicator className="p-3 bg-card rounded-t-2xl border-b border-foreground/10 font-bold">
                  Modal synced with URL
                </ModalWithSearchParams.Indicator>
                <ModalWithSearchParams.Content className="p-3 bg-card text-sm">
                  Open state syncs with <code>modal=true</code>.
                </ModalWithSearchParams.Content>
                <ModalWithSearchParams.Indicator className="p-3 bg-card rounded-b-2xl border-t border-foreground/10">
                  <ModalWithSearchParams.Toggle className="btn btn-soft">Close</ModalWithSearchParams.Toggle>
                </ModalWithSearchParams.Indicator>
              </ModalWithSearchParams.Body>
            </ModalWithSearchParams.Portal>
          </ModalWithSearchParams>
        </Suspense>
      </Preview>
    </div>
  );
}

export function OtpDemo() {
  return (
    <Preview>
      <form
        className="w-full"
        onSubmit={(ev) => {
          ev.preventDefault();
          const fd = new FormData(ev.currentTarget);
          alert("OTP: " + fd.get("otp"));
        }}
      >
        <Otp className="flex items-center gap-3">
          <Otp.Inputs length={6} className="input input-ghost-outline input-square" />
          <Otp.HiddenInput name="otp" />
        </Otp>
      </form>
    </Preview>
  );
}

export function PaginationDemo() {
  const [page, setPage] = useState(1);
  const [pageWithPages, setPageWithPages] = useState(1);
  const [pageHigh, setPageHigh] = useState(1);

  return (
    <div className="space-y-6 w-full">
      <Preview title="Numbered pages" layout="column">
        <p className="text-sm text-foreground/70">Page is {page}</p>
        <Pagination pagesLength={6} page={page} setPage={setPage}>
          <div className="flex items-center gap-3">
            <Pagination.PrevBtn className="btn btn-soft btn-square">
              <ChevronLeftIcon />
            </Pagination.PrevBtn>
            <Pagination.Counts className="btn btn-square data-[state=false]:btn-ghost data-[state=true]:btn-fill" />
            <Pagination.NextBtn className="btn btn-soft btn-square">
              <ChevronRightIcon />
            </Pagination.NextBtn>
          </div>
        </Pagination>
      </Preview>

      <Preview title="Custom page components" layout="column">
        <Pagination page={pageWithPages} pages={PAGES_WITH_STATE} setPage={setPageWithPages}>
          <div className="w-full max-w-md">
            <Pagination.Pages />
            <div className="flex items-center gap-3 mt-3">
              <Pagination.PrevBtn className="btn btn-soft btn-square">
                <ChevronLeftIcon />
              </Pagination.PrevBtn>
              <Pagination.Counts className="btn data-[state=false]:btn-ghost data-[state=true]:btn-fill">
                {(n) => `Page Number ${n}`}
              </Pagination.Counts>
              <Pagination.NextBtn className="btn btn-soft btn-square">
                <ChevronRightIcon />
              </Pagination.NextBtn>
            </div>
          </div>
        </Pagination>
      </Preview>

      <Preview title="Tab style" layout="column">
        <Pagination page={pageWithPages} pages={PAGES_WITH_STATE} setPage={setPageWithPages}>
          <div className="join-x join-x-no-border">
            <Pagination.Counts className="btn data-[state=false]:btn-ghost-outline data-[state=true]:btn-soft-outline rounded-b-none border-b-0!">
              {(n) => `Tab ${n}`}
            </Pagination.Counts>
          </div>
          <div className="card bg-card rounded-tl-none p-3">
            <Pagination.Pages />
          </div>
        </Pagination>
      </Preview>

      <Preview title="High page count (responsive ellipsis)" layout="column">
        <p className="text-sm">Page is {pageHigh}</p>
        <Pagination pagesLength={50} page={pageHigh} setPage={setPageHigh}>
          <div className="flex items-center gap-3">
            <Pagination.PrevBtn className="btn btn-soft btn-square">
              <ChevronLeftIcon />
            </Pagination.PrevBtn>
            <Pagination.Counts
              responsive
              siblings={1}
              className="btn btn-square data-[state=false]:btn-ghost data-[state=true]:btn-fill"
            />
            <Pagination.NextBtn className="btn btn-soft btn-square">
              <ChevronRightIcon />
            </Pagination.NextBtn>
          </div>
        </Pagination>
      </Preview>

      <Preview title="With search params" layout="column">
        <Suspense fallback={null}>
          <PaginationWithSearchParams pagesLength={6}>
            <div className="flex items-center gap-3">
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
      </Preview>
    </div>
  );
}

export function PasswordInputDemo() {
  return (
    <Preview>
      <PasswordInput className="input input-ghost-outline input-xl w-full max-w-sm">
        <span>Password:</span>
        <PasswordInput.Field className="input-field" placeholder="Enter password" />
        <PasswordInput.Toggle
          className="btn btn-ghost btn-square btn-xl btn-in-input"
          visibleChildren={<EyeIcon />}
        >
          <EyeClosedIcon />
        </PasswordInput.Toggle>
      </PasswordInput>
    </Preview>
  );
}

export function PopoverDemo() {
  return (
    <div className="space-y-6 w-full">
      <Preview title="Trigger modes" layout="column">
        <Popover mode="hover" direction="y">
          <Popover.Toggle className="btn btn-soft">Hover me</Popover.Toggle>
          <Popover.Body className="card card-menu bg-card" position="bottom-left-in">
            Lorem ipsum dolor sit amet, consectetur adipisicing.
          </Popover.Body>
        </Popover>
        <Popover mode="both" direction="y">
          <Popover.Toggle className="btn btn-soft">Hover and click me</Popover.Toggle>
          <Popover.Body position="bottom-left-in" className="card card-menu bg-card">
            Lorem ipsum dolor sit amet, consectetur adipisicing.
          </Popover.Body>
        </Popover>
        <Popover mode="click" direction="y">
          <Popover.Toggle className="btn acn data-[state=false]:btn-soft data-[state=true]:btn-fill">
            Click me
          </Popover.Toggle>
          <Popover.Body position="bottom-left-in" className="card card-menu card-y bg-card">
            <button type="button" className="btn btn-ghost btn-row acn">Like</button>
            <button type="button" className="btn btn-ghost btn-row acn">Ignore</button>
            <button type="button" className="btn btn-ghost btn-row acn">Download</button>
            <Popover direction="y">
              <Popover.Toggle className="btn acn data-[state=false]:btn-ghost data-[state=true]:btn-soft">
                <span>Share via</span>
                <ChevronRightIcon />
              </Popover.Toggle>
              <Popover.Body className="card card-menu card-y bg-card" position="right-center" offset={16}>
                <button type="button" className="btn btn-ghost btn-row acn">Link</button>
                <button type="button" className="btn btn-ghost btn-row acn">Instagram</button>
                <button type="button" className="btn btn-ghost btn-row acn">Telegram</button>
              </Popover.Body>
            </Popover>
          </Popover.Body>
        </Popover>
      </Preview>
      <Preview title="With search params" layout="column">
        <Suspense fallback={null}>
          <PopoverWithSearchParams mode="click" direction="y" openKey="popover">
            <PopoverWithSearchParams.Toggle className="btn data-[state=false]:btn-soft data-[state=true]:btn-fill">
              Popover via search params
            </PopoverWithSearchParams.Toggle>
            <PopoverWithSearchParams.Body className="card card-menu bg-card" position="bottom-left-in">
              Synced with <code>popover=true</code>.
            </PopoverWithSearchParams.Body>
          </PopoverWithSearchParams>
        </Suspense>
      </Preview>
    </div>
  );
}

export function PortalDemo() {
  return (
    <Preview layout="column">
      <p className="text-sm text-foreground/70">
        Portal renders at the end of the page body. Scroll to the bottom after opening docs.
      </p>
      <Portal>
        <p className="text-xs text-foreground/40 border border-dashed border-foreground/20 p-3 rounded-lg">
          PORTAL: This content is portaled to document.body.
        </p>
      </Portal>
    </Preview>
  );
}

export function ProgressDemo() {
  return (
    <Preview layout="column">
      <Progress className="h-2 flex items-center bg-card rounded-full text-xs w-full max-w-sm" value={75}>
        <Progress.Bar className="h-6 size-full rounded-[inherit] bg-primary text-primary-foreground flex items-center justify-center" />
      </Progress>
    </Preview>
  );
}

export function QrCodeDemo() {
  return (
    <Preview>
      <QrCode options={{ width: 192 }} className="w-fix rounded-xl" value="https://github.com/FarzadVav" />
    </Preview>
  );
}

export function RatingDemo() {
  const [rating, setRating] = useState(3);

  return (
    <Preview>
      <Rating className="w-fix flex items-center" direction="x">
        <Rating.Items
          count={5}
          value={rating}
          onValueChange={setRating}
          element={<StarIcon className="size-9" />}
          activeElement={<StarIcon className="fill-foreground size-9" />}
          className="transition-all px-1 not-active:hover:-translate-y-1 active:scale-90 focus-visible:outline-none"
        />
      </Rating>
    </Preview>
  );
}

export function SearchDemo() {
  return (
    <div className="space-y-6 w-full">
      <Preview title="Local state" layout="column">
        <Search className="input input-soft-outline w-full max-w-sm" htmlFor="search-1">
          <Search.ClearBtn className="btn btn-in-input btn-ghost btn-square btn-error">
            <TrashIcon />
          </Search.ClearBtn>
          <Search.Field id="search-1" className="input-field" placeholder="Search..." />
          <Search.SubmitBtn className="btn btn-in-input btn-ghost">Search</Search.SubmitBtn>
        </Search>
      </Preview>
      <Preview title="URL synced (searchKey)" layout="column">
        <Search searchKey="s" baseUrl="/docs/react/search" htmlFor="search-2" className="input input-soft-outline w-full max-w-sm">
          <Search.ClearBtn hiddenOnEmpty className="btn btn-in-input btn-ghost btn-square btn-error">
            <TrashIcon />
          </Search.ClearBtn>
          <Search.Field id="search-2" className="input-field" placeholder="Search..." />
          <Search.SubmitBtn hiddenOnEqual className="btn btn-in-input btn-ghost">Search</Search.SubmitBtn>
        </Search>
      </Preview>
    </div>
  );
}

function SelectBoxSingle({
  value,
  setValue,
  placeholder = "Select an option...",
}: {
  value: SelectBoxOptionT | null;
  setValue: (v: SelectBoxOptionT | null) => void;
  placeholder?: string;
}) {
  return (
    <SelectBox direction="y" options={SELECT_BOX_OPTIONS} optionValue={value} setOptionValue={setValue}>
      <SelectBox.Input className="input input-soft">
        <SelectBox.Toggle className="transition-transform data-[state=true]:-scale-y-100">
          <ChevronDownIcon />
        </SelectBox.Toggle>
        <SelectBox.Field className="input-field" placeholder={placeholder} readOnly />
        <SelectBox.List className="card card-y bg-card *:shrink-0">
          <SelectBox.SearchInput className="input input-ghost-outline">
            <SearchIcon />
            <SelectBox.SearchField className="input-field" />
          </SelectBox.SearchInput>
          <SelectBox.Options className="btn btn-row data-[state=false]:not-hover:btn-ghost data-[state=false]:hover:btn-soft data-[state=true]:btn-fill" />
        </SelectBox.List>
      </SelectBox.Input>
    </SelectBox>
  );
}

function SelectBoxMulti({
  value,
  setValue,
}: {
  value: SelectBoxOptionT[];
  setValue: (v: SelectBoxOptionT[]) => void;
}) {
  return (
    <SelectBox multiSelect direction="y" options={SELECT_BOX_OPTIONS} optionValue={value} setOptionValue={setValue}>
      <SelectBox.Input className="input input-soft">
        <SelectBox.Toggle className="transition-transform data-[state=true]:-scale-y-100">
          <ChevronDownIcon />
        </SelectBox.Toggle>
        <SelectBox.Field className="input-field" placeholder="Select options..." readOnly />
        <SelectBox.List className="card card-y bg-card *:shrink-0">
          <SelectBox.SearchInput className="input input-ghost-outline">
            <SearchIcon />
            <SelectBox.SearchField className="input-field" />
          </SelectBox.SearchInput>
          <SelectBox.Options className="btn btn-row data-[state=false]:not-hover:btn-ghost data-[state=false]:hover:btn-soft data-[state=true]:btn-fill" />
        </SelectBox.List>
      </SelectBox.Input>
    </SelectBox>
  );
}

export function SelectBoxDemo() {
  const [single, setSingle] = useState<SelectBoxOptionT | null>(null);
  const [multi, setMulti] = useState<SelectBoxOptionT[]>([]);

  return (
    <div className="space-y-6 w-full">
      <Preview title="Single select" layout="column">
        <SelectBoxSingle value={single} setValue={setSingle} />
      </Preview>
      <Preview title="Multi select" layout="column">
        <SelectBoxMulti value={multi} setValue={setMulti} />
      </Preview>
      <Preview title="With search params" layout="column">
        <Suspense fallback={null}>
          <SelectBoxWithSearchParams direction="y" options={SELECT_BOX_OPTIONS} valueKey="select-single">
            <SelectBoxWithSearchParams.Input className="input input-soft">
              <SelectBoxWithSearchParams.Toggle className="transition-transform data-[state=true]:-scale-y-100">
                <ChevronDownIcon />
              </SelectBoxWithSearchParams.Toggle>
              <SelectBoxWithSearchParams.Field className="input-field" placeholder="Select via search params..." readOnly />
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
      </Preview>
    </div>
  );
}

const SHOW_MORE_TEXT = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium exercitationem repellendus debitis, dignissimos non quis! Fugit ducimus adipisci minus quas est expedita, voluptatibus minima ad facere quis, dolor ipsum debitis!
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad soluta ex esse!
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, nobis minima iure consequuntur totam dolor exercitationem libero numquam.`;

export function ShowMoreDemo() {
  return (
    <div className="space-y-6 w-full">
      <Preview title="With state" layout="column">
        <ShowMore className="max-w-96" maxLines={4}>
          <ShowMore.Content className="transition-all text-sm">{SHOW_MORE_TEXT}</ShowMore.Content>
          <ShowMore.Fade className="bg-linear-to-t from-background from-30% to-transparent" />
          <ShowMore.Toggle className="btn data-[state=false]:btn-ghost data-[state=true]:btn-fill mt-1.5">
            {(isShowMore) => (isShowMore ? "Show less" : "Show more")}
          </ShowMore.Toggle>
        </ShowMore>
      </Preview>
      <Preview title="With search params" layout="column">
        <Suspense fallback={null}>
          <ShowMoreWithSearchParams className="max-w-96" maxLines={4} openKey="showMore">
            <ShowMoreWithSearchParams.Content className="transition-all text-sm">{SHOW_MORE_TEXT}</ShowMoreWithSearchParams.Content>
            <ShowMoreWithSearchParams.Fade className="bg-linear-to-t from-background from-30% to-transparent" />
            <ShowMoreWithSearchParams.Toggle className="btn data-[state=false]:btn-ghost data-[state=true]:btn-fill mt-1.5">
              {(isShowMore) => (isShowMore ? "Show less" : "Show more")}
            </ShowMoreWithSearchParams.Toggle>
          </ShowMoreWithSearchParams>
        </Suspense>
      </Preview>
    </div>
  );
}

export function SpoilerDemo() {
  return (
    <Preview layout="column">
      <p className="text-sm">
        <Spoiler>
          Lorem ipsum dolor sit{" "}
          <Spoiler.Blur className="transition-all data-[state=false]:blur-xs data-[state=false]:scale-95 data-[state=false]">
            amet consectetur adipisicing
          </Spoiler.Blur>{" "}
          elit. Officiis nemo incidunt tenetur assumenda consequuntur beatae harum iusto.
        </Spoiler>
      </p>
    </Preview>
  );
}

export function SubmitDemo() {
  return (
    <Preview>
      <form
        action={async () => {
          await new Promise((resolve) => setTimeout(resolve, 2000));
        }}
      >
        <Submit className="btn btn-soft">
          {(isPending) => (
            <>
              <span>Send Message</span>
              {isPending ? <LoaderIcon className="animate-spin" /> : <SendHorizonalIcon />}
            </>
          )}
        </Submit>
      </form>
    </Preview>
  );
}

export function SwapDemo() {
  const [swapKey, setSwapKey] = useState(SWAP_KEYS[0] as string);

  return (
    <div className="space-y-6 w-full">
      <Preview title="With state">
        <Swap keys={SWAP_KEYS} activeKey={swapKey} setActiveKey={setSwapKey}>
          {SWAP_KEYS.map((key) => (
            <Swap.Btn key={key} className="btn btn-soft" btnKey={key}>
              {(btnKey) => `Key ${btnKey}`}
            </Swap.Btn>
          ))}
        </Swap>
      </Preview>
      <Preview title="With search params">
        <Suspense fallback={null}>
          <SwapWithSearchParams keys={SWAP_KEYS} activeKeyKey="swap">
            {SWAP_KEYS.map((key) => (
              <SwapWithSearchParams.Btn key={key} className="btn btn-soft" btnKey={key}>
                {(btnKey) => `Key ${btnKey}`}
              </SwapWithSearchParams.Btn>
            ))}
          </SwapWithSearchParams>
        </Suspense>
      </Preview>
    </div>
  );
}

export function LinkLoaderDemo() {
  return (
    <Preview>
      <Link className="btn btn-soft" href="/docs/getting-started">
        <span>Getting started</span>
        <LinkLoader>
          {(isPending) =>
            isPending ? <LoaderIcon className="animate-spin" /> : <ArrowUpRightIcon />
          }
        </LinkLoader>
      </Link>
    </Preview>
  );
}

export function ChoiceDemo() {
  const [filterChoice, setFilterChoice] = useState<string[]>([]);
  const [radioChoice, setRadioChoice] = useState<string | null>("1");
  const [checkboxChoice, setCheckboxChoice] = useState<string[]>(["1"]);
  const [switchChoice, setSwitchChoice] = useState<string[]>([]);

  return (
    <div className="space-y-6 w-full">
      <Preview title="Filter mode (multiple)" layout="column">
        <Choice multiple direction="x" choiceState={filterChoice} onChoiceChange={setFilterChoice} className="flex items-center gap-3">
          {["1", "2", "3"].map((n) => (
            <Choice.Toggle key={n} choiceName={n} className="btn data-[state=false]:btn-soft data-[state=true]:btn-fill">
              Filter {n}
            </Choice.Toggle>
          ))}
        </Choice>
      </Preview>

      <Preview title="Radio mode (requiredOne)" layout="column">
        <Choice requiredOne direction="x" choiceState={radioChoice} onChoiceChange={setRadioChoice} className="flex items-center gap-3">
          {(["xs", "sm", "", "lg", "xl"] as const).map((size, i) => (
            <Choice.Toggle
              key={i}
              choiceName={String(i + 1)}
              className={`choice choice-radio ${size ? `choice-${size}` : ""}`}
            >
              <Choice.Thumb className="choice-radio-thumb" />
            </Choice.Toggle>
          ))}
        </Choice>
      </Preview>

      <Preview title="Checkbox mode (multiple + requiredOne)" layout="column">
        <Choice multiple requiredOne direction="x" choiceState={checkboxChoice} onChoiceChange={setCheckboxChoice} className="flex items-center gap-3">
          {(["xs", "sm", "", "lg", "xl"] as const).map((size, i) => (
            <Choice.Toggle key={i} choiceName={String(i + 1)} className={`choice choice-checkbox ${size ? `choice-${size}` : ""}`}>
              <Choice.Thumb className="choice-checkbox-thumb">
                <CheckIcon className="size-3" />
              </Choice.Thumb>
            </Choice.Toggle>
          ))}
        </Choice>
      </Preview>

      <Preview title="Switch mode (multiple)" layout="column">
        <Choice multiple direction="x" choiceState={switchChoice} onChoiceChange={setSwitchChoice} className="flex items-center gap-3">
          {(["xs", "sm", "", "lg", "xl"] as const).map((size, i) => (
            <Choice.Toggle key={i} choiceName={String(i + 1)} className={`choice choice-switch ${size ? `choice-${size}` : ""}`}>
              <span className="choice-switch-thumb" />
            </Choice.Toggle>
          ))}
        </Choice>
      </Preview>

      <Preview title="With search params — filter mode" layout="column">
        <Suspense fallback={null}>
          <ChoiceWithSearchParams multiple direction="x" choiceKey="choice-filter" className="flex items-center gap-3">
            {["1", "2", "3"].map((n) => (
              <ChoiceWithSearchParams.Toggle key={n} choiceName={n} className="btn data-[state=false]:btn-soft data-[state=true]:btn-fill">
                Filter {n}
              </ChoiceWithSearchParams.Toggle>
            ))}
          </ChoiceWithSearchParams>
        </Suspense>
      </Preview>
    </div>
  );
}

export function ThemeDemo() {
  const { theme, setTheme } = useTheme();

  return (
    <Preview>
      {(["light", "dark", "system"] as const).map((t) => (
        <button
          key={t}
          type="button"
          className={`btn btn-sm ${theme === t ? "btn-fill btn-primary" : "btn-soft btn-foreground"}`}
          onClick={() => setTheme(t)}
        >
          {t}
        </button>
      ))}
    </Preview>
  );
}

export function AffixDemo() {
  return (
    <p className="text-sm text-foreground/60 w-full">
      Scroll the page — an Affix scroll-to-top button appears at the bottom-right (same as playground layout).
    </p>
  );
}

export function SuspenseBoundary({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={<div className="text-sm text-foreground/50">Loading...</div>}>{children}</Suspense>;
}
