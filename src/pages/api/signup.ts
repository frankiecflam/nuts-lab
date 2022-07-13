import type { NextApiRequest, NextApiResponse } from "next";

type ResponseType = {
  data?: {
    idToken: string;
    localId: string;
  };
  error?: { message: string };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { email, password } = req.body;

  const response = await fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.FIREBASE_API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        returnSecureToken: true,
      }),
    }
  );

  if (!response.ok) {
    res.status(response.status).json({
      error: {
        message:
          "Your email has been registered before. Please try another one.",
      },
    });
  }

  const { idToken, localId } = await response.json();
  res.status(response.status).json({ data: { idToken, localId } });
}
