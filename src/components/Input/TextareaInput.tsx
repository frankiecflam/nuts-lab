import styles from "./TextareaInput.module.css";
import { ChangeEvent } from "react";

interface TextareaInputProps {
  className?: string;
  id?: string;
  required?: boolean;
  rows: number;
  cols: number;

  value: string | undefined;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

const TextareaInput = ({
  className,
  id,
  rows,
  cols,
  required,
  value,
  onChange,
  onFocus,
  onBlur,
}: TextareaInputProps) => {
  return (
    <textarea
      className={
        className
          ? `${styles.textareaInput} ${className}`
          : styles.textareaInput
      }
      id={id}
      rows={rows}
      cols={cols}
      required={required}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
};

export default TextareaInput;
