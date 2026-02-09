import type { ComponentProps, Dispatch, RefObject, SetStateAction } from "react";

import type { AccessNavigationPropsT } from "../AccessNavigation/AccessNavigation";

export type ContextMenuContextT = {
  isOpen: boolean;
  closeHandler: () => void;
  position: { x: number; y: number } | undefined;
  contentRef: RefObject<HTMLDivElement | null>;
};

export type ContextMenuRootPropsT = ComponentProps<"div">;

export type ContextMenuBodyPropsT = ComponentProps<"div">;

export type ContextMenuItemPropsT = ComponentProps<"button">;

export type ContextMenuNavigationPropsT = AccessNavigationPropsT;
