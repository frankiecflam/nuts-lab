import { createContext, useContext } from "react";

const CartContext = createContext({
  items: [],
  totalPrice: 0,
  addItem: (item: {}) => {},
  removeItem: (id: string) => {},
});

export default CartContext;

// Global Hook for useContext
export const useCartContext = () => useContext(CartContext);
