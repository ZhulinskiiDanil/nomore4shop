export function isSuccess(
  value: unknown
): value is SuccessResponse {
  return (
    value instanceof Object &&
    'success' in value &&
    'data' in value
  );
}
