import styles from "./HeaderMobile.module.css";

interface HeaderMobileProps {
  onClick: () => void;
  mobileActive: boolean;
}

const HeaderMobile = ({ onClick, mobileActive }: HeaderMobileProps) => {
  const classes = mobileActive
    ? `${styles.open} ${styles.mobile}`
    : styles.mobile;

  return <div className={classes} onClick={onClick} />;
};

export default HeaderMobile;
