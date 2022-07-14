import type { NextApiRequest, NextApiResponse } from "next";
import cookie from "cookie";

type Data = {
  status: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // remove cookies[authToken] upon logging out
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("authToken", "", {
      httpOnly: true,
      expires: new Date(0),
      sameSite: "strict",
      path: "/",
    })
  );
  res.status(200).json({ status: "Successfully logged out" });
}
