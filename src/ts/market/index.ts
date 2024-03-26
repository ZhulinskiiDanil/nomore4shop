import type { PublicUser } from '../user';

export type FilterData = {
  search: string;
  state: ProductState;
  stateGrade: number;
  price: {
    min: number;
    max: number;
  };
};

export type Product = {
  id: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;

  title: string;
  description: string;
  author: PublicUser;
  imageURLS: string[];
  price: number;

  state: ProductState;
  stateGrade: number; // 1 - 10
  size: string;
};

export enum ProductState {
  'USED' = 'USED',
  'NEW' = 'NEW'
}

export type PublishProductDTO = {
  title: string;
  description: string;
  state: ProductState;
  stateGrade: number;
  size: string;
};

export type EditProductDTO = PublishProductDTO;
