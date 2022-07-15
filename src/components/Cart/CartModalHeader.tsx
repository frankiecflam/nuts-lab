import styles from "./CartModalHeader.module.css";

const CartModalHeader = () => {
  return (
    <header className={styles.cartModalHeader}>
      <h1 className={styles.cartModalHeading}>cart</h1>
      <div className={styles.cartCloseModalBtn} />
    </header>
  );
};

export default CartModalHeader;
