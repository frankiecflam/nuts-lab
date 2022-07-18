import styles from "./AccountOrderHistory.module.css";
import { AccountDetailsHeader } from "./index";

const AccountOrderHistory = () => {
  return (
    <div>
      <AccountDetailsHeader name="order history" />
      <ul>Order Item</ul>
    </div>
  );
};

export default AccountOrderHistory;
