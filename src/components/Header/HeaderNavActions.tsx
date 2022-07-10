import styles from "./HeaderNavActions.module.css";
import Link from "next/link";
import Cart from "../Cart/Cart";

const HeaderNavActions = () => {
  return (
    <div className={styles.actions}>
      <Link href="/account">Account</Link>
      <Cart />
    </div>
  );
};

export default HeaderNavActions;
