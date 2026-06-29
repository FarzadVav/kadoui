"use client";

import { useRouter } from "next/navigation";
import { KeyboardEvent, useEffect, useState } from "react";

import { SearchContext } from "./SearchContext";
import { SearchRootPropsT } from "./searchTypes";

export function SearchRoot({
  scroll,
  baseUrl = "",
  searchKey = "search",
  ...p
}: SearchRootPropsT) {
  const router = useRouter();

  const [value, setValue] = useState("");
  const [searchParamsValue, setSearchParamsValue] = useState("");

  useEffect(() => {
    const sp = new URLSearchParams(window.location.search);

    const spValue = sp.get(searchKey) || "";

    setValue(spValue);
    setSearchParamsValue(spValue);
  }, [searchKey]);

  const handleSearch = () => {
    const sp = new URLSearchParams();

    const correctedValue = value.trim();

    if (correctedValue) {
      if (searchParamsValue === correctedValue) {
        return;
      }

      sp.set(searchKey, correctedValue);
    } else {
      sp.delete(searchKey);
    }

    router.push(baseUrl + "?" + sp.toString(), { scroll });
  };

  const handleEnter = (ev: KeyboardEvent<HTMLInputElement>) => {
    if (ev.key === "Enter") {
      handleSearch();
    }
  };

  const handleClear = () => {
    setValue("");

    const sp = new URLSearchParams();

    const hasSp = sp.has(searchKey);

    if (hasSp) {
      sp.delete(searchKey);
      router.push(baseUrl + "?" + sp.toString(), { scroll });
    }
  };

  return (
    <SearchContext
      value={{
        value,
        setValue,
        searchKey,
        handleEnter,
        handleClear,
        handleSearch,
        searchParamsValue,
      }}
    >
      <label {...p} />
    </SearchContext>
  );
}
