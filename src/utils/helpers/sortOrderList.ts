import { Order } from "../../types";

export default function sortOrderList(orders: Order[]): Order[] {
  if (orders.length === 1) {
    return orders;
  }

  const sortedOrders = orders.sort((a, b) => {
    const ADate = new Date(a.date).getTime();
    const BDate = new Date(b.date).getTime();

    return BDate - ADate;
  });

  return sortedOrders;
}
