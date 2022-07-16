import { Product } from "./index";

type ProductType = Omit<Product, "description" | "topPick">;

export default interface cartItem extends ProductType {
  quantity: number;
}
