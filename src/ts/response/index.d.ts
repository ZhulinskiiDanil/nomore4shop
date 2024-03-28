type ErrorResponse<
  ErrorCodes extends
    import('@/ts/errors').ErrorCodes = import('@/ts/errors').ErrorCodes
> = {
  ok: false;
  code: ErrorCodes;
};

type SuccessResponse<T = null> = {
  ok: true;
  result: T;
};

type MixedResponse<
  SuccessState = null,
  ErrorCodes extends
    import('@/ts/errors').ErrorCodes = import('@/ts/errors').ErrorCodes
> = SuccessResponse<SuccessState> | ErrorResponse<ErrorCodes>;
