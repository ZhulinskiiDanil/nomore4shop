export function isSuccess<T>(
  value: unknown
): value is SuccessResponse<T> {
  return (
    value instanceof Object && 'ok' in value && 'result' in value
  );
}
