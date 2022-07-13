import styles from "./Input.module.css";
import { ChangeEvent } from "react";

interface InputProps {
  className?: string;
  id?: string;
  type: string;
  required?: boolean;
  value?: string | undefined;
  minLength?: number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

const Input = ({
  className,
  id,
  type,
  required,
  value,
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
      required={required}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
};

export default Input;
