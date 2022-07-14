import styles from "./AccountLogoutBtn.module.css";
import { Button } from "../UI";
import { useAuthContext } from "../../context/AuthContext";

const AccountLogoutBtn = () => {
  const { logout } = useAuthContext();

  const handleLogout = async () => {
    logout();
    const logoutRes = await fetch("api/logout");

    if (!logoutRes) {
      throw new Error("Something went wrong logging out the account");
    }
  };

  return (
    <Button
      name="log out"
      type="button"
      onClick={handleLogout}
      className={styles.accountLogoutBtn}
    />
  );
};

export default AccountLogoutBtn;
