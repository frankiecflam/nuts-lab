import type { NextApiRequest, NextApiResponse } from "next";
import { User, ApiURL } from "../../types/index";

type Data = {
  error?: {
    message: string;
  };
  user?: User;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { localId: userId } = req.body;

  const path: ApiURL =
    "https://nuts-lab-default-rtdb.europe-west1.firebasedatabase.app/users.json";
  const response = await fetch(path);

  if (!response.ok) {
    res
      .status(response.status)
      .json({ error: { message: "Unable to fetch user data from Database" } });
  }

  const users = await response.json();

  for (const key in users) {
    if (users[key].id === userId) {
      const user: User = users[key];
      res.status(200).json({ user });
      return;
    }
  }

  res
    .status(400)
    .json({ error: { message: "No users match with the localId provided!" } });
}
