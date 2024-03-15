import type { PublicUser } from '../user';

export type Product = {
  id: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null; // Если удален, то когда, или же null

  title: string;
  description: string;
  author: PublicUser;
  imageURLS: string[];
  price: number;

  state: ProductState;
  stateGrade: ProductStateGrade; // 1 - 10
  size: string; // Это может быть как M, S, L, XL, XXL. Так и 43, 43 - 43.5, 40, 41
  // Поэтому тупо сетай любую стрингу (не больше 32 символов)
  // "nn.n - nn.n" - Это максимум, но берем с запасом
};

// XDDD (Рофл, можешь number написать)
export type ProductStateGrade =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10;

export enum ProductState {
  'USED' = 'USED',
  'NEW' = 'NEW'
}

export type PublishProductDTO = {
  title: string;
  description: string;
  state: ProductState;
  stateGrade: ProductStateGrade;
  size: string;
};

export type EditProductDTO = PublishProductDTO;
