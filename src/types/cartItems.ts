import { Product } from "./index";

type ProductType = Omit<Product, "description" | "topPick">;

export default interface cartItems extends ProductType {
  quantity: number;
}
