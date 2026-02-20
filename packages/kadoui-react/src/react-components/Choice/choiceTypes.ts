import type { ComponentProps } from "react";

import type { AccessNavigationPropsT } from "../AccessNavigation/AccessNavigation";

type MultipleModeT = {
  multiple: true;
  choiceState: string[];
  onChoiceChange: (activeChoice: string[]) => void;
};

type SingleModeT = {
  multiple?: false;
  choiceState: string | null;
  onChoiceChange: (activeChoice: string | null) => void;
};

type MergedModeT = SingleModeT | MultipleModeT;

export type ChoiceContextT = MergedModeT & {
  requiredOne?: boolean;
};

export type ChoiceRootPropsT = AccessNavigationPropsT & ChoiceContextT;

export type ChoiceTogglePropsT = Omit<ComponentProps<"button">, "type"> & {
  choiceName: string;
};

export type ChoiceThumbPropsT = ComponentProps<"span">;
