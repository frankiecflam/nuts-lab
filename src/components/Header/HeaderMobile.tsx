import styles from "./HeaderMobile.module.css";

interface HeaderMobileProps {
  mobileActive: boolean;
  onMobileBtnClick: () => void;
}

const HeaderMobile = ({
  mobileActive,
  onMobileBtnClick,
}: HeaderMobileProps) => {
  const classes = mobileActive
    ? `${styles.open} ${styles.mobile}`
    : styles.mobile;

  return <div className={classes} onClick={onMobileBtnClick} />;
};

export default HeaderMobile;
