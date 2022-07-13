import type { NextApiRequest, NextApiResponse } from "next";

type ResponseType = {
  error?: {
    message: string;
  };
  data?: {
    idToken: string;
  };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { email, password } = req.body;

  const response = await fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.FIREBASE_API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true,
      }),
    }
  );

  if (!response.ok) {
    res.status(response.status).json({
      error: {
        message: "Invalid email and/or password. Please try again!",
      },
    });
  }

  const { idToken } = await response.json();

  res.status(response.status).json({
    data: {
      idToken,
    },
  });
}
