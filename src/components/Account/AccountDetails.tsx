import styles from "./AccountDetails.module.css";
import { SectionHeader, SectionBody } from "../Section";
import {
  AccountUserInfo,
  AccountOrderHistory,
  AccountLogoutBtn,
} from "./index";

const AccountDetails = () => {
  return (
    <>
      <SectionHeader title="account">
        <h2 className={styles.accountSubheading}>Hello, Frankie!</h2>
      </SectionHeader>
      <SectionBody className={styles.accountDetailsBody}>
        <AccountUserInfo />
        <AccountOrderHistory />
        <AccountLogoutBtn />
      </SectionBody>
    </>
  );
};

export default AccountDetails;
