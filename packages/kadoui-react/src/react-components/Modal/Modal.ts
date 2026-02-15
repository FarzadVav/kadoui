import { ModalRoot } from "./ModalRoot";
import { ModalBody } from "./ModalBody";
import { ModalHeader } from "./ModalHeader";
import { ModalPortal } from "./ModalPortal";
import { ModalToggle } from "./ModalToggle";
import { ModalContent } from "./ModalContent";

export const Modal = Object.assign(ModalRoot, {
  Toggle: ModalToggle,
  Portal: ModalPortal,
  Body: ModalBody,
  Header: ModalHeader,
  Content: ModalContent,
});

export * from "./modalTypes";
