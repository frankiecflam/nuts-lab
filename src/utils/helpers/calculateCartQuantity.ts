import { CartItem } from "../../types";

export default function calculateCartQuantity(items: CartItem[]): number {
  return items.reduce((accumulataor, item) => {
    return (accumulataor += item.quantity);
  }, 0);
}
