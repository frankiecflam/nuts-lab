import { Product } from "./index";

type ProductType = Omit<Product, "description" | "topPick">;

export default interface CartItem extends ProductType {
  quantity: number;
}
