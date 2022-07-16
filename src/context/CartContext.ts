import { createContext, useContext } from "react";
import { Product, CartItem } from "../types";

interface CartContextInterface {
  items: CartItem[];
  totalPrice: number;
  addItem: (productItem: Product, addToCartQuantity: number) => void;
  removeItem: (id: string) => void;
}

const CartContext = createContext<CartContextInterface>({
  items: [],
  totalPrice: 0,
  addItem: (productItem: Product, addToCartQuantity: number) => {},
  removeItem: (producItemtId: string) => {},
});

export default CartContext;

// Global Hook for useContext
export const useCartContext = () => useContext(CartContext);
