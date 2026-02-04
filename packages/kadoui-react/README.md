# Kadoui-react

Primitive components for `React` powered by `Kadoui-css` styles.

We recommend use `Kadoui-css` for styling the components:
[Read about `Kadoui-css`](https://www.npmjs.com/package/@kadoui/css)

Also use `lucide-react` for icons:
[Read about `lucide-react`](https://www.npmjs.com/package/lucide-react)

---

### AccessNavigation

For add arrow-key nagivations to your UIs.

```tsx
<AccessNavigation
  direction="x"
  className="join mt-6">
  <button className="btn btn-soft">One</button>
  <button className="btn btn-soft">Two</button>
  <button className="btn btn-soft">Three</button>
  <button className="btn btn-soft">Four</button>
</AccessNavigation>
```

### Accordion

```tsx
<Accordion>
  <Accordion.Toggle className="btn btn-full data-[state=true]:btn-fill data-[state=false]:btn-soft justify-between mt-6 group">
    <span>Open accordion</span>
    <ChevronDownIcon className="transition-transform btn-icon-size group-data-[state=true]:-scale-y-100" />
  </Accordion.Toggle>
  <Accordion.Body>
    <p className="p-3">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos fugit accusamus unde,
      repellendus dolores, fuga nam commodi sapiente omnis voluptatum error earum culpa
      asperiores eaque ea enim possimus vero esse!
    </p>
  </Accordion.Body>
</Accordion>
```

### Breadcrumbs

```tsx
<Breadcrumbs className="breadcrumbs">
  <Breadcrumbs.Item className="breadcrumbs-item">
    <button className="btn btn-soft">Home</button>
  </Breadcrumbs.Item>
  <Breadcrumbs.Item className="breadcrumbs-item">
    <button className="btn btn-soft">Articles</button>
  </Breadcrumbs.Item>
  <Breadcrumbs.Item
    className="breadcrumbs-item"
    isLastItem>
    <button className="btn btn-fill">How to gain money?</button>
  </Breadcrumbs.Item>
</Breadcrumbs>
```

or

```tsx
<Breadcrumbs className="breadcrumbs">
  <Breadcrumbs.Item className="breadcrumbs-item">
    <button className="btn btn-soft">Home</button>
  </Breadcrumbs.Item>
  <Breadcrumbs.Item className="breadcrumbs-item">
    <button className="btn btn-soft">Articles</button>
  </Breadcrumbs.Item>
  <Breadcrumbs.Item
    className="breadcrumbs-item"
    isLastItem>
    <button className="btn btn-fill">How to gain money?</button>
  </Breadcrumbs.Item>
</Breadcrumbs>
```

### Carousel

```tsx
<Carousel className="carousel">
  <Carousel.LeftFade className="carousel-left-fade" />
  <Carousel.RightFade className="carousel-right-fade" />

  <Carousel.Container className="carousel-container gap-3 scroll-smooth">
    {Array.from({ length: 12 }).map((_, index) => (
      <article
        key={index}
        className="carousel-children card slidable">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores doloremque
        error rem ex, necessitatibus dolore deleniti alias aperiam cum ipsum, suscipit
        possimus porro provident totam mollitia? Voluptate, eaque quas. Culpa.
      </article>
    ))}
  </Carousel.Container>

  <div className="f-center gap-3 mt-3">
    <Carousel.PrevBtn className="btn btn-outline btn-square">
      <ArrowLeftIcon className="btn-icon-size" />
    </Carousel.PrevBtn>
    <Carousel.NextBtn className="btn btn-outline btn-square">
      <ArrowRightIcon className="btn-icon-size" />
    </Carousel.NextBtn>
  </div>
</Carousel>
```

### ClientOnly

```tsx
<p>There is server</p>
<ClientOnly>
  <p>There is client</p>
</ClientOnly>
```

### Clipboard

```tsx
<Clipboard
  text="Kadoui-react"
  className="btn btn-soft btn-square"
  copiedChildren={<CopyCheckIcon className="btn-icon-size" />}>
  <CopyIcon className="btn-icon-size" />
</Clipboard>
```

### ContextMenu

```tsx
<ContextMenu className="context-menu border-4 border-dashed border-foreground h-[33vh]">
  <span className="absolute inset-center">Context menu!</span>

  <ContextMenu.Body className="context-menu-body">
    <AccessNavigation className="card card-menu card-y">
      <button className="btn btn-ghost">
        <TrashIcon className="compatible-icon" />
        <span>DELETE</span>
      </button>
      <button className="btn btn-ghost">
        <RefreshCwIcon className="compatible-icon" />
        <span>RELOAD</span>
      </button>
      <button className="btn btn-ghost">
        <FlagIcon className="compatible-icon" />
        <span>IGNORE IT</span>
      </button>
    </AccessNavigation>
  </ContextMenu.Body>
</ContextMenu>
```

### Drawer

```tsx
<Drawer>
  <Drawer.Toggle className="btn btn-soft">Open left drawer</Drawer.Toggle>

  <Drawer.Portal className="drawer-portal">
    <Drawer.Body className="drawer-body">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum porro vero delectus
      eum qui laboriosam, dolore veritatis eligendi amet voluptatibus incidunt temporibus
      dolores fuga adipisci eius saepe quod aspernatur iure.
    </Drawer.Body>
  </Drawer.Portal>
</Drawer>
```

or

```tsx
<Drawer>
  <Drawer.Toggle className="btn btn-soft">Open top drawer</Drawer.Toggle>

  <Drawer.Portal className="drawer-portal">
    <Drawer.Body
      className="drawer-body"
      position="top">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum porro vero delectus
      eum qui laboriosam, dolore veritatis eligendi amet voluptatibus incidunt temporibus
      dolores fuga adipisci eius saepe quod aspernatur iure.
    </Drawer.Body>
  </Drawer.Portal>
</Drawer>
```

or

```tsx
<Drawer>
  <Drawer.Toggle className="btn btn-soft">Open right drawer</Drawer.Toggle>

  <Drawer.Portal className="drawer-portal">
    <Drawer.Body
      className="drawer-body"
      position="right">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum porro vero delectus
      eum qui laboriosam, dolore veritatis eligendi amet voluptatibus incidunt temporibus
      dolores fuga adipisci eius saepe quod aspernatur iure.
    </Drawer.Body>
  </Drawer.Portal>
</Drawer>
```

or

```tsx
<Drawer>
  <Drawer.Toggle className="btn btn-soft">Open bottom drawer</Drawer.Toggle>

  <Drawer.Portal className="drawer-portal">
    <Drawer.Body
      className="drawer-body"
      position="bottom">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum porro vero delectus
      eum qui laboriosam, dolore veritatis eligendi amet voluptatibus incidunt temporibus
      dolores fuga adipisci eius saepe quod aspernatur iure.
    </Drawer.Body>
  </Drawer.Portal>
</Drawer>
```

### Modal

```tsx
<Modal>
  <Modal.Toggle className="btn btn-soft">Open modal</Modal.Toggle>

  <Modal.Portal className="modal-portal">
    <Modal.Body className="modal-body">
      <Modal.Header className="modal-header font-bold justify-center">
        Say hello to modal
      </Modal.Header>
      <Modal.Content className="modal-content max-w-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ratione
        repudiandae eveniet quisquam, vitae, nobis iure voluptas harum est incidunt odio?
        Dolorem quod numquam placeat sed beatae, natus cum porro!
      </Modal.Content>
    </Modal.Body>
  </Modal.Portal>
</Modal>
```

### OTP

```tsx
<Otp className="otp">
  <Otp.Inputs
    length={6}
    className="input input-outline input-square"
    onLastChange={(otp) => alert(otp)}
  />

  <Otp.HiddenInput />
</Otp>
```

### Pagination

With state:

```tsx
<PaginationWithState pagesLength={6}>
  <div className="pagination">
    <PaginationWithState.PrevBtn className="btn btn-soft btn-square">
      <ChevronLeftIcon className="btn-icon-size" />
    </PaginationWithState.PrevBtn>

    <PaginationWithState.Counts className="btn data-[state=false]:btn-ghost data-[state=true]:btn-fill" />

    <PaginationWithState.NextBtn className="btn btn-soft btn-square">
      <ChevronRightIcon className="btn-icon-size" />
    </PaginationWithState.NextBtn>
  </div>
</PaginationWithState>
```

With search params:

```tsx
<Suspense>
  <PaginationWithSearchParams pagesLength={6}>
    <div className="pagination">
      <PaginationWithSearchParams.PrevBtn className="btn btn-soft btn-square">
        <ChevronLeftIcon className="btn-icon-size" />
      </PaginationWithSearchParams.PrevBtn>

      <PaginationWithSearchParams.Counts className="btn data-[state=false]:btn-ghost data-[state=true]:btn-fill" />

      <PaginationWithSearchParams.NextBtn className="btn btn-soft btn-square">
        <ChevronRightIcon className="btn-icon-size" />
      </PaginationWithSearchParams.NextBtn>
    </div>
  </PaginationWithSearchParams>
</Suspense>
```

### Pagination with pages

With state:

```tsx
const PAGES_WITH_STATE = [
  {
    name: "Hello world",
    component: (
      <p>
        One: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis officiis quia,
        dolores similique, cumque ut vel aspernatur non vitae voluptas reiciendis? Veniam,
        voluptates impedit soluta blanditiis ad nam eligendi dignissimos.
      </p>
    ),
  },
  {
    name: "Finish",
    component: (
      <p>
        Two: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis officiis quia,
        dolores similique, cumque ut vel aspernatur non vitae voluptas reiciendis? Veniam,
        voluptates impedit soluta blanditiis ad nam eligendi dignissimos.
      </p>
    ),
  },
];

<PaginationWithState pages={PAGES_WITH_STATE}>
  <div className="max-w-96">
    <PaginationWithState.Pages />

    <div className="pagination">
      <PaginationWithState.PrevBtn className="btn btn-soft btn-square">
        <ChevronLeftIcon className="btn-icon-size" />
      </PaginationWithState.PrevBtn>

      <PaginationWithState.Counts className="btn data-[state=false]:btn-ghost data-[state=true]:btn-fill" />

      <PaginationWithState.NextBtn className="btn btn-soft btn-square">
        <ChevronRightIcon className="btn-icon-size" />
      </PaginationWithState.NextBtn>
    </div>
  </div>
</PaginationWithState>;
```

With search params:

```tsx
const PAGES_WITH_SEARCHPARAMS = [
  {
    name: "Hello world",
    component: (
      <p>
        One: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis officiis quia,
        dolores similique, cumque ut vel aspernatur non vitae voluptas reiciendis? Veniam,
        voluptates impedit soluta blanditiis ad nam eligendi dignissimos.
      </p>
    ),
  },
  {
    name: "Finish",
    component: (
      <p>
        Two: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis officiis quia,
        dolores similique, cumque ut vel aspernatur non vitae voluptas reiciendis? Veniam,
        voluptates impedit soluta blanditiis ad nam eligendi dignissimos.
      </p>
    ),
  },
];

<Suspense>
  <PaginationWithSearchParams pages={PAGES_WITH_SEARCHPARAMS}>
    <div className="max-w-96">
      <PaginationWithSearchParams.Pages />

      <div className="pagination">
        <PaginationWithSearchParams.PrevBtn className="btn btn-soft btn-square">
          <ChevronLeftIcon className="btn-icon-size" />
        </PaginationWithSearchParams.PrevBtn>

        <PaginationWithSearchParams.Counts className="btn data-[state=false]:btn-ghost data-[state=true]:btn-fill" />

        <PaginationWithSearchParams.NextBtn className="btn btn-soft btn-square">
          <ChevronRightIcon className="btn-icon-size" />
        </PaginationWithSearchParams.NextBtn>
      </div>
    </div>
  </PaginationWithSearchParams>
</Suspense>;
```

### PasswordInput

```tsx
<PasswordInput className="input input-outline">
  <PasswordInput.Field className="input-field" />
  <PasswordInput.Toggle
    className="btn btn-ghost btn-sm"
    visibleChildren={<EyeIcon className="btn-icon-size" />}>
    <EyeClosedIcon className="btn-icon-size" />
  </PasswordInput.Toggle>
</PasswordInput>
```

### Popover

```tsx
<Popover
  className="popover"
  mode="hover">
  <Popover.Toggle className="btn btn-soft">Hover me</Popover.Toggle>

  <Popover.Body className="popover-body popover-body-b card card-menu max-w-[200%]">
    Lorem ipsum dolor sit amet, consectetur adipisicing.
  </Popover.Body>
</Popover>
```

or

```tsx
<Popover
  className="popover"
  mode="both">
  <Popover.Toggle className="btn btn-soft">Hover and click me</Popover.Toggle>

  <Popover.Body className="popover-body popover-body-b card card-menu max-w-[200%]">
    Lorem ipsum dolor sit amet, consectetur adipisicing.
  </Popover.Body>
</Popover>
```

or

```tsx
<Popover
  className="popover"
  mode="click">
  <Popover.Toggle className="btn btn-soft">Click me</Popover.Toggle>

  <Popover.Body className="popover-body popover-body-b card card-menu max-w-[200%]">
    Lorem ipsum dolor sit amet, consectetur adipisicing.
  </Popover.Body>
</Popover>
```

### Portal

```tsx
<Portal>
  <p>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique placeat eligendi
    dolore adipisci sunt magni quo accusamus commodi rerum excepturi! Temporibus
    molestias, et nesciunt ut aut labore quod nihil magni?
  </p>
</Portal>
```

### Progress

```tsx
<Progress
  className="progress"
  value={45}>
  <Progress.Bar className="progress-bar" />
</Progress>
```

### QrCode

```tsx
<QrCode
  className="w-96 rounded-lg"
  value="https://github.com/FarzadVav"
  options={{ width: 384 }}
/>
```

### Rating

```tsx
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
</Rating>;
```

### Sheet

```tsx
<Sheet>
  <Sheet.Toggle className="btn btn-soft">Open sheet</Sheet.Toggle>

  <Sheet.Portal className="sheet-portal">
    <Sheet.Body className="sheet-body">
      <Sheet.Header className="sheet-header">
        <Sheet.Handlebar className="sheet-handlebar" />
      </Sheet.Header>

      <Sheet.Content className="sheet-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae explicabo
        numquam sed dolorem nesciunt repellat deleniti quisquam laudantium? Quas ullam
        magni voluptate esse animi vero dicta maxime mollitia amet dolor.
      </Sheet.Content>
    </Sheet.Body>
  </Sheet.Portal>
</Sheet>
```

### ShowMore

```tsx
<ShowMore
  className="max-w-96"
  maxLines={3}>
  <ShowMore.Content>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium exercitationem
    repellendus debitis, dignissimos non quis! Fugit ducimus adipisci minus quas est
    expedita, voluptatibus minima ad facere quis, dolor ipsum debitis!
  </ShowMore.Content>

  <ShowMore.Fade className="show-more-fade" />

  <ShowMore.Toggle className="btn btn-soft mt-1.5">Show more</ShowMore.Toggle>
</ShowMore>
```

### Spoiler

```tsx
<p>
  Lorem ipsum dolor sit{" "}
  <Spoiler className="spoiler">
    <Spoiler.Blur className="spoiler-blur">amet consectetur adipisicing</Spoiler.Blur>
  </Spoiler>{" "}
  elit. Officiis nemo incidunt tenetur assumenda consequuntur beatae harum iusto, libero
  labore! Ea quo dolore accusantium veniam illo vel quae nihil iure aliquid.
</p>
```

### Submit

```tsx
<form
  action={async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }}>
  <Submit className="btn btn-soft">
    <span>Press the from</span>
    <Submit.Loader loader={<LoaderIcon className="btn-icon-size animate-spin" />}>
      <SendHorizonalIcon className="btn-icon-size" />
    </Submit.Loader>
  </Submit>
</form>
```

### Swap

```tsx
const SWAP_KEYS = ["one", "two", "three"];

const [swapKey, setSwapKey] = useState(SWAP_KEYS[0] as string);

<Swap
  keys={SWAP_KEYS}
  activeKey={swapKey}
  setActiveKey={setSwapKey}>
  <Swap.Btn
    className="btn btn-soft"
    btnKey={SWAP_KEYS[0] as string}
  />

  <Swap.Btn
    className="btn btn-soft"
    btnKey={SWAP_KEYS[1] as string}
  />

  <Swap.Btn
    className="btn btn-soft"
    btnKey={SWAP_KEYS[2] as string}
  />
</Swap>;
```

### Tabs

```tsx
const [activeTab, setActiveTab] = useState("1");

<Tabs
  activeTab={activeTab}
  setActiveTab={setActiveTab}>
  <AccessNavigation direction="x">
    <Tabs.List className="tabs-list join-border">
      <Tabs.Tab
        value="1"
        className="btn data-[state=false]:btn-soft data-[state=true]:btn-fill">
        Tab 1
      </Tabs.Tab>
      <Tabs.Tab
        value="2"
        className="btn data-[state=false]:btn-soft data-[state=true]:btn-fill">
        Tab 2
      </Tabs.Tab>
      <Tabs.Tab
        value="3"
        className="btn data-[state=false]:btn-soft data-[state=true]:btn-fill">
        Tab 3
      </Tabs.Tab>
    </Tabs.List>
  </AccessNavigation>

  <Tabs.Panel
    className="tabs-panel card-lg"
    key={"1"}
    value="1">
    Tab 1: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, animi
    nisi, magni quis dolore cum molestias ipsam accusantium sunt repudiandae repellendus
    perspiciatis cumque unde commodi reprehenderit distinctio nostrum quisquam nihil?
  </Tabs.Panel>

  <Tabs.Panel
    className="tabs-panel card-lg"
    key={"2"}
    value="2">
    Tab 2: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, animi
    nisi, magni quis dolore cum molestias ipsam accusantium sunt repudiandae quisquam
    nihil?
  </Tabs.Panel>

  <Tabs.Panel
    className="tabs-panel card-lg"
    key={"3"}
    value="3">
    Tab 3: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, animi
    nisi, magni quis dolore cum molestias ipsam accusantium sunt repudiandae repellendus
    perspiciatis cumque unde commodi reprehenderit distinctio nostrum quisquam nihil?
    <br />
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat ut corporis sequi
    expedita deserunt aliquid iste facere, nisi ipsa iure ad nostrum animi. Adipisci
    placeat eos laborum error magnam officiis necessitatibus illo commodi a, aperiam
    tempora alias voluptatum eveniet, atque quas dolores, facilis architecto quisquam
    ipsum dolore officia debitis facere! Dicta iste consectetur, illo amet obcaecati aut
    error, ipsam optio at earum odio laudantium voluptatibus? Nemo, nisi debitis et, nam
    voluptas tempora ipsa ipsum culpa nobis perferendis ipsam cumque blanditiis quos
    corrupti, rerum eos? Sapiente fugiat voluptatibus laborum culpa at. Quidem, suscipit
    perferendis. Illum doloribus in cumque fuga laboriosam dignissimos!
  </Tabs.Panel>
</Tabs>;
```

### LinkLoader

```tsx
<Link
  className="btn btn-soft mt-6"
  href={"/test"}>
  <span>Test page</span>
  <LinkLoader loader={<LoaderIcon className="btn-icon-size animate-spin" />}>
    <ArrowRightIcon className="btn-icon-size" />
  </LinkLoader>
</Link>
```

---

Written with ❤️ by [Farzad Vahdati](https://github.com/FarzadVav)
