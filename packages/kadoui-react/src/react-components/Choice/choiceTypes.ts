import type { ComponentProps, Dispatch, SetStateAction } from "react";

import type { AccessNavigationPropsT } from "../AccessNavigation/AccessNavigation";

type MultipleModeT = {
  multiple: true;
  activeChoice: string[];
  setActiveChoice: Dispatch<SetStateAction<string[]>>;
};

type SingleModeT = {
  multiple?: false;
  activeChoice: string | null;
  setActiveChoice: Dispatch<SetStateAction<string | null>>;
};

type MergedModeT = SingleModeT | MultipleModeT;

export type ChoiceContextT = MergedModeT & {
  requiredOne?: boolean;
};

export type ChoiceRootPropsT = ComponentProps<"div"> & ChoiceContextT;

export type ChoiceTogglePropsT = Omit<ComponentProps<"button">, "type"> & {
  choiceName: string;
};

export type ChoiceNavigationPropsT = AccessNavigationPropsT;

export type ChoiceThumbPropsT = ComponentProps<"span">;
