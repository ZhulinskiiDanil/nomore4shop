export type User = {
  id: number;
  chatId: number;
  tgId: number;
  username: string;
  firstname: string;
  avatar: string | null;
  balance: number;

  instagram: string | null;
  description: string | null;

  createdAt: string;
  updatedAt: string;
  verifiedSeller: boolean;
};

export type PublicUser = Partial<User> &
  Pick<User, 'id' | 'tgId' | 'username' | 'avatar'>;
