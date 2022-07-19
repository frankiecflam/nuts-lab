import { createContext, useContext } from "react";
import { Product, CartItem } from "../types";

interface CartContextInterface {
  items: CartItem[];
  totalPrice: number;
  addItem: (
    productItem: Product | Omit<Product, "description" | "topPick">,
    addToCartQuantity: number
  ) => void;
  removeItem: (producItemtId: string, removeAll?: boolean) => void;
  resetCartContext: () => void;
}

const CartContext = createContext<CartContextInterface>({
  items: [],
  totalPrice: 0,
  addItem: (
    productItem: Product | Omit<Product, "description" | "topPick">,
    addToCartQuantity: number
  ) => {},
  removeItem: (producItemtId: string, removeAll?: boolean) => {},
  resetCartContext: () => {},
});

export default CartContext;

// Global Hook for useContext
export const useCartContext = () => useContext(CartContext);
