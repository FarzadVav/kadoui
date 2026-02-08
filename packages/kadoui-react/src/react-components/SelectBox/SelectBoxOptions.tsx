"use client";

import { use } from "react";

import { SelectBoxContext } from "./SelectBoxContext";
import type { SelectBoxOptionT, SelectBoxOptionsPropsT } from "./selectBoxTypes";

export default function SelectBoxOptions(p: SelectBoxOptionsPropsT) {
  const { multiSelect, options, optionValue, setOptionValue, setInputFocused, inputSearch } = use(SelectBoxContext);

  const filteredOptions: SelectBoxOptionT[] = [];
  const otherOptions: SelectBoxOptionT[] = [];

  options.forEach((item) => {
    if (item.name.toLowerCase().includes(inputSearch.toLowerCase().trim())) {
      filteredOptions.push(item);
    } else {
      otherOptions.push(item);
    }
  });

  const renderOptions = (opts: SelectBoxOptionT[], isOther?: boolean) =>
    opts.map((item) => {
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
                setInputFocused(false);
              }
            }
          }}
          {...p}>
          {item.name}
        </button>
      );
    });

  return (
    <>
      {renderOptions(filteredOptions)}
      {renderOptions(otherOptions, true)}
    </>
  );
}
