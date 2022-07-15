import { FC, ReactNode } from "react";
import CartContext from "./CartContext";
import { useState } from "react";

interface CartContextProviderProps {
  children: ReactNode;
}

const CartContextProvider: FC<CartContextProviderProps> = ({ children }) => {
  const [items, setItems] = useState<any>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleAddItem = (item: {}) => {};

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
