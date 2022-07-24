import { Product, ApiURL } from "../../types/index";

export default async function getProducts() {
  const path: ApiURL =
    "https://nuts-lab-default-rtdb.europe-west1.firebasedatabase.app/products.json";
  const response = await fetch(path);

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
