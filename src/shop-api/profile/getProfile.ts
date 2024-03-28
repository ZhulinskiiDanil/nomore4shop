import { request } from '@request';

import type { User } from '@/ts';

export async function getProfile() {
  const response = await request<User>('/user/@me');

  if (
    $api.utils.isSuccess(response) ||
    $api.utils.isError(response)
  ) {
    return response;
  }

  return $api.utils.InvalidResponseError;
}
