import styles from "./AccountForm.module.css";
import { FC, FormEvent, ReactNode } from "react";

interface AccountFormProps {
  children: ReactNode;
  className?: string;
  onSubmit: (e: FormEvent) => void;
}

const AccountForm: FC<AccountFormProps> = ({
  className,
  children,
  onSubmit,
}) => {
  return (
    <form
      className={
        className ? `${styles.accountForm} ${className}` : styles.accountForm
      }
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
};

export default AccountForm;
