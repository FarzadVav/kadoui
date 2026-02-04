"use client";

import { useEffect, useRef } from "react";

import { OtpContext } from "./OtpContext";
import {
  AccessNavigation,
  AccessNavigationPropsT,
} from "../AccessNavigation/AccessNavigation";

export type OtpRootPropsT = Omit<AccessNavigationPropsT, "direction">;

export function OtpRoot(p: OtpRootPropsT) {
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    inputs.current[0]?.focus();
  }, []);

  const getInputsValue = () => {
    return inputs?.current.map((input) => input?.value || "").join("") || "";
  };

  return (
    <OtpContext value={{ inputs, getInputsValue }}>
      <AccessNavigation
        direction="x"
        {...p}
      />
    </OtpContext>
  );
}
