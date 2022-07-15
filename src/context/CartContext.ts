import { createContext, useContext } from "react";
import { Product } from "../types";

interface CartContextInterface {
  items: Product[];
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
