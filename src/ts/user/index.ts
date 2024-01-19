export type User = {
  id: string
  tgId: number
  username: string
  avatarURL: string
  balance: number

  telegram: string
  instagram: string
  description: string
}

export type PublicUser = Pick<User, 'id' | 'tgId' | 'username' | 'avatarURL'>