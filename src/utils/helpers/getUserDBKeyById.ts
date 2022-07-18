import { databaseURL } from "../../firebaseClient";

export default async function getUserDBKeyById(id: string) {
  const res = await fetch(`${databaseURL}/users.json`);

  if (!res.ok) {
    throw new Error("Unable to fetch user data from the database");
  }

  const users = await res.json();

  for (const key in users) {
    if (users[key].id === id) {
      return key;
    }
  }
}
