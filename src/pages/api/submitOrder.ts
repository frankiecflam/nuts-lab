import type { NextApiRequest, NextApiResponse } from "next";
import { databaseURL } from "../../firebaseClient";
import { Order } from "../../types/index";

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

  const response = await fetch(`${databaseURL}/orders.json`, {
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
