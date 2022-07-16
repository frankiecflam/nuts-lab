import styles from "./CartModalBody.module.css";
import { useCartContext } from "../../context/CartContext";
import { CartModalItem } from "./index";

const CartModalBody = () => {
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
              id={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartModalBody;
