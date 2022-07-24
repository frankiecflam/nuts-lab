import type { NextApiRequest, NextApiResponse } from "next";
import { Order, ApiURL } from "../../types/index";

type Data = {
  error?: { message: string };
  orders?: Order[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { email: userEmail }: { email: string } = req.body;

  const path: ApiURL =
    "https://nuts-lab-default-rtdb.europe-west1.firebasedatabase.app/orders.json";
  const response = await fetch(path);

  if (!response.ok) {
    res.status(response.status).json({
      error: {
        message: "Something went wrong fetching orders API from the database",
      },
    });
  }

  const orders = await response.json();

  let submittedOrders: Order[] = [];

  for (const key in orders) {
    orders[key].customerEmail === userEmail &&
      submittedOrders.push(orders[key]);
  }

  res.status(200).json({ orders: submittedOrders });
}
