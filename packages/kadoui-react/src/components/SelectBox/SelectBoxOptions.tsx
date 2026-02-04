"use client";

import { ButtonHTMLAttributes, Dispatch, SetStateAction, use } from "react";

import { SelectBoxOptionT } from "./types";
import { SelectBoxContext } from "./SelectBoxContext";

type WithMultiSelect = {
  multiSelect: true;
  optionValue: SelectBoxOptionT[];
  setOptionValue: Dispatch<SetStateAction<SelectBoxOptionT[]>>;
};

type WithSingleSelect = {
  multiSelect?: false;
  optionValue: SelectBoxOptionT | null;
  setOptionValue: Dispatch<SetStateAction<SelectBoxOptionT | null>>;
};

type MergedSelectMode = WithMultiSelect | WithSingleSelect;

type SelectBoxOptionsPropsT = ButtonHTMLAttributes<HTMLButtonElement> &
  MergedSelectMode & {
    options: SelectBoxOptionT[];
  };

export default function SelectBoxOptions({
  options,
  multiSelect,
  optionValue,
  setOptionValue,
  ...p
}: SelectBoxOptionsPropsT) {
  const { setInputFocused, inputSearch, setInputSearch } = use(SelectBoxContext);

  const filteredOptions: SelectBoxOptionT[] = [];
  const otherOptions: SelectBoxOptionT[] = [];
  options.forEach((item) => {
    if (item.name.toLowerCase().includes(inputSearch.toLowerCase().trim())) {
      filteredOptions.push(item);
    } else {
      otherOptions.push(item);
    }
  });

  const renderOptions = (options: SelectBoxOptionT[], isOther?: boolean) => {
    return options.map((item) => {
      const isSelected = multiSelect
        ? optionValue.some((v) => v.value === item.value)
        : optionValue?.value === item.value;

      return (
        <button
          type="button"
          key={item.value}
          disabled={isOther}
          data-state={isSelected}
          onClick={() => {
            if (multiSelect) {
              if (isSelected) {
                setOptionValue(optionValue.filter((v) => v.value !== item.value));
              } else {
                setOptionValue([...optionValue, item]);
              }
            } else {
              if (isSelected) {
                setOptionValue(null);
              } else {
                setOptionValue(item);
                setInputSearch(item.name);
                setInputFocused(false);
              }
            }
          }}
          {...p}>
          {item.name}
        </button>
      );
    });
  };

  return (
    <>
      {renderOptions(filteredOptions)}
      {renderOptions(otherOptions, true)}
    </>
  );
}
