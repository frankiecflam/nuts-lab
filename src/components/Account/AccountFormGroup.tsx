import styles from "./AccountFormGroup.module.css";
import { FC, ReactNode } from "react";

interface AccountFormGroupProps {
  children: ReactNode;
}

const AccountFormGroup: FC<AccountFormGroupProps> = ({ children }) => {
  return <div className={styles.formGroup}>{children}</div>;
};

export default AccountFormGroup;
