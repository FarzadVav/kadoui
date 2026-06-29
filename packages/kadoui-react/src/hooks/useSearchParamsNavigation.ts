"use client";

import { useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import type { SearchParamsNavigationOptionsT } from "../utils/types";

export type SearchParamsMutatorT = (params: URLSearchParams) => void;

export function buildSearchParamsUrl(
  pathname: string,
  params: URLSearchParams,
) {
  const query = params.toString();
  return query ? `${pathname}?${query}` : pathname;
}

export function useSearchParamsNavigation(
  options?: SearchParamsNavigationOptionsT,
) {
  const scroll = options?.scroll ?? false;
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const pushParams = useCallback(
    (mutate: SearchParamsMutatorT) => {
      const params = new URLSearchParams(searchParams.toString());
      mutate(params);
      router.push(buildSearchParamsUrl(pathname, params), { scroll });
    },
    [pathname, router, scroll, searchParams],
  );

  return { searchParams, pushParams, pathname };
}
