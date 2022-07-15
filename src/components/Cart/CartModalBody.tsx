import styles from "./CartModalBody.module.css";

const CartModalBody = () => {
  return (
    <div className={styles.cartModalBody}>
      <ul className={styles.cartList}>
        <li>Item A</li>
        <li>Item A</li>
        <li>Item A</li>
      </ul>
    </div>
  );
};

export default CartModalBody;
