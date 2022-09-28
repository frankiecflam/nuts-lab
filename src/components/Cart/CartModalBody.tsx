import styles from "./CartModalBody.module.css";
import { useCartContext } from "../../context/CartContext";
import { CartModalItem } from "./index";

interface CartModalBodyProps {
  onCloseModal: () => void;
}

const CartModalBody = ({ onCloseModal }: CartModalBodyProps) => {
  const { items } = useCartContext();

  return (
    <div className={styles.cartModalBody}>
      {items.length === 0 && (
        <p className={styles.noItems}>No items currently in cart</p>
      )}
      {items.length > 0 && (
        <ul className={styles.cartList}>
          {items.map((item) => (
            <CartModalItem
              item={item}
              key={item.id}
              onCloseModal={onCloseModal}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartModalBody;
