import styles from "./AccountFormToggle.module.css";
import { Button } from "../UI";

interface AccountFormToggle {
  onClick: () => void;
  signupFormActive?: boolean;
}

const AccountFormToggle = ({
  onClick,
  signupFormActive,
}: AccountFormToggle) => {
  return (
    <div className={styles.toggleContainer}>
      <p>or</p>
      {signupFormActive && <p>If you already have an account&#44;</p>}
      {!signupFormActive && <p>If you don&apos;t have an account&#44;</p>}
      <Button
        name={signupFormActive ? "log in" : "sign up"}
        type="button"
        className={styles.btnToggler}
        onClick={onClick}
      />
    </div>
  );
};

export default AccountFormToggle;
