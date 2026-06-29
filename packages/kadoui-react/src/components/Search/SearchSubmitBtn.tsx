import { use } from "react";

import { SearchContext } from "./SearchContext";
import { SearchSubmitBtnPropsT } from "./searchTypes";

export function SearchSubmitBtn({
  onClick,
  disabled,
  hiddenOnEqual,
  ...p
}: SearchSubmitBtnPropsT) {
  const { searchParamsValue, handleSearch, value } = use(SearchContext);

  const correctedValue = value.trim();
  const equal = searchParamsValue === correctedValue;

  if (hiddenOnEqual && equal) {
    return null;
  }

  return (
    <button
      type="button"
      disabled={disabled || equal}
      onClick={(e) => {
        onClick?.(e);
        handleSearch();
      }}
      {...p}
    />
  );
}
