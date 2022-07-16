import { databaseURL } from "../../firebaseClient";
import { Product } from "../../types/index";

export default async function getProducts() {
  const response = await fetch(`${databaseURL}/products.json`);

  if (!response.ok) {
    throw new Error(
      "Something went wrong with fetching products from the Database"
    );
  }
  const data = await response.json();

  let products: Product[] = [];

  for (const key in data) {
    products.push(data[key]);
  }

  return products;
}
