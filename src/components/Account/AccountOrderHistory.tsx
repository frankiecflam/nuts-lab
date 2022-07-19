import styles from "./AccountOrderHistory.module.css";
import { AccountDetailsHeader } from "./index";
import { Order } from "../../types/index";

interface AccountOrderHistoryProps {
  submittedOrders: Order[] | null;
}

const AccountOrderHistory = ({ submittedOrders }: AccountOrderHistoryProps) => {
  return (
    <div>
      <AccountDetailsHeader name="order history" />
      <ul>Order Item</ul>
    </div>
  );
};

export default AccountOrderHistory;
