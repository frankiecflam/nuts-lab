import { FC, ReactNode, useState } from "react";
import CartContext from "./CartContext";
import { Product, CartItem } from "../types";

interface CartContextProviderProps {
  children: ReactNode;
}

const CartContextProvider: FC<CartContextProviderProps> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleAddItem = (
    productItem: Product | Omit<Product, "description" | "topPick">,
    addToCartQuantity: number
  ) => {
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
      const existingItemIndex = items.findIndex(
        (item) => item.id === productItem.id
      );
      const existingItem = items[existingItemIndex];

      items[existingItemIndex].quantity += addToCartQuantity;

      setItems(items);

      setTotalPrice(
        (prevState) => prevState + existingItem.price * addToCartQuantity
      );
    }
  };

  const handleRemoveItem = (producItemtId: string, removeAll?: boolean) => {
    // If existingQty === 1, then remove; otherwise, update Qty; UPDATE totalPrice at the end
    const existingItemIndex = items.findIndex(
      (item) => item.id === producItemtId
    );
    const existingItem = items[existingItemIndex];
    const currentExistingItemQty = existingItem.quantity;

    if (currentExistingItemQty === 1 || removeAll) {
      setItems((prevState) =>
        prevState.filter((item) => item.id !== producItemtId)
      );
    } else {
      items[existingItemIndex].quantity -= 1;
      setItems(items);
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
