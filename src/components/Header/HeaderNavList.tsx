import styles from "./HeaderNavList.module.css";
import { HeaderNavItem } from "./index";

interface HeaderNavListProps {
  mobileActive: boolean;
  onHide: () => void;
}

const HeaderNavList = ({ mobileActive, onHide }: HeaderNavListProps) => {
  const classes = mobileActive
    ? `${styles.list} ${styles.mobile}`
    : styles.list;

  return (
    <ul className={classes} onClick={() => mobileActive && onHide()}>
      <HeaderNavItem href="/" name="home" />
      <HeaderNavItem href="/about" name="about" />
      <HeaderNavItem href="/products" name="products" />
      <HeaderNavItem href="/contact" name="contact" />
    </ul>
  );
};

export default HeaderNavList;
