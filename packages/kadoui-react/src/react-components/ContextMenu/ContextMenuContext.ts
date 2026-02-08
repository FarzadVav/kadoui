import { createContext, Dispatch, RefObject, SetStateAction } from 'react'

export type ContextMenuContextT = {
  isOpen: boolean;
  closeHandler: () => void;
  position: { x: number, y: number } | undefined;
  contentRef: RefObject<HTMLDivElement | null>;
}

export const ContextMenuContext = createContext<ContextMenuContextT>({} as ContextMenuContextT);