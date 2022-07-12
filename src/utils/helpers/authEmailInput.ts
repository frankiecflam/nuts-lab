export default function authEmailInput(inputState: string) {
  return inputState.trim().length > 0 && inputState.includes("@");
}
