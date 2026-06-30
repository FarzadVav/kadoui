import { ComponentProps, KeyboardEvent } from "react";

export type SearchContextT = {
  value: string;
  searchKey?: string;
  handleClear: () => void;
  handleSearch: () => void;
  searchParamsValue?: string;
  setValue: (value: string) => void;
  handleEnter: (e: KeyboardEvent<HTMLInputElement>) => void;
};

export type SearchRootPropsT = ComponentProps<"label"> & {
  scroll?: boolean;
  baseUrl?: string;
  searchKey?: string;
};

export type SearchFieldPropsT = ComponentProps<"input">;

export type SearchClearBtnPropsT = ComponentProps<"button"> & {
  hiddenOnEmpty?: boolean;
};

export type SearchSubmitBtnPropsT = ComponentProps<"button"> & {
  hiddenOnEqual?: boolean;
};
