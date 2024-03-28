export type User = {
  id: number;
  chatId: number;
  username: string;
  firstname: string;
  lastname: string;
  balance: number;

  instagram: string | null;
  description: string | null;

  createdAt: string;
  updatedAt: string;
  verifiedSeller: boolean;
};

export type PublicUser = Partial<User> &
  Pick<User, 'id' | 'username' | 'verifiedSeller'>;
