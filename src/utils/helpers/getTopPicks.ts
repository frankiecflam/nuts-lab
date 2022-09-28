import { Product } from "../../types";

export default function getTopPicks(products: Product[]) {
  return products.filter((product) => product.topPick === true);
}
