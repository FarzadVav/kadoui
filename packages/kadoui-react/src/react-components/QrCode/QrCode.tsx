"use client";

import QRCode, { QRCodeRenderersOptions } from "qrcode";
import { type ComponentProps, useEffect, useRef } from "react";

export type QrCodePropsT = ComponentProps<"canvas"> & {
  value: string;
  options?: QRCodeRenderersOptions;
};

export function QrCode({ value, options = {}, ...p }: QrCodePropsT) {
  const canvasRef = useRef(null);

  useEffect(() => {
    console.log(value);
    QRCode.toCanvas(canvasRef.current, value, options, function (error) {
      if (error) console.error(error);
    });
  }, [value, options]);

  return (
    <canvas
      ref={canvasRef}
      {...p}
    />
  );
}
