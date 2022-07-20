import type { NextApiRequest, NextApiResponse } from "next";
import { databaseURL } from "../../firebaseClient";
import { ContactFeedback } from "../../types";

type Data = {
  error?: { message: string };
  success?: { message: string };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { name, email, message }: ContactFeedback = req.body;

  const response = await fetch(`${databaseURL}/feedbacks.json`, {
    method: "POSt",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, message }),
  });

  if (!response.ok) {
    res.status(response.status).json({
      error: { message: "Failed to submit feedback to the database!" },
    });
  }

  res
    .status(200)
    .json({ success: { message: "The feedback has been submitted!" } });
}
