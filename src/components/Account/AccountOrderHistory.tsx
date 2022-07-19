import styles from "./AccountOrderHistory.module.css";
import { AccountDetailsHeader } from "./index";
import { Order } from "../../types/index";

import { AccountOrderHistoryList } from "./index";

interface AccountOrderHistoryProps {
  submittedOrders: Order[];
}

const AccountOrderHistory = ({ submittedOrders }: AccountOrderHistoryProps) => {
  const hasSubmittedOrders = submittedOrders.length > 0;

  return (
    <div className={styles.orderHistory}>
      <AccountDetailsHeader name="order history" />
      <div className={styles.orderHistoryBody}>
        {!hasSubmittedOrders && (
          <p className={styles.orderHistoryEmpty}>No previous orders</p>
        )}
        {hasSubmittedOrders && (
          <AccountOrderHistoryList submittedOrders={submittedOrders} />
        )}
      </div>
    </div>
  );
};

export default AccountOrderHistory;

/*
  header: Order Ref , Date, Details , Price
*/
