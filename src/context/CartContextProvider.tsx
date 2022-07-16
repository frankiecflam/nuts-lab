import { FC, ReactNode, useState } from "react";
import CartContext from "./CartContext";
import { Product, CartItems } from "../types";

interface CartContextProviderProps {
  children: ReactNode;
}

const CartContextProvider: FC<CartContextProviderProps> = ({ children }) => {
  const [items, setItems] = useState<CartItems[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleAddItem = (item: Product) => {
    // Check if item already exists in cart
    // If yes, then update Qty and totalPrice
    // If no, push to cart and then update totalPrice
  };

  const handleRemoveItem = (id: string) => {};

  const CartContextAPI = {
    items,
    totalPrice,
    addItem: handleAddItem,
    removeItem: handleRemoveItem,
  };

  return (
    <CartContext.Provider value={CartContextAPI}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
