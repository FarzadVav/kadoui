import { ModalBody } from "./ModalBody";
import { ModalPortal } from "./ModalPortal";
import { ModalToggle } from "./ModalToggle";
import { ModalContent } from "./ModalContent";
import { ModalIndicator } from "./ModalIndicator";
import { ModalStateRoot } from "./ModalStateRoot";
import { ModalSearchParamsRoot } from "./ModalSearchParamsRoot";

const baseComponents = {
  Toggle: ModalToggle,
  Portal: ModalPortal,
  Body: ModalBody,
  Indicator: ModalIndicator,
  Content: ModalContent,
};

export const ModalWithState = Object.assign(ModalStateRoot, baseComponents);

export const ModalWithSearchParams = Object.assign(
  ModalSearchParamsRoot,
  baseComponents,
);

export const Modal = ModalWithState;

export * from "./modalTypes";
