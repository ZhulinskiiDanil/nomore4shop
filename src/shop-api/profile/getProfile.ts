import type { User } from '@/ts'
import { request } from "@request"

export async function getProfile() {
  const response = await request<User>('/user/me')
  
  return response?.id ? response : null
}