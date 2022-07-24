import type { NextApiRequest, NextApiResponse } from "next";
import { Order, ApiURL } from "../../types/index";

type Data = {
  error?: {};
  success?: {
    orderId: string;
  };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { order }: { order: Order } = req.body;

  const path: ApiURL =
    "https://nuts-lab-default-rtdb.europe-west1.firebasedatabase.app/orders.json";
  const response = await fetch(path, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  });

  if (!response.ok) {
    res
      .status(response.status)
      .json({ error: "Failed to submit order to the database." });
  }

  const data = await response.json();
  res.status(200).json({
    success: {
      orderId: order.id,
    },
  });
}
