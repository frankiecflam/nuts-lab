import type { NextApiRequest, NextApiResponse } from "next";
import { User } from "../../types";

type Data = {
  error?: {
    message: string;
  };
  success?: {
    message: string;
    user: User;
  };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { localId: userId, name, email } = req.body;

  const user: User = {
    id: userId,
    name,
    email,
    phone: "",
    address: "",
    order: [],
  };

  const response = await fetch(
    "https://nuts-lab-default-rtdb.europe-west1.firebasedatabase.app/users.json",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...user,
        order: JSON.stringify(user.order),
      }),
    }
  );

  if (!response.ok) {
    res.status(response.status).json({
      error: {
        message: "Something went wrong with creating the user in Database.",
      },
    });
  }

  res.status(200).json({
    success: {
      message: "The user has been successfully created in the Database.",
      user,
    },
  });
}
