import styles from "./AccountDetails.module.css";
import { SectionHeader, SectionBody } from "../Section";
import {
  AccountUserInfo,
  AccountOrderHistory,
  AccountLogoutBtn,
} from "./index";
import { User } from "../../types/index";

interface AccountDetailsProps {
  user: User;
}

const AccountDetails = ({ user }: AccountDetailsProps) => {
  return (
    <>
      <SectionHeader title="account">
        <h2 className={styles.accountSubheading}>Hello, {user.name}!</h2>
      </SectionHeader>
      <SectionBody className={styles.accountDetailsBody}>
        <AccountUserInfo user={user} />
        <AccountOrderHistory />
        <AccountLogoutBtn />
      </SectionBody>
    </>
  );
};

export default AccountDetails;
