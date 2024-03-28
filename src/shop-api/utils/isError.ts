type GetErrorResponseFrom<T extends unknown> = T extends infer E
  ? E extends ErrorResponse
    ? E
    : never
  : never;

export function isError<T = unknown>(
  value: T | GetErrorResponseFrom<T>
): value is GetErrorResponseFrom<T> {
  return (
    value instanceof Object && 'ok' in value && 'code' in value
  );
}
