import { ErrorCodes } from '@/ts/errors';

export const InvalidResponseError =
  (): ErrorResponse<ErrorCodes> => ({
    error: true,
    message: '',
    errorCode: ErrorCodes.INVALID_RESPONSE
  });
