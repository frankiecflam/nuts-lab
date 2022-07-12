import styles from "./Input.module.css";
import { ChangeEvent } from "react";

interface InputProps {
  className?: string;
  id?: string;
  type: string;
  required?: boolean;

  value?: string | undefined;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

const Input = ({
  className,
  id,
  type,
  required,
  onChange,
  onFocus,
  onBlur,
}: InputProps) => {
  return (
    <input
      className={className ? `${styles.input} ${className}` : styles.input}
      id={id}
      type={type}
      required={required}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
};

export default Input;
