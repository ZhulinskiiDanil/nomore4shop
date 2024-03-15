import { request } from '@request';

import { ERROR_CODES } from '@/ts/errors';

export interface ResponseResultSuccess {
  result: object;
}

export interface ResponseResultUnSuccess {
  code: ERROR_CODES;
}

export type ResponseResult = {
  ok: boolean;
} & (ResponseResultSuccess | ResponseResultUnSuccess);

export async function authorize(): Promise<{
  authorized: boolean;
}> {
  const token = useCookie('token');

  const response = await request<
    {
      ok: boolean;
    } & ResponseResultUnSuccess
  >('/users/register', {
    method: 'POST',
    headers: {
      'tg-init-data': token.value || 'null'
    }
  });

  return {
    authorized:
      response?.ok ||
      response?.code === ERROR_CODES.USER_ALREADY_EXISTS
  };
}
