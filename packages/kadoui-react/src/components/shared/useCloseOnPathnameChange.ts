"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export function useCloseOnPathnameChange(onClose: () => void) {
  const pathname = usePathname();
  const pathnameRef = useRef(pathname);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    if (pathnameRef.current === pathname) {
      return;
    }

    pathnameRef.current = pathname;
    onCloseRef.current();
  }, [pathname]);
}
