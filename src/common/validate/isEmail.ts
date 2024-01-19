const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export function isEmail(email: string){
  return !!email?.match?.(emailRegEx)
}