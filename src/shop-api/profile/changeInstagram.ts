import { request } from '@request';

type ChangeInstagramDTO = {
  instagram: string;
};

export async function changeInstagram({
  instagram
}: ChangeInstagramDTO) {
  const response = await request<{ updated: boolean }>(
    '/user/@me/settings/instagram',
    {
      method: 'POST',
      body: {
        value: instagram
      }
    }
  );

  if (
    $api.utils.isSuccess(response) ||
    $api.utils.isError(response)
  ) {
    return response;
  }

  return $api.utils.InvalidResponseError();
}
