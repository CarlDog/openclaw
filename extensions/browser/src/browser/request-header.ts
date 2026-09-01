/** Returns the first raw header value; callers own normalization and security policy. */
export function firstHeaderValue(value: string | string[] | undefined): string {
  return Array.isArray(value) ? (value[0] ?? "") : (value ?? "");
}
