import styles from "./CartModalItem.module.css";
import Image from "next/image";
import { formatPrice } from "../../utils/helpers/index";
import { Button } from "../UI";
import { useCartContext } from "../../context/CartContext";
import { CartItem } from "../../types";
import Link from "next/link";

interface CartModalItemProps {
  item: CartItem;
  onCloseModal: () => void;
}

const CartModalItem = ({ item, onCloseModal }: CartModalItemProps) => {
  const { id, title, price, image } = item;

  const { quantity: currentItemQty } = useCartContext().items.filter(
    (item) => item.id === id
  )[0];

  const { addItem, removeItem } = useCartContext();

  const handleItemQuantityIncrement = () => {
    // If incrementing by button click, qty should be up by 1
    addItem(item, 1);
  };

  const handleItemQuantityDecrement = () => {
    removeItem(id);
  };

  const handleItemRemove = () => {
    removeItem(id, true);
  };

  return (
    <li className={styles.cartModalItem}>
      <div>
        <Link href={`/products/${id}`}>
          <a className={styles.cartModalImageLink}>
            <Image
              src={image}
              alt={title}
              layout="fill"
              className={styles.cartModalItemImage}
              onClick={onCloseModal}
            />
          </a>
        </Link>
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
            <p className={styles.addToCartQty}>{currentItemQty}</p>
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
