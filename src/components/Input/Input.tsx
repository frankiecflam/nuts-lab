import styles from "./Input.module.css";
import { ChangeEvent } from "react";

interface InputProps {
  className?: string;
  id?: string;
  type: string;
  required?: boolean;
  value?: string | undefined;
  autoComplete?: "on" | "off";
  minLength?: number;
  disabled?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

const Input = ({
  className,
  id,
  type,
  required,
  autoComplete,
  value,
  disabled,
  minLength,
  onChange,
  onFocus,
  onBlur,
}: InputProps) => {
  return (
    <input
      className={className ? `${styles.input} ${className}` : styles.input}
      id={id}
      type={type}
      value={value}
      minLength={minLength}
      autoComplete={autoComplete ? autoComplete : "off"}
      disabled={disabled}
      required={required}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
};

export default Input;
