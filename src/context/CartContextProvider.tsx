import { FC, ReactNode } from "react";
import CartContext from "./CartContext";
import { useState } from "react";
import { Product } from "../types";

interface CartContextProviderProps {
  children: ReactNode;
}

const CartContextProvider: FC<CartContextProviderProps> = ({ children }) => {
  const [items, setItems] = useState<Product[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleAddItem = (item: Product) => {};

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
