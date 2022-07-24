import { ApiURL } from "../../types";

export default async function getTopPicks() {
  const path: ApiURL =
    "https://nuts-lab-default-rtdb.europe-west1.firebasedatabase.app/products.json";
  const response = await fetch(path);

  if (!response.ok) {
    throw new Error("Something went wrong!");
  }

  const data = await response.json();

  let loadedProducts = [];
  for (const key in data) {
    loadedProducts.push(data[key]);
  }

  return loadedProducts.filter((product) => product.topPick === true);
}
