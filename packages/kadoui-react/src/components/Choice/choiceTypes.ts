import type { ComponentProps } from "react";

import type { AccessNavigationPropsT } from "../AccessNavigation/AccessNavigation";
import type { SearchParamsNavigationOptionsT } from "../shared/searchParamsNavigationTypes";

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

export type ChoiceStateRootPropsT = AccessNavigationPropsT & ChoiceContextT;

export type ChoiceSearchParamsRootBasePropsT = AccessNavigationPropsT &
  SearchParamsNavigationOptionsT & {
    choiceKey?: string;
    requiredOne?: boolean;
  };

export type ChoiceSearchParamsRootMultiplePropsT =
  ChoiceSearchParamsRootBasePropsT & {
    multiple: true;
  };

export type ChoiceSearchParamsRootSinglePropsT =
  ChoiceSearchParamsRootBasePropsT & {
    multiple?: false;
  };

/** @deprecated Use ChoiceStateRootPropsT */
export type ChoiceRootPropsT = ChoiceStateRootPropsT;

export type ChoiceTogglePropsT = Omit<ComponentProps<"button">, "type"> & {
  choiceName: string;
};

export type ChoiceThumbPropsT = ComponentProps<"span">;
