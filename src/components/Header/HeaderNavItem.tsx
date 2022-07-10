import styles from "./HeaderNavItem.module.css";
import Link from "next/link";

interface HeaderNavItemProps {
  href: string;
  name: string;
}

const HeaderNavItem = ({ href, name }: HeaderNavItemProps) => {
  return (
    <li className={styles.item}>
      <Link href={href}>{name}</Link>
    </li>
  );
};

export default HeaderNavItem;
