import type { ComponentProps, PropsWithChildren, RefObject } from "react";

import type { AccessNavigationPropsT } from "../AccessNavigation/AccessNavigation";
import type { PopoverBodyPropsT } from "../Popover/popoverTypes";
import type { SearchParamsNavigationOptionsT } from "../shared/searchParamsNavigationTypes";

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
  inputRef: RefObject<HTMLInputElement | null>;
  inputSearch: string;
  setInputSearch: (newInputSearch: string) => void;
  options: SelectBoxOptionT[];
};

export type SelectBoxStateRootPropsT = AccessNavigationPropsT &
  MergedSelectMode & {
    ref?: RefObject<HTMLDivElement | null>;
    options: SelectBoxOptionT[];
  };

export type SelectBoxSearchParamsRootBasePropsT = AccessNavigationPropsT &
  SearchParamsNavigationOptionsT & {
    options: SelectBoxOptionT[];
    valueKey?: string;
    ref?: RefObject<HTMLDivElement | null>;
  };

export type SelectBoxSearchParamsRootMultiplePropsT =
  SelectBoxSearchParamsRootBasePropsT & {
    multiSelect: true;
  };

export type SelectBoxSearchParamsRootSinglePropsT =
  SelectBoxSearchParamsRootBasePropsT & {
    multiSelect?: false;
  };

/** @deprecated Use SelectBoxStateRootPropsT */
export type SelectBoxRootPropsT = SelectBoxStateRootPropsT;

export type SelectBoxFieldPropsT = ComponentProps<"input">;

export type SelectBoxSearchFieldPropsT = ComponentProps<"input">;

export type SelectBoxSearchInputPropsT = ComponentProps<"label">;

export type SelectBoxInputPropsT = ComponentProps<"label">;

export type SelectBoxListPropsT = ComponentProps<"div"> & {
  offset?: number;
  position?: PopoverBodyPropsT["position"];
};

export type SelectBoxOptionsPropsT = ComponentProps<"button">;

export type SelectBoxTogglePropsT = Omit<ComponentProps<"button">, "type">;
