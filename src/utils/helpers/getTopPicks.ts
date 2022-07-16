import { databaseURL } from "../../firebaseClient";

export default async function getTopPicks() {
  const response = await fetch(`${databaseURL}/products.json`);

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
