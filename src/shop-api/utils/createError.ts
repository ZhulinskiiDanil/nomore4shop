import { ErrorCodes } from '@/ts/errors';

export function createError(
  code: ErrorCodes = ErrorCodes.INVALID_RESPONSE
): ErrorResponse<ErrorCodes> {
  return {
    ok: false,
    code
  };
}
