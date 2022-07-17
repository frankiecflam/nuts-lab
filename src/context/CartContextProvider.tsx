import { FC, ReactNode, useState } from "react";
import CartContext from "./CartContext";
import { Product, CartItem } from "../types";

interface CartContextProviderProps {
  children: ReactNode;
}

const CartContextProvider: FC<CartContextProviderProps> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleAddItem = (productItem: Product, addToCartQuantity: number) => {
    // Check if item already exists in cart
    const itemAlreadyExist = items.find((item) => item.id === productItem.id);
    // If no, update items and price states
    if (!itemAlreadyExist) {
      const newItem: CartItem = {
        id: productItem.id,
        title: productItem.title,
        price: productItem.price,
        image: productItem.image,
        quantity: addToCartQuantity,
      };
      setItems((prevState) => [...prevState, newItem]);
      setTotalPrice(
        (prevState) => prevState + newItem.price * addToCartQuantity
      );
    } else {
      // If yes, then update Qty and totalPrice
      const existingItem =
        items[items.findIndex((item) => item.id === productItem.id)];

      const updatedExistingItem: CartItem = {
        ...existingItem,
        quantity: (existingItem.quantity += addToCartQuantity),
      };

      setItems((prevState) => [
        ...prevState.filter((item) => item.id !== existingItem.id),
        updatedExistingItem,
      ]);

      setTotalPrice(
        (prevState) => prevState + existingItem.price * addToCartQuantity
      );
    }
  };

  const handleRemoveItem = (producItemtId: string, removeAll?: boolean) => {
    // If existingQty === 1, then remove; otherwise, update Qty; UPDATE totalPrice at the end
    const existingItem = items.find((item) => item.id === producItemtId);

    if (!existingItem) return;

    const currentExistingItemQty = existingItem.quantity;

    if (currentExistingItemQty === 1 || removeAll) {
      setItems((prevState) =>
        prevState.filter((item) => item.id !== producItemtId)
      );
    } else {
      const updatedExistingItem: CartItem = {
        ...existingItem,
        quantity: (existingItem!.quantity -= 1),
      };
      setItems((prevState) => [
        ...prevState.filter((item) => item.id !== existingItem.id),
        updatedExistingItem,
      ]);
    }

    setTotalPrice((prevState) =>
      removeAll
        ? (prevState -= existingItem.price * currentExistingItemQty)
        : (prevState -= existingItem.price)
    );
  };

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
