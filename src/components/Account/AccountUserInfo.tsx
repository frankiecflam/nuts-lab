import styles from "./AccountUserInfo.module.css";
import { AccountDetailsHeader } from "./index";

const AccountUserInfo = () => {
  return (
    <div>
      <AccountDetailsHeader name="personal details" />
      <p>name</p>
      <p>email</p>
      <p>phone</p>
      <p>shipping address</p>
    </div>
  );
};

export default AccountUserInfo;
