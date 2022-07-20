import styles from "./HeaderNavItem.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

interface HeaderNavItemProps {
  href: string;
  name: string;
}

const HeaderNavItem = ({ href, name }: HeaderNavItemProps) => {
  const { pathname: currentPathName } = useRouter();
  const isPathActive =
    currentPathName === "/" ? name === "home" : currentPathName === `/${name}`;

  return (
    <li
      className={isPathActive ? `${styles.item} ${styles.active}` : styles.item}
    >
      <Link href={href}>{name}</Link>
    </li>
  );
};

export default HeaderNavItem;
