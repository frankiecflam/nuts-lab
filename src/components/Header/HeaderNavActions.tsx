import styles from "./HeaderNavActions.module.css";
import Link from "next/link";
import Cart from "../Cart/Cart";
import { AccountIcon } from "../../assets/Icons";

interface HeaderNavActionsProps {
  mobileActive: boolean;
  onHide: () => void;
}

const HeaderNavActions = ({ mobileActive, onHide }: HeaderNavActionsProps) => {
  return (
    <div className={styles.actions} onClick={() => mobileActive && onHide()}>
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
