import type { SelectBoxOptionT } from "../SelectBox/selectBoxTypes";

export function parseStringList(raw: string | null): string[] {
  if (!raw) {
    return [];
  }

  return raw.split(",").filter(Boolean);
}

export function serializeStringList(values: string[]): string | null {
  return values.length ? values.join(",") : null;
}

export function parseNullableString(raw: string | null): string | null {
  return raw || null;
}

export function parseBooleanParam(raw: string | null): boolean {
  return raw === "true";
}

export function setBooleanParam(
  params: URLSearchParams,
  key: string,
  value: boolean,
) {
  if (value) {
    params.set(key, "true");
  } else {
    params.delete(key);
  }
}

export function setNullableStringParam(
  params: URLSearchParams,
  key: string,
  value: string | null,
) {
  if (value === null) {
    params.delete(key);
  } else {
    params.set(key, value);
  }
}

export function setStringListParam(
  params: URLSearchParams,
  key: string,
  values: string[],
) {
  const serialized = serializeStringList(values);

  if (serialized === null) {
    params.delete(key);
  } else {
    params.set(key, serialized);
  }
}

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
