import { Order, ApiURL } from "../../types";

export default async function getSubmittedOrdersByUserId(userEmail: string) {
  const path: ApiURL =
    "https://nuts-lab-default-rtdb.europe-west1.firebasedatabase.app/orders.json";
  const response = await fetch(path);

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
