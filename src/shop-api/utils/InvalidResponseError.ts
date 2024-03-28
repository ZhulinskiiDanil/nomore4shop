import { ErrorCodes } from '@/ts/errors';

export const InvalidResponseError =
  (): ErrorResponse<ErrorCodes> => ({
    ok: false,
    code: ErrorCodes.INVALID_RESPONSE
  });
