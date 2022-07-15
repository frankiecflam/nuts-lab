import { User } from "../../types";

export default async function getUserDetails(idToken: string) {
  // get localId through idToken
  const userDataRes = await fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${process.env.FIREBASE_API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        idToken,
      }),
    }
  );

  if (!userDataRes.ok) {
    return null;
  }

  const {
    users: [userData],
  } = await userDataRes.json();

  const { localId } = userData;

  // Get user data through localId
  const userDetailsRes = await fetch(
    "https://nuts-lab-default-rtdb.europe-west1.firebasedatabase.app/users.json"
  );

  if (!userDataRes.ok) {
    return null;
  }

  const users = await userDetailsRes.json();

  for (const key in users) {
    if (users[key].id === localId) {
      const user: User = users[key];
      return user;
    }
  }
  return null;
}
