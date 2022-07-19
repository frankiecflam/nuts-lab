import { FC, ReactNode, useEffect, useState, useRef } from "react";
import CartContext from "./CartContext";
import { Product, CartItem, CartStatus } from "../types";

interface CartContextProviderProps {
  children: ReactNode;
}

const CartContextProvider: FC<CartContextProviderProps> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartStatus, setCartStatus] = useState<CartStatus>("active");
  const isFirstRender = useRef(true);

  useEffect(() => {
    // During the inital render, get state from local storage
    if (isFirstRender.current) {
      isFirstRender.current = false;

      const cartStateFromLocalStorage =
        window.localStorage.getItem("cartItems");

      // If there is any state retrieved from the localStorage, then update the cart context state
      if (cartStateFromLocalStorage) {
        const {
          items: itemsFromStorage,
          totalPrice: totalPriceFromStorage,
        }: { items: CartItem[]; totalPrice: number } = JSON.parse(
          cartStateFromLocalStorage
        );

        setItems(itemsFromStorage);
        setTotalPrice(totalPriceFromStorage);
      }

      return;
    }

    // For subsequent render, update localStorage with the current state
    window.localStorage.setItem(
      "cartItems",
      JSON.stringify({
        items,
        totalPrice,
      })
    );
  }, [items, totalPrice]);

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

  const handleResetCartContext = () => {
    setItems([]);
    setTotalPrice(0);

    // Reset only performed upon order submission. "submitted" stays for a few secs before resetting back to "active"
    // Don't wanna spilt it into a separate function coz ResetCartContext should reset all states.
    setCartStatus("submitted");
    setTimeout(() => {
      setCartStatus("active");
    }, 3000);
  };

  const CartContextAPI = {
    items,
    totalPrice,
    status: cartStatus,
    addItem: handleAddItem,
    removeItem: handleRemoveItem,
    resetCartContext: handleResetCartContext,
  };

  return (
    <CartContext.Provider value={CartContextAPI}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
