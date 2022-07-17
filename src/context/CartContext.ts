import { createContext, useContext } from "react";
import { Product, CartItem } from "../types";

interface CartContextInterface {
  items: CartItem[];
  totalPrice: number;
  addItem: (productItem: Product, addToCartQuantity: number) => void;
  removeItem: (producItemtId: string, removeAll?: boolean) => void;
}

const CartContext = createContext<CartContextInterface>({
  items: [],
  totalPrice: 0,
  addItem: (productItem: Product, addToCartQuantity: number) => {},
  removeItem: (producItemtId: string, removeAll?: boolean) => {},
});

export default CartContext;

// Global Hook for useContext
export const useCartContext = () => useContext(CartContext);
