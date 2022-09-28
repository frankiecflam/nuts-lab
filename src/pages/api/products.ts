import type { NextApiRequest, NextApiResponse } from "next";
import { ApiURL } from "../../types/index";

type Data = {
  error?: {};
  data?: {};
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const path: ApiURL =
    "https://nuts-lab-default-rtdb.europe-west1.firebasedatabase.app/products.json";
  const response = await fetch(path);

  if (!response.ok) {
    return res
      .status(400)
      .json({ error: "Something went wrong fetching API from the database" });
  }

  const data = await response.json();
  res.status(200).json({ data });
}
