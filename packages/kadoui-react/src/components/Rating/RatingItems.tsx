"use client";

import { ButtonHTMLAttributes, ReactNode, use } from "react";

import { RatingContext } from "./RatingContext";

export type RatingItemsPropsT = ButtonHTMLAttributes<HTMLButtonElement> & {
  count: number;
  value: number;
  onValueChange: (newValue: number) => void;
  element: ReactNode;
  activeElement: ReactNode;
}

export function RatingItems({ count, value, onValueChange, element, activeElement, ...p }: RatingItemsPropsT) {
  const { hoverValue, setHoverValue } = use(RatingContext);

  const displayValue = hoverValue !== null ? hoverValue : value;

  return (
    Array.from({ length: count }).map((_, index) => {
      const itemValue = index + 1;
      const isActive = itemValue <= displayValue;

      return (
        <button
          key={index}
          role="radio"
          type="button"
          aria-checked={itemValue === value}
          onClick={() => onValueChange(itemValue)}
          onMouseEnter={() => setHoverValue(itemValue)}
          aria-label={`${itemValue} out of ${count} stars`}
          {...p}
        >
          {isActive ? activeElement : element}
        </button>
      )
    })
  )
}