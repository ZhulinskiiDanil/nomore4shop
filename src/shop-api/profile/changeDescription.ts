import { request } from '@request';

type ChangeDescriptionDTO = {
  description: string;
};

export async function changeDescription({
  description
}: ChangeDescriptionDTO) {
  const response = await request<{ updated: boolean }>(
    '/user/@me/settings/description',
    {
      method: 'POST',
      body: {
        value: description
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
