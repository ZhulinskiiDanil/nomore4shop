import { request } from '@request';

import type { User } from '@/ts';

export async function getProfile() {
  const response = await request<User>('/user/@me');

  return response?.id ? response : null;
}
