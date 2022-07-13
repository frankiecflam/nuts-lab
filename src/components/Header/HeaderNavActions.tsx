import styles from "./HeaderNavActions.module.css";
import Link from "next/link";
import Cart from "../Cart/Cart";
import { AccountIcon } from "../../assets/Icons";

const HeaderNavActions = () => {
  return (
    <div className={styles.actions}>
      <Link href="/account">
        <a>
          <AccountIcon />
        </a>
      </Link>
      <Cart />
    </div>
  );
};

export default HeaderNavActions;
