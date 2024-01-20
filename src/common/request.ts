import { baseUrl } from "@/constants/baseUrl";

type FilterFirstElement<T extends unknown[]> = T extends [unknown, ...(infer R)]
  ? R
  : [];

export const request = async <T = any>(
  url: string,
  ...args: FilterFirstElement<Parameters<typeof $fetch>>
): Promise<T | null> => {
  const options: typeof args[0] = args[0] || {}
  const token = useCookie('token')

  options.baseURL = baseUrl
  options.ignoreResponseError = true
  options.headers = options.headers || {}
  options.headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "tg-init-data": token.value || 'null'
  }

  try {
    return new Promise(res => {
      $fetch(url, options)
        .then(data => res(data as T))
        .catch(_ => res(null))
    })
  } catch(err) {
    return null
  }
}