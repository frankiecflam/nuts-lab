import styles from "./CartModal.module.css";
import { CartModalHeader, CartModalBody, CartModalFooter } from "./index";

interface CartModalProps {
  onCloseModal: () => void;
  showCartModal: boolean;
}

const CartModal = ({ onCloseModal, showCartModal }: CartModalProps) => {
  return (
    <div
      className={
        showCartModal
          ? `${styles.cartModal} ${styles.active}`
          : styles.cartModal
      }
    >
      <CartModalHeader onCloseModal={onCloseModal} />
      <CartModalBody onCloseModal={onCloseModal} />
      <CartModalFooter onCloseModal={onCloseModal} />
    </div>
  );
};

export default CartModal;
