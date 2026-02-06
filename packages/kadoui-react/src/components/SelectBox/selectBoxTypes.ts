import type { ComponentProps, ComponentPropsWithoutRef, Dispatch, RefObject, SetStateAction } from "react";

import type { AccessNavigationPropsT } from "../AccessNavigation/AccessNavigation";

export type SelectBoxOptionT = { name: string; value: string };

export type WithMultiSelect = {
  multiSelect: true;
  optionValue: SelectBoxOptionT[];
  setOptionValue: Dispatch<SetStateAction<SelectBoxOptionT[]>>;
};

export type WithSingleSelect = {
  multiSelect?: false;
  optionValue: SelectBoxOptionT | null;
  setOptionValue: Dispatch<SetStateAction<SelectBoxOptionT | null>>;
};

export type MergedSelectMode = WithMultiSelect | WithSingleSelect;

export type SelectBoxContextT = MergedSelectMode & {
  inputFocused: boolean;
  setInputFocused: Dispatch<SetStateAction<boolean>>;
  inputSearch: string;
  setInputSearch: Dispatch<SetStateAction<string>>;
  options: SelectBoxOptionT[];
};

export type SelectBoxRootPropsT = ComponentPropsWithoutRef<"div"> &
  MergedSelectMode & {
    ref?: RefObject<HTMLDivElement | null>
    options: SelectBoxOptionT[];
  };

export type SelectBoxFieldPropsT = ComponentProps<"input">;

export type SelectBoxSearchFieldPropsT = ComponentProps<"input">;

export type SelectBoxSearchInputPropsT = ComponentProps<"label">;

export type SelectBoxInputPropsT = ComponentProps<"label">;

export type SelectBoxListPropsT = Omit<AccessNavigationPropsT, "direction" | "focusOnMount">;

export type SelectBoxOptionsPropsT = ComponentProps<"button">;
