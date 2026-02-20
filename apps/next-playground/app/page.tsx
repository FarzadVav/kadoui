"use client";

import Link from "next/link";
import { Suspense, useState } from "react";
import { LinkLoader } from "@kadoui/react/next";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
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
  Breadcrumbs,
  Carousel,
  ClientOnly,
  Clipboard,
  ContextMenu,
  Drawer,
  Modal,
  Otp,
  PaginationWithSearchParams,
  PaginationWithState,
  PasswordInput,
  Popover,
  Portal,
  Progress,
  QrCode,
  Rating,
  SelectBox,
  SelectBoxOptionT,
  Sheet,
  ShowMore,
  Spoiler,
  Submit,
  Swap,
  Tabs,
  Choice,
  useTheme,
} from "@kadoui/react";

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

const SELECT_BOX_OPTIONS: SelectBoxOptionT[] = [
  { name: "one", value: "One" },
  { name: "two", value: "Two" },
  { name: "three", value: "Three" },
];

const SWAP_KEYS = ["one", "two", "three"];

function Page() {
  const { theme, setTheme } = useTheme();

  const [accordionItems, setAccordionItems] = useState<string[]>([]);
  const [accordionItem, setAccordionItem] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [pageWithPage, setPageWithPage] = useState(1);
  const [rating, setRating] = useState(3);
  const [singleSelectBoxValue, singleSetSelectBoxValue] =
    useState<SelectBoxOptionT | null>(null);
  const [multiSelectBoxValue, setMultiSelectBoxValue] = useState<SelectBoxOptionT[]>([]);
  const [swapKey, setSwapKey] = useState(SWAP_KEYS[0] as string);
  const [activeTab, setActiveTab] = useState("1");

  const [filterChoice, setFilterChoice] = useState<string[]>([]);
  const [singleChoice, setSingleChoice] = useState<string | null>("1");
  const [multipleChoice, setMultipleChoice] = useState<string[]>(["1"]);
  const [switchChoice, setSwitchChoice] = useState<string[]>(["1"]);

  return (
    <>
      <header className="h-20 sticky top-0 bg-background/10 backdrop-blur-md border-b border-background-thin z-40">
        <nav className="wrapper flex items-center justify-between h-full">
          <h1 className="title">KadoUI React + TailwindCSS</h1>

          <Popover
            className="popover"
            mode="click">
            <Popover.Navigation direction="y">
              <Popover.Toggle className="btn data-[state=false]:btn-soft data-[state=true]:btn-fill">
                Theme: {theme || <LoaderIcon className="element-icon-size animate-spin" />}
              </Popover.Toggle>

              <Popover.Body className="popover-body position-b card card-menu card-y bg-background-thin">
                <button className={`btn ${theme === "light" ? "btn-fill" : "btn-ghost"}`} onClick={() => setTheme("light")}>Light</button>
                <button className={`btn ${theme === "dark" ? "btn-fill" : "btn-ghost"}`} onClick={() => setTheme("dark")}>Dark</button>
                <button className={`btn ${theme === "system" ? "btn-fill" : "btn-ghost"}`} onClick={() => setTheme("system")}>System</button>
              </Popover.Body>
            </Popover.Navigation>
          </Popover>
        </nav>
      </header>

      <div className="wrapper my-20">
        <p className="heading">AccessNavigation</p>
        <AccessNavigation
          direction="x"
          className="join join-border mt-6">
          <button className="btn btn-soft">One</button>
          <button className="btn btn-soft">Two</button>
          <button className="btn btn-soft">Three</button>
          <button className="btn btn-soft">Four</button>
        </AccessNavigation>

        <p className="heading mt-20">Accordion</p>
        <p className="title mt-6">Multiple mode</p>
        <Accordion direction="y" multiple accordionState={accordionItems} onAccordionChange={(newItems) => setAccordionItems(newItems)}>
          <Accordion.Item itemName="1">
            <Accordion.Toggle className="btn element-w-full data-[state=true]:btn-fill data-[state=false]:btn-soft justify-between mt-6 group">
              <span>Open accordion 1</span>
              <ChevronDownIcon className="transition-transform element-icon-size group-data-[state=true]:-scale-y-100" />
            </Accordion.Toggle>
            <Accordion.Body className="accordion-body">
              <Accordion.Content className="accordion-content">
                <div className="card bg-background-thin">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos fugit accusamus
                  unde, repellendus dolores, fuga nam commodi sapiente omnis voluptatum error
                  earum culpa asperiores eaque ea enim possimus vero esse!
                </div>
              </Accordion.Content>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item itemName="2">
            <Accordion.Toggle className="btn element-w-full data-[state=true]:btn-fill data-[state=false]:btn-soft justify-between mt-6 group">
              <span>Open accordion 2</span>
              <ChevronDownIcon className="transition-transform element-icon-size group-data-[state=true]:-scale-y-100" />
            </Accordion.Toggle>
            <Accordion.Body className="accordion-body">
              <Accordion.Content className="accordion-content">
                <div className="card bg-background-thin">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos fugit accusamus
                  unde, repellendus dolores, fuga nam commodi sapiente omnis voluptatum error
                  earum culpa asperiores eaque ea enim possimus vero esse!
                </div>
              </Accordion.Content>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item itemName="3">
            <Accordion.Toggle className="btn element-w-full data-[state=true]:btn-fill data-[state=false]:btn-soft justify-between mt-6 group">
              <span>Open accordion 3</span>
              <ChevronDownIcon className="transition-transform element-icon-size group-data-[state=true]:-scale-y-100" />
            </Accordion.Toggle>
            <Accordion.Body className="accordion-body">
              <Accordion.Content className="accordion-content">
                <div className="card bg-background-thin">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos fugit accusamus
                  unde, repellendus dolores, fuga nam commodi sapiente omnis voluptatum error
                  earum culpa asperiores eaque ea enim possimus vero esse!
                </div>
              </Accordion.Content>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <p className="title mt-6">Single mode</p>
        <Accordion direction="y" accordionState={accordionItem} onAccordionChange={(newItems) => setAccordionItem(newItems)}>
          <Accordion.Item itemName="1">
            <Accordion.Toggle className="btn element-w-full data-[state=true]:btn-fill data-[state=false]:btn-soft justify-between mt-6 group">
              <span>Open accordion 1</span>
              <ChevronDownIcon className="transition-transform element-icon-size group-data-[state=true]:-scale-y-100" />
            </Accordion.Toggle>
            <Accordion.Body className="accordion-body">
              <Accordion.Content className="accordion-content">
                <div className="card bg-background-thin">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos fugit accusamus
                  unde, repellendus dolores, fuga nam commodi sapiente omnis voluptatum error
                  earum culpa asperiores eaque ea enim possimus vero esse!
                </div>
              </Accordion.Content>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item itemName="2">
            <Accordion.Toggle className="btn element-w-full data-[state=true]:btn-fill data-[state=false]:btn-soft justify-between mt-6 group">
              <span>Open accordion 2</span>
              <ChevronDownIcon className="transition-transform element-icon-size group-data-[state=true]:-scale-y-100" />
            </Accordion.Toggle>
            <Accordion.Body className="accordion-body">
              <Accordion.Content className="accordion-content">
                <div className="card bg-background-thin">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos fugit accusamus
                  unde, repellendus dolores, fuga nam commodi sapiente omnis voluptatum error
                  earum culpa asperiores eaque ea enim possimus vero esse!
                </div>
              </Accordion.Content>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item itemName="3">
            <Accordion.Toggle className="btn element-w-full data-[state=true]:btn-fill data-[state=false]:btn-soft justify-between mt-6 group">
              <span>Open accordion 3</span>
              <ChevronDownIcon className="transition-transform element-icon-size group-data-[state=true]:-scale-y-100" />
            </Accordion.Toggle>
            <Accordion.Body className="accordion-body">
              <Accordion.Content className="accordion-content">
                <div className="card bg-background-thin">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos fugit accusamus
                  unde, repellendus dolores, fuga nam commodi sapiente omnis voluptatum error
                  earum culpa asperiores eaque ea enim possimus vero esse!
                </div>
              </Accordion.Content>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <p className="heading mt-20">Breadcrumbs</p>
        <Breadcrumbs
          separator={<ChevronRightIcon className="element-icon-size" />}
          className="breadcrumbs element-xs mt-3">
          <Breadcrumbs.Item className="breadcrumbs-item">
            <button className="btn link">Home</button>
          </Breadcrumbs.Item>
          <Breadcrumbs.Item className="breadcrumbs-item">
            <button className="btn link">Articles</button>
          </Breadcrumbs.Item>
          <Breadcrumbs.Item
            className="breadcrumbs-item"
            isLastItem>
            <button className="btn btn-fill">How to gain money?</button>
          </Breadcrumbs.Item>
        </Breadcrumbs>

        <p className="heading mt-20">Carousel</p>
        <p className="title mt-6">Auto mouse scroll</p>
        <Carousel className="carousel mt-3" mouseScroll="auto">
          <Carousel.LeftFade className="carousel-left-fade" />
          <Carousel.RightFade className="carousel-right-fade" />

          <Carousel.Container className="carousel-container gap-3 scroll-smooth">
            {Array.from({ length: 12 }).map((_, index) => (
              <article
                key={index}
                className="carousel-children card w-[90%] max-sm:min-w-[90%] sm:w-2/5 sm:min-w-2/5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
                doloremque error rem ex, necessitatibus dolore deleniti alias aperiam cum
                ipsum, suscipit possimus porro provident totam mollitia? Voluptate, eaque
                quas. Culpa.
              </article>
            ))}
          </Carousel.Container>

          <div className="flex items-center justify-center gap-3 mt-3">
            <Carousel.PrevBtn className="btn btn-outline element-square-size">
              <ArrowLeftIcon className="element-icon-size" />
            </Carousel.PrevBtn>
            <Carousel.NextBtn className="btn btn-outline element-square-size">
              <ArrowRightIcon className="element-icon-size" />
            </Carousel.NextBtn>
          </div>
        </Carousel>
        <p className="title mt-6">Swipe mouse scroll</p>
        <Carousel className="carousel mt-3" mouseScroll="swipe">
          <Carousel.LeftFade className="carousel-left-fade" />
          <Carousel.RightFade className="carousel-right-fade" />

          <Carousel.Container className="carousel-container gap-3 scroll-smooth">
            {Array.from({ length: 12 }).map((_, index) => (
              <article
                key={index}
                className="carousel-children card w-[90%] max-sm:min-w-[90%] sm:w-2/5 sm:min-w-2/5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
                doloremque error rem ex, necessitatibus dolore deleniti alias aperiam cum
                ipsum, suscipit possimus porro provident totam mollitia? Voluptate, eaque
                quas. Culpa.
              </article>
            ))}
          </Carousel.Container>

          <div className="flex items-center justify-center gap-3 mt-3">
            <Carousel.PrevBtn className="btn btn-outline element-square-size">
              <ArrowLeftIcon className="element-icon-size" />
            </Carousel.PrevBtn>
            <Carousel.NextBtn className="btn btn-outline element-square-size">
              <ArrowRightIcon className="element-icon-size" />
            </Carousel.NextBtn>
          </div>
        </Carousel>

        <p className="heading mt-20">ClientOnly</p>
        <p className="mt-6">There is server</p>
        <ClientOnly>
          <p className="mt-3">There is client</p>
        </ClientOnly>

        <p className="heading mt-20">Clipboard</p>
        <label htmlFor="copy" className="input input-soft mt-6">
          <input type="text" className="input-field" defaultValue={"Kadoui-react"} readOnly />
          <Clipboard
            text="Kadoui-react"
            className="btn btn-ghost element-sm"
            copiedChildren={<CopyCheckIcon className="element-icon-size" />}
          >
            <CopyIcon className="element-icon-size" />
          </Clipboard>
        </label>

        <p className="heading mt-20">ContextMenu</p>
        <ContextMenu className="context-menu border-4 border-dashed border-foreground mt-6 h-[33vh]">
          <span className="absolute inset-center">Context menu!</span>

          <ContextMenu.Body className="context-menu-body">
            <ContextMenu.Navigation className="context-menu-navigation bg-background-thick" direction="y">
              <ContextMenu.Item className="btn btn-ghost" onClick={() => alert("slkjflkdsjfldj")}>
                <TrashIcon className="element-icon-size" />
                <span>DELETE</span>
              </ContextMenu.Item>
              <ContextMenu.Item className="btn btn-ghost">
                <RefreshCwIcon className="element-icon-size" />
                <span>RELOAD</span>
              </ContextMenu.Item>
              <ContextMenu.Item className="btn btn-ghost">
                <FlagIcon className="element-icon-size" />
                <span>IGNORE IT</span>
              </ContextMenu.Item>
            </ContextMenu.Navigation>
          </ContextMenu.Body>
        </ContextMenu>

        <p className="heading mt-20">Drawer</p>
        <Drawer>
          <Drawer.Toggle className="btn btn-soft mt-6">Open left drawer</Drawer.Toggle>

          <Drawer.Portal className="drawer-portal">
            <Drawer.Body className="drawer-body">
              <label htmlFor="drawer-input" className="input input-outline">
                <SearchIcon className="element-icon-size" />
                <input type="text" className="input-field" placeholder="Search..." data-drawer="focus" />
              </label>
              <p className="mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum porro vero
                delectus eum qui laboriosam, dolore veritatis eligendi amet voluptatibus
                incidunt temporibus dolores fuga adipisci eius saepe quod aspernatur iure.
              </p>
            </Drawer.Body>
          </Drawer.Portal>
        </Drawer>
        <Drawer>
          <Drawer.Toggle className="btn btn-soft mt-3">Open top drawer</Drawer.Toggle>

          <Drawer.Portal className="drawer-portal">
            <Drawer.Body className="drawer-body" position="top">
              <label htmlFor="drawer-input" className="input input-outline">
                <SearchIcon className="element-icon-size" />
                <input type="text" className="input-field" placeholder="Search..." data-drawer="focus" />
              </label>
              <p className="mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum porro vero
                delectus eum qui laboriosam, dolore veritatis eligendi amet voluptatibus
                incidunt temporibus dolores fuga adipisci eius saepe quod aspernatur iure.
              </p>
            </Drawer.Body>
          </Drawer.Portal>
        </Drawer>
        <Drawer>
          <Drawer.Toggle className="btn btn-soft mt-3">Open right drawer</Drawer.Toggle>

          <Drawer.Portal className="drawer-portal">
            <Drawer.Body className="drawer-body" position="right">
              <label htmlFor="drawer-input" className="input input-outline">
                <SearchIcon className="element-icon-size" />
                <input type="text" className="input-field" placeholder="Search..." data-drawer="focus" />
              </label>
              <p className="mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum porro vero
                delectus eum qui laboriosam, dolore veritatis eligendi amet voluptatibus
                incidunt temporibus dolores fuga adipisci eius saepe quod aspernatur iure.
              </p>
            </Drawer.Body>
          </Drawer.Portal>
        </Drawer>
        <Drawer>
          <Drawer.Toggle className="btn btn-soft mt-3">Open bottom drawer</Drawer.Toggle>

          <Drawer.Portal className="drawer-portal">
            <Drawer.Body className="drawer-body" position="bottom">
              <label htmlFor="drawer-input" className="input input-outline">
                <SearchIcon className="element-icon-size" />
                <input type="text" className="input-field" placeholder="Search..." data-drawer="focus" />
              </label>
              <p className="mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum porro vero
                delectus eum qui laboriosam, dolore veritatis eligendi amet voluptatibus
                incidunt temporibus dolores fuga adipisci eius saepe quod aspernatur iure.
              </p>
            </Drawer.Body>
          </Drawer.Portal>
        </Drawer>

        <p className="heading mt-20">Modal</p>
        <Modal>
          <Modal.Toggle className="btn btn-soft mt-6">Open modal</Modal.Toggle>

          <Modal.Portal className="modal-portal justify-center">
            <Modal.Body className="modal-body justify-center">
              <Modal.Header className="modal-header">
                <label className="input input-outline element-w-full">
                  <SearchIcon className="element-icon-size" />
                  <input type="text" className="input-field" placeholder="Search..." data-modal="focus" />
                </label>
              </Modal.Header>
              <Modal.Content className="modal-content max-w-xl">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui maxime non eius eos veritatis libero, animi pariatur illo inventore aliquid consectetur expedita a aut enim quasi excepturi reiciendis ipsam. Asperiores modi magni, accusamus reprehenderit animi ex ad voluptatem doloribus maiores autem! Vel nam nesciunt, numquam recusandae voluptate illum quis quibusdam quaerat provident, dolorum qui sed modi possimus id dolore ipsa dignissimos animi expedita, ipsum repellat fugiat sit. Velit quo libero nisi, nemo sunt nobis, illo similique qui adipisci consequatur repellat eius illum facilis ratione in, corrupti magnam nam ut itaque fugiat. Molestiae atque veritatis incidunt deserunt unde quia inventore deleniti placeat architecto, perspiciatis, dolore, laborum et quaerat! Nobis eligendi deleniti accusantium cupiditate! Ea quam iste voluptatibus error harum ullam eaque odit iusto necessitatibus veniam at facere repudiandae tempore repellendus voluptatem impedit corporis quidem, porro adipisci, aperiam ab accusamus aliquid, vitae doloribus? Laborum, voluptatibus ipsam saepe optio temporibus nobis. Sequi officiis maiores aut ut unde reprehenderit praesentium dolorem voluptatem exercitationem ab expedita, fugit quidem debitis at qui cupiditate omnis perferendis in ullam quis quia hic quibusdam molestias? Voluptates fuga animi atque eligendi dolore dolorem laudantium sit, sint laboriosam ut enim. Ab illo rerum molestias voluptas a dolorum. Dolorum alias nobis voluptas sunt repudiandae, perferendis eaque vel aliquam fuga iste, ipsum perspiciatis! Eum tempora modi quos dolore, recusandae architecto at laudantium vitae praesentium ullam neque incidunt quaerat sequi est fugiat ea voluptates vero, aliquid error rem hic. Aliquid facere, debitis officia ipsum culpa alias inventore optio odio vero unde minima? Eveniet placeat delectus, architecto ipsum fuga quia voluptatum. Vero, dolorum, officiis ipsam illo nam quo enim commodi quia soluta similique excepturi explicabo, odio neque aliquam ut. Nulla nihil, eveniet autem dicta, necessitatibus provident quos consequatur saepe, excepturi optio perferendis debitis ipsum. Eveniet, molestiae! Sit, culpa officia est quasi natus labore ea sed illo, iusto dignissimos obcaecati cum consectetur magnam ipsa odio beatae a possimus. Reprehenderit, nostrum adipisci velit nihil tenetur minus repudiandae ullam tempora doloremque possimus, error, itaque aliquam dolor accusamus? Facere, delectus error perferendis, similique eos recusandae doloremque illum excepturi dicta quibusdam quaerat consectetur eius consequuntur quos adipisci quia, assumenda enim sit! Officiis, ipsam sit. Modi eligendi totam impedit doloremque facilis animi qui doloribus aut dolor? Natus eos nam harum sint, repellat repellendus numquam suscipit! Dicta, facere! Vero doloribus ex at repellat deleniti a enim consectetur fugit error qui rerum, voluptas nihil consequatur facilis corporis, aspernatur delectus sunt eos dolorum. Earum blanditiis enim architecto exercitationem ipsa, quis quaerat dicta accusamus nostrum sequi ea. Facere nemo quod nam. Atque voluptate labore pariatur, recusandae nobis reprehenderit quam. Quo enim commodi natus officia rem deserunt! Ab, odit cupiditate? Sapiente, voluptatem amet. Harum, tempora. Commodi iste adipisci repudiandae similique, porro fuga vitae odio minus nisi officiis iusto? Nesciunt tempora ab iure doloribus possimus quam dignissimos, numquam quibusdam fugit impedit molestias illum asperiores deleniti inventore explicabo quis a alias dolores voluptate odit distinctio commodi! Aperiam nemo eveniet ipsa, temporibus vel perferendis quia dolor, officia quaerat accusantium cumque maiores placeat quas ratione consequuntur rem nulla ducimus. Error accusantium expedita aperiam nemo iste, magnam ratione, inventore commodi dolores quae mollitia suscipit consequuntur deleniti temporibus repudiandae assumenda rem officiis earum. Illo possimus dolorem rem beatae nihil obcaecati reiciendis nam non, odio accusantium explicabo aperiam hic porro soluta et adipisci cumque, culpa ex accusamus distinctio numquam iusto ratione enim fugiat! Aliquam quas voluptas iusto cumque ipsum odit tempore impedit omnis, nam doloribus debitis numquam similique sit porro quam inventore perspiciatis sed eos. Itaque nisi, magni repellendus fugiat consectetur minus deserunt error pariatur quam enim nostrum incidunt rerum nobis veritatis cumque, labore natus esse soluta perferendis neque quo est laboriosam quis! Quis alias optio magnam autem? Nam ab error porro ipsum nostrum tempore quod corrupti blanditiis quaerat a. Delectus aperiam impedit dolores expedita vero necessitatibus reiciendis, quia consequuntur a amet. Accusamus tempore incidunt explicabo saepe iste corrupti ipsam dignissimos aut, natus eligendi quod in soluta nulla maxime sapiente totam maiores porro illum repellat deserunt eaque? Totam itaque eaque laborum voluptatum est nostrum, accusantium deleniti ab praesentium iusto tempore ullam odio nihil delectus consequuntur nisi quod aliquid tempora perspiciatis ad fuga! Culpa neque, rerum esse ratione tempore suscipit eos exercitationem eaque magnam ipsa deserunt quaerat? Nemo dolorem perspiciatis consequatur! Maxime nisi quod omnis nulla eum repudiandae tempora? Alias esse inventore dicta molestias, numquam eum repellat suscipit ratione? Debitis asperiores blanditiis ducimus deleniti natus recusandae temporibus ipsa voluptatibus doloribus maxime ea inventore eligendi, quam corporis. Voluptatibus necessitatibus, blanditiis eaque cumque molestias asperiores tenetur in ullam laboriosam voluptates fugiat voluptas officiis rem reprehenderit doloremque magnam natus ratione numquam aliquam suscipit ea doloribus fuga eligendi? Sunt labore laborum earum tempora quas optio aliquam dolor? Neque, pariatur reprehenderit blanditiis at dolorem optio maxime dignissimos corporis quia alias illo sapiente tempora quod ipsa exercitationem. Fuga officia at ipsum! Facilis esse aliquid non. Non atque amet ut deleniti earum asperiores in quis aut reiciendis totam nihil nisi minus voluptate ullam incidunt voluptates vero ex eveniet tempore quas voluptatibus, quisquam dolorem repudiandae. Sint alias perspiciatis temporibus sunt hic optio harum porro, ex ipsam soluta accusantium iste tempora maxime cupiditate provident esse animi, incidunt dolor nam suscipit consequuntur quos obcaecati? Ab magni amet consectetur a inventore sapiente saepe assumenda iusto animi mollitia sed adipisci natus, accusamus velit? At doloremque veniam, perspiciatis quo impedit totam saepe laudantium, laboriosam officiis animi quam distinctio sed sit earum modi iste veritatis architecto. Sequi molestias perspiciatis consectetur ab, omnis magnam quae voluptas. Atque sapiente illo, blanditiis quis delectus doloribus commodi sequi culpa quae possimus iste veniam iusto repellendus excepturi explicabo reprehenderit unde placeat perspiciatis animi voluptatibus eaque exercitationem repellat. Commodi quae obcaecati rem, voluptates nihil est voluptas perferendis odit, assumenda laudantium sunt repellendus esse incidunt delectus numquam? Unde, commodi. Quam, illum. Quis maiores ipsa in adipisci odit iure incidunt fuga aliquam delectus, quia ducimus tenetur ullam hic, qui, repellendus inventore eligendi eum placeat! Numquam non dolor at exercitationem, deserunt ullam in officia quibusdam iure eius laudantium doloremque minima perferendis culpa velit tempora delectus! Minus, fugit recusandae omnis rem provident dolorum rerum aliquid id sequi ea!
                </p>
              </Modal.Content>
              <Modal.Header className="modal-footer">
                <p className="font-bold justify-center mr-auto">
                  Do you trust she?
                </p>
                <Modal.Toggle className="btn btn-soft palette-error">No</Modal.Toggle>
                <Modal.Toggle className="btn btn-fill palette-success">Yes</Modal.Toggle>
              </Modal.Header>
            </Modal.Body>
          </Modal.Portal>
        </Modal>

        <p className="heading mt-20">OTP</p>
        <Otp className="otp mt-6">
          <Otp.Inputs
            length={6}
            className="input input-outline element-square-size"
            onLastChange={(otp) => alert(otp)}
          />

          <Otp.HiddenInput />
        </Otp>

        <p className="heading mt-20">Pagination</p>
        <p className="mt-6">With state:</p>
        <PaginationWithState pagesLength={6} page={page} setPage={setPage}>
          <div className="pagination mt-3">
            <PaginationWithState.PrevBtn className="btn btn-soft element-square-size">
              <ChevronLeftIcon className="element-icon-size" />
            </PaginationWithState.PrevBtn>

            <PaginationWithState.Counts className="btn element-square-size data-[state=false]:btn-ghost data-[state=true]:btn-fill" />

            <PaginationWithState.NextBtn className="btn btn-soft element-square-size">
              <ChevronRightIcon className="element-icon-size" />
            </PaginationWithState.NextBtn>
          </div>
        </PaginationWithState>
        <p className="mt-6">With search params:</p>
        <Suspense>
          <PaginationWithSearchParams pagesLength={6}>
            <div className="pagination mt-3">
              <PaginationWithSearchParams.PrevBtn className="btn btn-soft element-square-size">
                <ChevronLeftIcon className="element-icon-size" />
              </PaginationWithSearchParams.PrevBtn>

              <PaginationWithSearchParams.Counts className="btn element-square-size data-[state=false]:btn-ghost data-[state=true]:btn-fill" />

              <PaginationWithSearchParams.NextBtn className="btn btn-soft element-square-size">
                <ChevronRightIcon className="element-icon-size" />
              </PaginationWithSearchParams.NextBtn>
            </div>
          </PaginationWithSearchParams>
        </Suspense>

        <p className="heading mt-20">Pagination with pages</p>
        <p className="mt-6">With state:</p>
        <PaginationWithState pages={PAGES_WITH_STATE} page={pageWithPage} setPage={setPageWithPage}>
          <div className="max-w-96">
            <PaginationWithState.Pages />

            <div className="pagination mt-3">
              <PaginationWithState.PrevBtn className="btn btn-soft element-square-size">
                <ChevronLeftIcon className="element-icon-size" />
              </PaginationWithState.PrevBtn>

              <PaginationWithState.Counts className="btn element-square-size data-[state=false]:btn-ghost data-[state=true]:btn-fill" />

              <PaginationWithState.NextBtn className="btn btn-soft element-square-size">
                <ChevronRightIcon className="element-icon-size" />
              </PaginationWithState.NextBtn>
            </div>
          </div>
        </PaginationWithState>
        <p className="mt-6">With search params:</p>
        <Suspense>
          <PaginationWithSearchParams pages={PAGES_WITH_SEARCHPARAMS}>
            <div className="max-w-96">
              <PaginationWithSearchParams.Pages />

              <div className="pagination mt-3">
                <PaginationWithSearchParams.PrevBtn className="btn btn-soft element-square-size">
                  <ChevronLeftIcon className="element-icon-size" />
                </PaginationWithSearchParams.PrevBtn>

                <PaginationWithSearchParams.Counts className="btn element-square-size data-[state=false]:btn-ghost data-[state=true]:btn-fill" />

                <PaginationWithSearchParams.NextBtn className="btn btn-soft element-square-size">
                  <ChevronRightIcon className="element-icon-size" />
                </PaginationWithSearchParams.NextBtn>
              </div>
            </div>
          </PaginationWithSearchParams>
        </Suspense>

        <p className="heading mt-20">PasswordInput</p>
        <PasswordInput className="input input-outline mt-3">
          <PasswordInput.Field className="input-field" />
          <PasswordInput.Toggle
            className="btn btn-ghost element-sm"
            visibleChildren={<EyeIcon className="element-icon-size" />}>
            <EyeClosedIcon className="element-icon-size" />
          </PasswordInput.Toggle>
        </PasswordInput>

        <p className="heading mt-20">Popover</p>
        <Popover
          className="popover mt-6"
          mode="hover">
          <Popover.Toggle className="btn btn-soft">Hover me</Popover.Toggle>

          <Popover.Body className="popover-body position-b card card-menu max-w-[200%] bg-background-thin">
            Lorem ipsum dolor sit amet, consectetur adipisicing.
          </Popover.Body>
        </Popover>
        <Popover
          className="popover mt-3"
          mode="both">
          <Popover.Toggle className="btn btn-soft">Hover and click me</Popover.Toggle>

          <Popover.Body className="popover-body position-b card card-menu max-w-[200%] bg-background-thin">
            Lorem ipsum dolor sit amet, consectetur adipisicing.
          </Popover.Body>
        </Popover>
        <Popover
          className="popover mt-3"
          mode="click">
          <Popover.Navigation direction="y">
            <Popover.Toggle className="btn data-[state=false]:btn-soft data-[state=true]:btn-fill">
              Click me
            </Popover.Toggle>

            <Popover.Body className="popover-body position-b card card-menu bg-background-thin">
              <button className="btn btn-ghost">Like</button>
              <button className="btn btn-ghost">Ignore</button>
              <button className="btn btn-ghost">Download</button>
              <Popover className="popover">
                <Popover.Toggle className="btn data-[state=false]:btn-ghost data-[state=true]:btn-soft">
                  <span>Share via</span>
                  <ChevronRightIcon className="element-icon-size" />
                </Popover.Toggle>
                <Popover.Body className="popover-body position-r card card-menu bg-background-thin">
                  <button className="btn btn-ghost">Link</button>
                  <button className="btn btn-ghost">Instagram</button>
                  <button className="btn btn-ghost">Telegram</button>
                  <button className="btn btn-ghost">X</button>
                </Popover.Body>
              </Popover>
            </Popover.Body>
          </Popover.Navigation>
        </Popover>

        <p className="heading mt-20">Portal</p>
        <p className="mt-6">Portal are a large text on the end of page</p>
        <Portal>
          <p className="wrapper my-20">
            PORTAL: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis quasi
            mollitia veniam consequuntur dicta! Harum, eos consectetur iste rem minus omnis
            aut est officiis quos in quae nisi? Dignissimos deleniti dolorem consequuntur,
            itaque, possimus molestiae ex, quasi facilis similique commodi vitae
            perspiciatis beatae iure est ullam quos ab maiores ratione hic iste quis
            reiciendis accusantium reprehenderit. Aliquid delectus iusto voluptatibus
            voluptatum architecto velit modi distinctio nihil assumenda veniam? Ipsum
            possimus amet corporis quos sint corrupti enim temporibus deleniti similique. Id
            ut fuga doloribus. Consequatur quia fugiat libero obcaecati facilis? Asperiores
            aperiam facilis omnis eius rem aliquam nam? Nostrum earum dolorem, expedita quam
            repudiandae consequuntur, ipsam quas laudantium quaerat ex eaque molestiae
            labore. Autem quam aspernatur recusandae perferendis, explicabo reprehenderit
            officia molestias excepturi blanditiis placeat ratione architecto esse vitae
            labore quae possimus voluptates repudiandae. Explicabo cumque sunt aliquid eaque
            autem reiciendis praesentium reprehenderit ab commodi dolores ipsam nisi,
            accusantium adipisci animi eius fugit dolor necessitatibus totam nostrum in
            harum dignissimos inventore. Labore voluptas doloribus quibusdam praesentium?
            Assumenda obcaecati minus quod iusto dignissimos ipsam consequatur, totam
            dolorem maiores magnam molestias fugiat doloribus ea mollitia, numquam optio
            quisquam nobis voluptate quibusdam! Repellendus distinctio id autem rerum magnam
            neque voluptas sapiente consequatur? Velit sint nisi libero? Fugiat minima
            perspiciatis rem atque aspernatur quis vitae incidunt, temporibus qui est
            dolorum explicabo et. Sint atque rem suscipit fuga eum saepe. Officia, tempora
            minus. Corporis dolorum voluptatum dignissimos eveniet error sit exercitationem
            aliquid reprehenderit perspiciatis unde, deserunt recusandae nisi consequatur
            architecto saepe iusto totam dolorem ex odit at. Ipsa obcaecati quod odit
            explicabo nulla commodi nobis sapiente! Illum esse, nisi nihil voluptatibus amet
            accusantium explicabo est debitis, placeat beatae adipisci dolorum fugiat rem
            vel recusandae temporibus nemo! Quidem, labore. Fuga quae unde dolores animi,
            molestias voluptatum, eligendi aperiam corporis nulla autem dignissimos, itaque
            quis? Fugiat asperiores iusto quidem expedita eum modi laborum rerum sint
            obcaecati, provident natus ratione a alias ipsum architecto, sit ducimus nobis.
            Voluptas, velit nesciunt rem consequatur commodi, error architecto illo
            necessitatibus dolorum rerum officiis modi, vitae ea laboriosam. Commodi
            delectus quas ducimus, totam earum deleniti laboriosam pariatur enim provident
            quasi tempore impedit eveniet aspernatur ad quisquam. Illum, dicta omnis. Animi
            distinctio quod autem numquam laboriosam. Rerum enim accusamus voluptatibus
            corporis, nihil molestias in, exercitationem assumenda ea incidunt dolorem
            dignissimos excepturi iure quis doloremque et nesciunt aspernatur temporibus
            nobis minus eius cum natus pariatur sequi. Aliquam soluta dolorem ullam
            voluptatem praesentium sequi commodi distinctio, id porro ipsum possimus ratione
            fugit est rerum dolores cupiditate rem perspiciatis voluptatum asperiores libero
            modi eveniet doloribus. Enim repudiandae animi quos ea minima perferendis optio
            temporibus ad voluptates earum incidunt sit quam odio quisquam, ipsum doloribus
            quia blanditiis iste modi debitis nisi! Sit repellat recusandae, impedit
            repellendus itaque modi quae minus, odit optio eligendi ut voluptatum dicta
            tenetur et adipisci sapiente pariatur. Ab vero eos optio illum nam veritatis,
            saepe fugiat beatae sit placeat recusandae delectus veniam iusto, odit illo
            aliquid eveniet numquam excepturi eligendi repellat? Officia nihil ipsam ad ab,
            possimus doloribus, repudiandae consequuntur ipsum magnam provident beatae,
            quisquam accusamus? Magnam, ipsa quam mollitia atque similique, iure veniam non
            fugiat voluptatem porro quidem dolores asperiores. Quo, saepe eius fugiat
            deserunt accusantium optio reprehenderit voluptate nulla aliquid sequi
            cupiditate porro temporibus facilis dolor officia, qui deleniti? Similique
            necessitatibus numquam natus suscipit corrupti, quaerat ducimus tempore
            consequatur hic asperiores voluptatibus delectus voluptate nihil. Maiores sed
            aliquid laborum, tempore, qui ducimus quos, assumenda omnis facere dicta illo
            saepe cupiditate alias provident quaerat nemo! Fuga, porro assumenda enim, harum
            doloremque ullam autem nihil id, optio excepturi officiis dolorem? Consectetur
            nobis porro quidem veniam necessitatibus nemo iusto perspiciatis maiores.
            Perferendis cumque reiciendis incidunt eligendi distinctio voluptatibus soluta,
            cupiditate repudiandae consectetur asperiores, optio quos esse vel vitae dicta
            iure nam alias voluptatum repellat, porro consequatur nihil. Repellat ipsam
            laudantium natus adipisci nihil magni quibusdam odio sit delectus a neque beatae
            deserunt, sint at eum architecto cumque expedita! Tempore accusantium nostrum
            repellendus corporis, mollitia, nesciunt deserunt dolores at repellat aliquam
            illo neque nulla modi dignissimos sit placeat officiis impedit itaque quidem
            corrupti maxime quod. Accusamus, quae? Reiciendis maxime earum, sunt aliquid
            quia recusandae fugiat fugit officia odio obcaecati ipsa, provident est quasi
            cum deleniti, quam quae facilis? Error quam nobis, inventore atque sunt porro.
            Pariatur incidunt minima nesciunt nulla quos nam veniam debitis est consequatur
            aliquid ea quaerat quia beatae, cum eligendi consequuntur dignissimos voluptatum
            commodi molestias amet natus odio impedit eum asperiores. Incidunt, rerum quasi
            cumque unde nesciunt temporibus facere vitae molestias nulla et alias, ea
            voluptatem amet odio veniam id expedita nostrum voluptates eligendi, repudiandae
            architecto saepe laborum! Voluptatibus debitis maiores consequatur repellendus
            vel quis, necessitatibus velit dolor, ipsam, quae at laborum odio inventore
            sequi totam earum distinctio quaerat perferendis. Odit error accusantium
            blanditiis quia harum nulla in consectetur, maxime cumque officiis corporis
            labore, quas nostrum, voluptas similique et mollitia ad placeat! Voluptate cum
            nobis libero ab tempore id at, corporis ad? Eum cumque vero magnam? Possimus
            minus temporibus ducimus reprehenderit perferendis? At, doloribus in, sunt
            similique praesentium, cupiditate minima id necessitatibus dolor ratione eius et
            eveniet voluptates iusto sed? Animi accusantium eum cum consequuntur,
            dignissimos alias fugit repellendus, corrupti, quibusdam beatae similique
            praesentium vel recusandae reiciendis ut accusamus sunt quo pariatur nihil et
            dolorem incidunt aspernatur error illum? Iure sapiente dolore eum magnam cumque
            neque temporibus ipsam ducimus ex doloremque, perspiciatis et incidunt illum
            fugit quaerat facilis veritatis tempore aut quisquam exercitationem rem libero!
            Temporibus minus id dolorum, alias perferendis quis sint voluptates corrupti
            ullam commodi. Laborum saepe architecto cupiditate adipisci velit cumque neque
            fugit ut, fuga reprehenderit! Dolor dolorum est quisquam alias distinctio amet
            dolores, sit minima! Reiciendis sit tempora cumque dolore debitis iure dolorem
            fugit itaque officia ducimus, harum velit ipsum veritatis nam nesciunt quos odit
            quia, qui repudiandae nulla! Explicabo quis rem, quae perferendis ex odit
            ratione, minima autem dolorem magnam incidunt ipsum corporis numquam eos
            officiis alias temporibus quibusdam et dolore sunt. Molestias perferendis quidem
            delectus rerum eos quas? Eos fuga quam qui at nostrum reiciendis voluptatibus
            praesentium sit! Fugit vitae error ratione animi nobis repellat, aliquam
            suscipit.
          </p>
        </Portal>

        <p className="heading mt-20">Progress</p>
        <Progress
          className="progress mt-6"
          value={45}>
          <Progress.Bar className="progress-bar" />
        </Progress>

        <p className="heading mt-20">QrCode</p>
        <QrCode
          className="mt-6 w-96 rounded-lg"
          value="https://github.com/FarzadVav"
          options={{ width: 384 }}
        />

        <p className="heading mt-20">Rating</p>
        <Rating className="rating mt-3">
          <Rating.Items
            count={5}
            value={rating}
            className="rating-items"
            onValueChange={setRating}
            element={<StarIcon className="size-9" />}
            activeElement={<StarIcon className="fill-foreground size-9" />}
          />
        </Rating>

        <p className="heading mt-20">SelectBox</p>
        <div className="mt-6">
          <p className="title">Single select mode:</p>
          <SelectBox className="mt-3" options={SELECT_BOX_OPTIONS} optionValue={singleSelectBoxValue} setOptionValue={singleSetSelectBoxValue}>
            <SelectBox.Input className="select-box-input input input-soft group">
              <ChevronDownIcon className="element-icon-size transition-transform group-focus-within:-scale-y-100" />
              <SelectBox.Field
                className="input-field"
                placeholder="Select an option..."
              />
              <SelectBox.List className="select-box-list offset bg-background-thin">
                <SelectBox.SearchInput className="input input-outline">
                  <SearchIcon className="element-icon-size" />
                  <SelectBox.SearchField className="input-field" />
                </SelectBox.SearchInput>
                <SelectBox.Options
                  className="select-box-option data-[state=false]:not-hover:btn-ghost data-[state=false]:hover:btn-soft data-[state=true]:btn-fill"
                />
              </SelectBox.List>
            </SelectBox.Input>
          </SelectBox>

          <p className="title mt-6">Multi select mode:</p>
          <SelectBox className="mt-3" multiSelect options={SELECT_BOX_OPTIONS} optionValue={multiSelectBoxValue} setOptionValue={setMultiSelectBoxValue}>
            <SelectBox.Input className="select-box-input input input-soft group">
              <ChevronDownIcon className="element-icon-size transition-transform group-focus-within:-scale-y-100" />
              <SelectBox.Field
                className="input-field"
                placeholder="Select an option..."
              />
              <SelectBox.List className="select-box-list offset bg-background-thin">
                <SelectBox.SearchInput className="input input-outline">
                  <SearchIcon className="element-icon-size" />
                  <SelectBox.SearchField className="input-field" />
                </SelectBox.SearchInput>
                <SelectBox.Options
                  className="select-box-option data-[state=false]:not-hover:btn-ghost data-[state=false]:hover:btn-soft data-[state=true]:btn-fill"
                />
              </SelectBox.List>
            </SelectBox.Input>
          </SelectBox>
        </div>

        <p className="heading mt-20">Sheet</p>
        <Sheet>
          <Sheet.Toggle className="btn btn-soft mt-6">Open sheet</Sheet.Toggle>

          <Sheet.Portal className="sheet-portal">
            <Sheet.Body className="sheet-body">
              <Sheet.Header className="sheet-header">
                <Sheet.Handlebar className="sheet-handlebar" />
              </Sheet.Header>

              <Sheet.Content className="sheet-content">
                <label className="input input-outline">
                  <SearchIcon className="element-icon-size" />
                  <input type="text" className="input-field" placeholder="Search..." data-sheet="focus" />
                </label>
                <p className="mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae explicabo
                  numquam sed dolorem nesciunt repellat deleniti quisquam laudantium? Quas
                  ullam magni voluptate esse animi vero dicta maxime mollitia amet dolor.
                </p>
              </Sheet.Content>
            </Sheet.Body>
          </Sheet.Portal>
        </Sheet>
        <p className="heading mt-20">ShowMore</p>
        <ShowMore
          className="max-w-96 mt-6"
          maxLines={3}>
          <ShowMore.Content>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium
            exercitationem repellendus debitis, dignissimos non quis! Fugit ducimus adipisci
            minus quas est expedita, voluptatibus minima ad facere quis, dolor ipsum
            debitis!
          </ShowMore.Content>

          <ShowMore.Fade className="show-more-fade" />

          <ShowMore.Toggle className="btn btn-soft mt-1.5">Show more</ShowMore.Toggle>
        </ShowMore>

        <p className="heading mt-20">Spoiler</p>
        <p className="mt-6">
          <Spoiler className="spoiler">Lorem ipsum dolor sit <Spoiler.Blur className="spoiler-blur">amet consectetur adipisicing</Spoiler.Blur> elit. Officiis nemo incidunt tenetur assumenda consequuntur beatae harum iusto, libero labore! Ea quo dolore accusantium veniam illo vel quae nihil iure aliquid.</Spoiler>
        </p>

        <p className="heading mt-20">Submit</p>
        <form
          className="mt-6"
          action={async () => {
            await new Promise((resolve) => setTimeout(resolve, 1000));
          }}>
          <Submit className="btn btn-soft">
            <span>Press the from</span>
            <Submit.Loader loader={<LoaderIcon className="element-icon-size animate-spin" />}>
              <SendHorizonalIcon className="element-icon-size" />
            </Submit.Loader>
          </Submit>
        </form>

        <p className="heading mt-20">Swap</p>
        <div className="mt-6">
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
          </Swap>
        </div>

        <p className="heading mt-20">Tabs</p>
        <Tabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}>
          <Tabs.List className="join join-border mt-6" direction="x">
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

          <Tabs.Panel
            className="tabs-panel card element-lg bg-background-thick mt-(--element-spacing)"
            key={"1"}
            value="1">
            Tab 1: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            animi nisi, magni quis dolore cum molestias ipsam accusantium sunt repudiandae
            repellendus perspiciatis cumque unde commodi reprehenderit distinctio nostrum
            quisquam nihil?
          </Tabs.Panel>

          <Tabs.Panel
            className="tabs-panel card element-lg bg-background-thick mt-(--element-spacing)"
            key={"2"}
            value="2">
            Tab 2: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            animi nisi, magni quis dolore cum molestias ipsam accusantium sunt repudiandae
            quisquam nihil?
          </Tabs.Panel>

          <Tabs.Panel
            className="tabs-panel card element-lg bg-background-thick mt-(--element-spacing)"
            key={"3"}
            value="3">
            Tab 3: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            animi nisi, magni quis dolore cum molestias ipsam accusantium sunt repudiandae
            repellendus perspiciatis cumque unde commodi reprehenderit distinctio nostrum
            quisquam nihil?
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat ut corporis
            sequi expedita deserunt aliquid iste facere, nisi ipsa iure ad nostrum animi.
            Adipisci placeat eos laborum error magnam officiis necessitatibus illo commodi
            a, aperiam tempora alias voluptatum eveniet, atque quas dolores, facilis
            architecto quisquam ipsum dolore officia debitis facere! Dicta iste consectetur,
            illo amet obcaecati aut error, ipsam optio at earum odio laudantium
            voluptatibus? Nemo, nisi debitis et, nam voluptas tempora ipsa ipsum culpa nobis
            perferendis ipsam cumque blanditiis quos corrupti, rerum eos? Sapiente fugiat
            voluptatibus laborum culpa at. Quidem, suscipit perferendis. Illum doloribus in
            cumque fuga laboriosam dignissimos!
          </Tabs.Panel>
        </Tabs>

        <p className="heading mt-20">LinkLoader</p>
        <Link
          className="btn btn-soft mt-6"
          href={"/test"}>
          <span>Test page</span>
          <LinkLoader loader={<LoaderIcon className="element-icon-size animate-spin" />}>
            <ArrowRightIcon className="element-icon-size" />
          </LinkLoader>
        </Link>

        <p className="heading mt-20">Choice</p>
        <p className="mt-6">Filter mode:</p>
        <Choice
          multiple
          className="mt-3"
          activeChoice={filterChoice}
          setActiveChoice={setFilterChoice}>
          <Choice.Navigation className="flex items-center gap-3" direction="x">
            <Choice.Toggle
              className="btn data-[state=false]:btn-soft data-[state=true]:btn-fill"
              choiceName="1">
              Filter 1
            </Choice.Toggle>
            <Choice.Toggle
              className="btn data-[state=false]:btn-soft data-[state=true]:btn-fill"
              choiceName="2">
              Filter 2
            </Choice.Toggle>
            <Choice.Toggle
              className="btn data-[state=false]:btn-soft data-[state=true]:btn-fill"
              choiceName="3">
              Filter 3
            </Choice.Toggle>
          </Choice.Navigation>
        </Choice>

        <p className="mt-6">Radio Mode:</p>
        <Choice
          requiredOne
          className="mt-3"
          activeChoice={singleChoice}
          setActiveChoice={setSingleChoice}>
          <Choice.Navigation className="flex items-center gap-3" direction="x">
            <Choice.Toggle
              className="choice element-xs choice-radio"
              choiceName="1">
              <span className="choice-radio-thumb" />
            </Choice.Toggle>
            <Choice.Toggle
              className="choice element-sm choice-radio"
              choiceName="2">
              <span className="choice-radio-thumb" />
            </Choice.Toggle>
            <Choice.Toggle
              className="choice choice-radio"
              choiceName="3">
              <span className="choice-radio-thumb" />
            </Choice.Toggle>
            <Choice.Toggle
              className="choice element-lg choice-radio"
              choiceName="4">
              <span className="choice-radio-thumb" />
            </Choice.Toggle>
            <Choice.Toggle
              className="choice element-xl choice-radio"
              choiceName="5">
              <span className="choice-radio-thumb" />
            </Choice.Toggle>
          </Choice.Navigation>
        </Choice>

        <p className="mt-6">CheckBox Mode:</p>
        <Choice
          multiple
          className="mt-3"
          activeChoice={multipleChoice}
          setActiveChoice={setMultipleChoice}
          requiredOne>
          <Choice.Navigation className="flex items-center gap-3" direction="x">
            <Choice.Toggle
              className="choice element-xs choice-checkbox"
              choiceName="1">
              <Choice.Thumb className="choice-checkbox-thumb">
                <CheckIcon className="element-icon-size" />
              </Choice.Thumb>
            </Choice.Toggle>
            <Choice.Toggle
              className="choice element-sm choice-checkbox"
              choiceName="2">
              <Choice.Thumb className="choice-checkbox-thumb">
                <CheckIcon className="element-icon-size" />
              </Choice.Thumb>
            </Choice.Toggle>
            <Choice.Toggle
              className="choice choice-checkbox"
              choiceName="3">
              <Choice.Thumb className="choice-checkbox-thumb">
                <CheckIcon className="element-icon-size" />
              </Choice.Thumb>
            </Choice.Toggle>
            <Choice.Toggle
              className="choice element-lg choice-checkbox"
              choiceName="4">
              <Choice.Thumb className="choice-checkbox-thumb">
                <CheckIcon className="element-icon-size" />
              </Choice.Thumb>
            </Choice.Toggle>
            <Choice.Toggle
              className="choice element-xl choice-checkbox rounded-xl"
              choiceName="5">
              <Choice.Thumb className="choice-checkbox-thumb">
                <CheckIcon className="element-icon-size" />
              </Choice.Thumb>
            </Choice.Toggle>
          </Choice.Navigation>
        </Choice>

        <p className="mt-6">Switch mode:</p>
        <Choice
          multiple
          className="mt-3"
          activeChoice={switchChoice}
          setActiveChoice={setSwitchChoice}
          requiredOne>
          <Choice.Navigation className="flex items-center gap-3" direction="x">
            <Choice.Toggle
              className="choice element-xs choice-switch"
              choiceName="1">
              <span className="choice-switch-thumb" />
            </Choice.Toggle>
            <Choice.Toggle
              className="choice element-sm choice-switch"
              choiceName="2">
              <span className="choice-switch-thumb" />
            </Choice.Toggle>
            <Choice.Toggle
              className="choice choice-switch"
              choiceName="3">
              <span className="choice-switch-thumb" />
            </Choice.Toggle>
            <Choice.Toggle
              className="choice element-lg choice-switch"
              choiceName="4">
              <span className="choice-switch-thumb" />
            </Choice.Toggle>
            <Choice.Toggle
              className="choice element-xl choice-switch"
              choiceName="5">
              <span className="choice-switch-thumb" />
            </Choice.Toggle>
          </Choice.Navigation>
        </Choice>
      </div>
    </>
  );
}

export default Page;
