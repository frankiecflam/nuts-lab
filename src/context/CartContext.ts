import { createContext, useContext } from "react";
import { Product, CartItems } from "../types";

interface CartContextInterface {
  items: CartItems[];
  totalPrice: number;
  addItem: (item: Product) => void;
  removeItem: (id: string) => void;
}

const CartContext = createContext<CartContextInterface>({
  items: [],
  totalPrice: 0,
  addItem: (item: {}) => {},
  removeItem: (id: string) => {},
});

export default CartContext;

// Global Hook for useContext
export const useCartContext = () => useContext(CartContext);
