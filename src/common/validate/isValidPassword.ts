const passwordRegEx = /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d_\-!@#$%^&*]{8,32}$/g
export const isValidPassword = (password: string): boolean => {
  return !!password?.match?.(passwordRegEx)
}