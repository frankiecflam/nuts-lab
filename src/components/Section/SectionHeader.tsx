import styles from "./SectionHeader.module.css";

interface SectionHeaderProps {
  title: string;
}

const SectionHeader = ({ title }: SectionHeaderProps) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.heading}>{title}</h1>
    </header>
  );
};

export default SectionHeader;
