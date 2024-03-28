import { ErrorCodes } from '@/ts/errors';

export function createError(
  code: ErrorCodes = ErrorCodes.INVALID_RESPONSE,
  message: string = ''
): ErrorResponse<ErrorCodes> {
  return {
    error: true,
    message,
    errorCode: code
  };
}
