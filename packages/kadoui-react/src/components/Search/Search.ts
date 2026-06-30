import { SearchRoot } from "./SearchRoot";
import { SearchField } from "./SearchField";
import { SearchClearBtn } from "./SearchClearBtn";
import { SearchSubmitBtn } from "./SearchSubmitBtn";

export const Search = Object.assign(SearchRoot, {
  Field: SearchField,
  ClearBtn: SearchClearBtn,
  SubmitBtn: SearchSubmitBtn,
});

export * from "./searchTypes";
