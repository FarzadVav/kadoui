import { createContext, RefObject } from 'react'

export type ContextMenuContextT = {
  isOpen: boolean;
  position: { x: number, y: number } | undefined;
  contentRef: RefObject<HTMLDivElement | null>;
}

export const ContextMenuContext = createContext<ContextMenuContextT>({} as ContextMenuContextT);