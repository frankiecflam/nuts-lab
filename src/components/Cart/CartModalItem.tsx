import styles from "./CartModalItem.module.css";
import Image from "next/image";
import { formatPrice } from "../../utils/helpers/index";
import { Button } from "../UI";
import { useCartContext } from "../../context/CartContext";
import { useEffect, useState } from "react";

interface CartModalItemProps {
  id: string;
  title: string;
  price: number;
  image: string;
}

const CartModalItem = ({ id, title, price, image }: CartModalItemProps) => {
  const { quantity: currentItemQty } = useCartContext().items.filter(
    (item) => item.id === id
  )[0];
  const [addToCartQty, setAddAddToCartQty] = useState(currentItemQty);
  const { addItem, removeItem } = useCartContext();

  useEffect(() => {
    setAddAddToCartQty(currentItemQty);
  }, [currentItemQty]);

  const handleItemQuantityIncrement = () => {
    setAddAddToCartQty((prevState) => ++prevState);
  };

  const handleItemQuantityDecrement = () => {
    setAddAddToCartQty((prevState) =>
      prevState === 1 ? prevState : --prevState
    );
    removeItem(id);
  };

  const handleItemRemove = () => {
    removeItem(id, true);
  };

  return (
    <li className={styles.cartModalItem}>
      <div className={styles.cartModalItemImageDiv}>
        <Image
          src={image}
          alt={title}
          layout="fill"
          className={styles.cartModalItemImage}
        />
      </div>
      <div className={styles.cartModalItemText}>
        <div className={styles.cartModalItemTextHeader}>
          <p className={styles.cartModalItemTitle}>{title}</p>
          <p className={styles.cartModalItemPrice}>{formatPrice(price)}</p>
        </div>
        <div className={styles.cartModalItemTextBody}>
          <div className={styles.cartModalItemQtyDiv}>
            <Button
              type="button"
              className={styles.cartModalItemQtyBtn}
              name="-"
              onClick={handleItemQuantityDecrement}
            />
            <p className={styles.addToCartQty}>{addToCartQty}</p>
            <Button
              type="button"
              className={styles.cartModalItemQtyBtn}
              name="+"
              onClick={handleItemQuantityIncrement}
            />
          </div>
          <Button
            type="button"
            name="remove"
            className={styles.cartModalItemRemoveBtn}
            onClick={handleItemRemove}
          />
        </div>
      </div>
    </li>
  );
};

export default CartModalItem;
