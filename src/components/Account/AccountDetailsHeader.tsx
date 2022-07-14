import styles from "./AccountDetailsHeader.module.css";

interface AccountDetailsHeaderProps {
  name: string;
}

const AccountDetailsHeader = ({ name }: AccountDetailsHeaderProps) => {
  return (
    <header className={styles.detailsHeader}>
      <h1 className={styles.detailsHeading}>{name}</h1>
    </header>
  );
};

export default AccountDetailsHeader;
