import { Product } from "./index";

export default interface Order {
  id: string;
  items: Product[];
  price: number;
  status: "active" | "submitted";
}
