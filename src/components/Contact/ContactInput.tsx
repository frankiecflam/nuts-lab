import styles from "./ContactInput.module.css";
import { Input, TextareaInput } from "../Input/index";
import { ChangeEvent } from "react";

interface ContactInputProps {
  id: string;
  type: string;
  textarea?: boolean;
  required?: boolean;
  value?: string | undefined;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

const ContactInput = ({
  type,
  id,
  textarea,
  required,
  value,
  onChange,
  onFocus,
  onBlur,
}: ContactInputProps) => {
  return (
    <>
      {!textarea && (
        <Input
          type={type}
          className={styles.input}
          id={id}
          required={required}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      )}
      {textarea && (
        <TextareaInput
          className={styles.input}
          id={id}
          rows={5}
          cols={20}
          required={required}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      )}
    </>
  );
};

export default ContactInput;
