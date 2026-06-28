import type { ComponentProps } from "react";
import type { QRCodeRenderersOptions } from "qrcode";

export type QrCodePropsT = ComponentProps<"canvas"> & {
  value: string;
  options?: QRCodeRenderersOptions;
};
