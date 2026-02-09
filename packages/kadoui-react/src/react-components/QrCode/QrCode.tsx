"use client";

import QRCode from "qrcode";
import { useEffect, useRef } from "react";

import type { QrCodePropsT } from "./qrCodeTypes";

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
