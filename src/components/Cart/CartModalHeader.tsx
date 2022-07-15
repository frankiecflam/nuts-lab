import styles from "./CartModalHeader.module.css";

interface CartModalHeaderProps {
  onCloseModal: () => void;
}

const CartModalHeader = ({ onCloseModal }: CartModalHeaderProps) => {
  return (
    <header className={styles.cartModalHeader}>
      <h1 className={styles.cartModalHeading}>cart</h1>
      <div className={styles.cartCloseModalBtn} onClick={onCloseModal} />
    </header>
  );
};

export default CartModalHeader;
