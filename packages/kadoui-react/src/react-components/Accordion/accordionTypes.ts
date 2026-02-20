import type { HTMLMotionProps } from "framer-motion";
import type { ComponentProps, PropsWithChildren, ReactNode } from "react";
import { AccessNavigationPropsT } from "../AccessNavigation/AccessNavigation";

type MultipleModeT = {
  multiple: true;
  accordionState: string[];
  onAccordionChange: (newItems: string[]) => void;
};

type SingleModeT = {
  multiple?: false;
  accordionState: string | null;
  onAccordionChange: (newItems: string | null) => void;
};

type MergedModeT = SingleModeT | MultipleModeT;

export type AccordionContextT = MergedModeT;

export type AccordionRootPropsT = AccordionContextT & AccessNavigationPropsT;

export type AccordionItemContextT = {
  itemName: string;
}

export type AccordionItemPropsT = AccordionItemContextT & PropsWithChildren;

export type AccordionBodyPropsT = HTMLMotionProps<"div">;

export type AccordionContentPropsT = ComponentProps<"div">;

export type AccordionTogglePropsT = Omit<ComponentProps<"button">, "type"> & {
  icon?: ReactNode;
};
