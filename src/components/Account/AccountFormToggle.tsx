import styles from "./AccountFormToggle.module.css";
import { Button } from "../UI";

interface AccountFormToggle {
  onClick: () => void;
}

const AccountFormToggle = ({ onClick }: AccountFormToggle) => {
  return (
    <div className={styles.toggleContainer}>
      <p>or</p>
      <p>If you already have an account,</p>
      <Button
        name="log in"
        type="button"
        className={styles.btnToggler}
        onClick={onClick}
      />
    </div>
  );
};

export default AccountFormToggle;
