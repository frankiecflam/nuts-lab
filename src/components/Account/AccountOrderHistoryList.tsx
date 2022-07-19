import styles from "./AccountOrderHistoryList.module.css";
import { Order } from "../../types/index";
import { AccountOrderHistoryListItem } from "./index";
import { sortOrderList } from "../../utils/helpers/index";

interface AccountOrderHistoryListProps {
  submittedOrders: Order[];
}

const AccountOrderHistoryList = ({
  submittedOrders,
}: AccountOrderHistoryListProps) => {
  // Sory by Newest
  const sortedSubmittedOrders = sortOrderList(submittedOrders);

  return (
    <ul className={styles.orderHistoryList}>
      <header className={styles.orderHistoryListHeader}>
        <p>order ref.</p>
        <p>date</p>
        <p>details</p>
        <p>price</p>
      </header>
      {sortedSubmittedOrders.map((order) => (
        <AccountOrderHistoryListItem key={order.id} order={order} />
      ))}
    </ul>
  );
};

export default AccountOrderHistoryList;
