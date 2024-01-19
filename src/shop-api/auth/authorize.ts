import { request } from "@request";

export async function authorize() {
  const response = await request('/')

  return response
}