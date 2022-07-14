import styles from "./AccountLogoutBtn.module.css";
import { Button } from "../UI";
import { useAuthContext } from "../../context/AuthContext";

const AccountLogoutBtn = () => {
  const { logout } = useAuthContext();

  return (
    <Button
      name="log out"
      type="button"
      onClick={() => logout()}
      className={styles.accountLogoutBtn}
    />
  );
};

export default AccountLogoutBtn;
