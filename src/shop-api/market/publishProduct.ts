import { request } from '@request';

import { ProductState } from '@/ts/market';
import type { Product } from '@/ts/market';

type PublishProductDTO = {
  title: string;
  description: string;
  state: ProductState;
  stateGrade: number;
  size: string;
  price: number;
};

export async function publishProduct({
  title,
  description,
  price,
  size,
  state,
  stateGrade
}: PublishProductDTO) {
  const response = await request<Product>('/market/products', {
    method: 'POST',
    body: {
      title,
      description,
      price,
      size,
      state,
      stateGrade
    }
  });

  if (
    $api.utils.isSuccess(response) ||
    $api.utils.isError(response)
  ) {
    return response;
  }

  return $api.utils.InvalidResponseError();
}
