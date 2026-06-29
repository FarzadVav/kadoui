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
