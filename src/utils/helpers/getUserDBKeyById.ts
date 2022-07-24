import { ApiURL } from "../../types";

export default async function getUserDBKeyById(id: string) {
  const path: ApiURL =
    "https://nuts-lab-default-rtdb.europe-west1.firebasedatabase.app/users.json";
  const res = await fetch(path);

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
