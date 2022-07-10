import type { NextApiRequest, NextApiResponse } from "next";
import { databaseURL } from "../../firebase";

type Data = {
  error?: {};
  data?: {};
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const response = await fetch(`${databaseURL}/products.json`);

  if (!response.ok) {
    res
      .status(400)
      .json({ error: "Something went wrong fetching API from the database" });
  }

  const data = await response.json();
  res.status(200).json({ data });
}
