"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { SwapContext } from "./SwapContext";
import { useSearchParamsNavigation } from "../shared/useSearchParamsNavigation";
import type { SwapSearchParamsRootPropsT } from "./swapTypes";

export function SwapSearchParamsRoot({
  keys,
  activeKeyKey = "swap",
  defaultActiveKey,
  scroll,
  children,
}: SwapSearchParamsRootPropsT) {
  const { searchParams, pushParams } = useSearchParamsNavigation({ scroll });
  const fallbackKey = defaultActiveKey ?? keys[0] ?? "";
  const [activeKey, setActiveKeyState] = useState(fallbackKey);
  const activeKeyRef = useRef(activeKey);
  activeKeyRef.current = activeKey;

  useEffect(() => {
    const raw = searchParams.get(activeKeyKey);
    const nextKey = raw && keys.includes(raw) ? raw : fallbackKey;
    setActiveKeyState(nextKey);
  }, [activeKeyKey, fallbackKey, keys, searchParams]);

  const setActiveKey = useCallback(
    (newKey: string) => {
      if (newKey === activeKeyRef.current) {
        return;
      }

      pushParams((params) => {
        params.set(activeKeyKey, newKey);
      });
    },
    [activeKeyKey, pushParams],
  );

  return (
    <SwapContext value={{ keys, activeKey, setActiveKey }}>
      {children}
    </SwapContext>
  );
}
