import type { NextApiRequest, NextApiResponse } from "next";
import { ref, update } from "firebase/database";
import { db } from "../../firebaseClient";
import { User } from "../../types";

type Data = {
  error?: { message: string };
  success?: { message: string };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { userDBKey, userData }: { userDBKey: string; userData: User } =
    req.body;

  const userRef = ref(db, `users/${userDBKey}`);

  // Update DB
  await update(userRef, userData);

  res.status(200).json({ success: { message: "User data has been updated." } });
}
