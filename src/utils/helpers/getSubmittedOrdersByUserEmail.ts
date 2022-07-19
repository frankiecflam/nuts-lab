import { databaseURL } from "../../firebaseClient";
import { Order } from "../../types";

export default async function getSubmittedOrdersByUserId(userEmail: string) {
  const response = await fetch(`${databaseURL}/orders.json`);

  if (!response.ok) {
    throw new Error(
      "Something went wrong fetching orders API from the database"
    );
  }

  const orders = await response.json();

  let submittedOrders: Order[] = [];

  for (const key in orders) {
    orders[key].customerEmail === userEmail &&
      submittedOrders.push(orders[key]);
  }

  if (submittedOrders.length === 0) {
    return null;
  } else {
    return submittedOrders;
  }
}
