import type { SelectBoxOptionT } from "./selectBoxTypes";
import { parseStringList, serializeStringList } from "../../utils/searchParams";

export function parseSelectBoxValue(
  raw: string | null,
  options: SelectBoxOptionT[],
  multiSelect: true,
): SelectBoxOptionT[];
export function parseSelectBoxValue(
  raw: string | null,
  options: SelectBoxOptionT[],
  multiSelect?: false,
): SelectBoxOptionT | null;
export function parseSelectBoxValue(
  raw: string | null,
  options: SelectBoxOptionT[],
  multiSelect?: boolean,
): SelectBoxOptionT | SelectBoxOptionT[] | null {
  if (!raw) {
    return multiSelect ? [] : null;
  }

  const values = parseStringList(raw);
  const matched = values
    .map((value) => options.find((option) => option.value === value))
    .filter((option): option is SelectBoxOptionT => Boolean(option));

  if (multiSelect) {
    return matched;
  }

  return matched[0] ?? null;
}

export function serializeSelectBoxValue(
  value: SelectBoxOptionT | SelectBoxOptionT[] | null,
): string | null {
  if (Array.isArray(value)) {
    return serializeStringList(value.map((option) => option.value));
  }

  return value?.value ?? null;
}
