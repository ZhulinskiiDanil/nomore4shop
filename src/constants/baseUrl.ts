export const baseUrl: string = (() => {
  const baseUrl: string = import.meta.env.VITE_API_URL
  const baseUrlEndsWithSlash = baseUrl.endsWith("/")
  
  return baseUrlEndsWithSlash ? baseUrl.slice(0, -1) : baseUrl
})()