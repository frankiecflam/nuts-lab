import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  error?: {
    message: string;
  };
  success?: {
    message: string;
  };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { localId: userId, name, email } = req.body;

  const response = await fetch(
    "https://nuts-lab-default-rtdb.europe-west1.firebasedatabase.app/users.json",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: userId,
        name: name,
        email: email,
        phone: "",
        address: "",
        order: JSON.stringify({}),
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
    },
  });
}
