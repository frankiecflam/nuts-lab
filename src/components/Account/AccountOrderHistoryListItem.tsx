import styles from "./AccountOrderHistoryListItem.module.css";
import { Button } from "../UI/index";
import {
  formatOrderDate,
  formatOrderRef,
  formatPrice,
} from "../../utils/helpers/index";
import { Order } from "../../types/index";
import { AccountOrderDetails } from "./index";

interface AccountOrderHistoryListItemProps {
  order: Order;
}

const AccountOrderHistoryListItem = ({
  order,
}: AccountOrderHistoryListItemProps) => {
  const orderRef = formatOrderRef(order.id);
  const orderDate = formatOrderDate(new Date(order.date));
  const orderPrice = formatPrice(order.price);

  return (
    <li key={order.id} className={styles.orderHistoryItem}>
      <p>{orderRef}</p>
      <p>{orderDate}</p>
      <AccountOrderDetails order={order} />
      <p>{orderPrice}</p>
    </li>
  );
};

export default AccountOrderHistoryListItem;
