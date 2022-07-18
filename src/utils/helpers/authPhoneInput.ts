// at least 9 digits in the UK
export default function authPhoneInput(inputState: string) {
  return inputState.trim().length > 8;
}
