import { ModalRoot } from "./ModalRoot";
import { ModalBody } from "./ModalBody";
import { ModalPortal } from "./ModalPortal";
import { ModalToggle } from "./ModalToggle";
import { ModalContent } from "./ModalContent";
import { ModalIndicator } from "./ModalIndicator";

export const Modal = Object.assign(ModalRoot, {
  Toggle: ModalToggle,
  Portal: ModalPortal,
  Body: ModalBody,
  Indicator: ModalIndicator,
  Content: ModalContent,
});

export * from "./modalTypes";
