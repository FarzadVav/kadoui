import type { ComponentProps, RefObject } from "react";

import type { AccessNavigationPropsT } from "../AccessNavigation/AccessNavigation";

export type SelectBoxOptionT = { name: string; value: string };

export type WithMultiSelect = {
  multiSelect: true;
  optionValue: SelectBoxOptionT[];
  setOptionValue: (newOptionValue: SelectBoxOptionT[]) => void;
};

export type WithSingleSelect = {
  multiSelect?: false;
  optionValue: SelectBoxOptionT | null;
  setOptionValue: (newOptionValue: SelectBoxOptionT | null) => void;
};

export type MergedSelectMode = WithMultiSelect | WithSingleSelect;

export type SelectBoxContextT = MergedSelectMode & {
  inputFocused: boolean;
  setInputFocused: (newState: boolean) => void;
  inputSearch: string;
  setInputSearch: (newInputSearch: string) => void;
  options: SelectBoxOptionT[];
};

export type SelectBoxRootPropsT = AccessNavigationPropsT &
  MergedSelectMode & {
    ref?: RefObject<HTMLDivElement | null>
    options: SelectBoxOptionT[];
  };

export type SelectBoxFieldPropsT = ComponentProps<"input">;

export type SelectBoxSearchFieldPropsT = ComponentProps<"input">;

export type SelectBoxSearchInputPropsT = ComponentProps<"label">;

export type SelectBoxInputPropsT = ComponentProps<"label">;

export type SelectBoxListPropsT = ComponentProps<"div">;

export type SelectBoxOptionsPropsT = ComponentProps<"button">;
