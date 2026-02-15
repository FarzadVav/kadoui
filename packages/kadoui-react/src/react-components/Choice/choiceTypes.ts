import type { ComponentProps, Dispatch, SetStateAction } from "react";

import type { AccessNavigationPropsT } from "../AccessNavigation/AccessNavigation";

type MultiModeT = {
  multiple: true;
  activeChoice: string[];
  setActiveChoice: Dispatch<SetStateAction<string[]>>;
};

type SingleModeT = {
  multiple?: false;
  activeChoice: string | null;
  setActiveChoice: Dispatch<SetStateAction<string | null>>;
};

type MergedModeT = SingleModeT | MultiModeT;

export type ChoiceContextT = MergedModeT & {
  requiredOne?: boolean;
};

export type ChoiceRootPropsT = ComponentProps<"div"> & ChoiceContextT;

export type ChoiceTriggerPropsT = ComponentProps<"button"> & {
  choiceName: string;
};

export type ChoiceNavigationPropsT = AccessNavigationPropsT;

export type ChoiceThumbPropsT = ComponentProps<"span">;
