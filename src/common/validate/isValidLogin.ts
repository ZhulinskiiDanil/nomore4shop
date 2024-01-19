export function isValidLogin(login: string) {
  if (!login || !login.match(/[a-z-A-Z0-9]{3,12}/g)) {
    return false
  }

  return true
}