import styles from "./AccountInput.module.css";
import { Input } from "../Input";
import { ChangeEvent } from "react";

interface AccountInputProps {
  id: string;
  type: string;
  required?: boolean;
  value?: string | undefined;
  minLength?: number;
  autoComplete?: "on" | "off";
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

const AccountInput = ({
  id,
  type,
  required,
  value,
  autoComplete,
  minLength,
  onChange,
  onFocus,
  onBlur,
}: AccountInputProps) => {
  return (
    <Input
      className={styles.input}
      type={type}
      id={id}
      minLength={minLength}
      autoComplete={autoComplete ? autoComplete : "off"}
      required={required}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
};

export default AccountInput;
