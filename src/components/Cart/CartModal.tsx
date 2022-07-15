import styles from "./CartModal.module.css";
import { CartModalHeader, CartModalBody, CartModalFooter } from "./index";

const CartModal = () => {
  return (
    <div className={styles.cartModal}>
      <CartModalHeader />
      <CartModalBody />
      <CartModalFooter />
    </div>
  );
};

export default CartModal;
