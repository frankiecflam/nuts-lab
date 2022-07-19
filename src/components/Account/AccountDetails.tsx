import styles from "./AccountDetails.module.css";
import { SectionHeader, SectionBody } from "../Section";
import {
  AccountUserInfo,
  AccountOrderHistory,
  AccountLogoutBtn,
} from "./index";
import { User, Order } from "../../types/index";

interface AccountDetailsProps {
  user: User;
  submittedOrders: Order[] | null;
  onSetUserDetails: (user: User) => void;
}

const AccountDetails = ({
  user,
  submittedOrders,
  onSetUserDetails,
}: AccountDetailsProps) => {
  return (
    <>
      <SectionHeader title="account">
        <h2 className={styles.accountSubheading}>Hello, {user.name}!</h2>
      </SectionHeader>
      <SectionBody className={styles.accountDetailsBody}>
        <AccountUserInfo user={user} onSetUserDetails={onSetUserDetails} />
        <AccountOrderHistory submittedOrders={submittedOrders} />
        <AccountLogoutBtn />
      </SectionBody>
    </>
  );
};

export default AccountDetails;
