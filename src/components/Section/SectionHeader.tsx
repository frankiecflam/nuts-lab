import styles from "./SectionHeader.module.css";
import { FC } from "react";

interface SectionHeaderProps {
  title: string;
  children?: React.ReactNode;
}

const SectionHeader: FC<SectionHeaderProps> = ({ title, children }) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.heading}>{title}</h1>
      {children}
    </header>
  );
};

export default SectionHeader;
