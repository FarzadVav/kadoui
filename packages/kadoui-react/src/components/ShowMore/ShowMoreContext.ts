import { createContext, Dispatch, RefObject, SetStateAction } from "react";

export type ShowMoreContextT = {
  contentRef: RefObject<HTMLDivElement | null>;
  shouldShowMore: boolean;
  isShowMore: boolean;
  setIsShowMore: Dispatch<SetStateAction<boolean>>;
  maxHeight: number;
}

export const ShowMoreContext = createContext<ShowMoreContextT>({} as ShowMoreContextT);