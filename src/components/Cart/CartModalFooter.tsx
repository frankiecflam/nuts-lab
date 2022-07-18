import styles from "./CartModalFooter.module.css";
import Link from "next/link";
import { formatPrice } from "../../utils/helpers";
import { useCartContext } from "../../context/CartContext";

interface CartModalFooterProps {
  onCloseModal: () => void;
}

const CartModalFooter = ({ onCloseModal }: CartModalFooterProps) => {
  const { totalPrice } = useCartContext();

  return (
    <footer className={styles.cartModalFooter}>
      <div className={styles.subTotal}>
        <p className={styles.subTotalName}>subtotal</p>
        <p className={styles.subTotalPrice}>{formatPrice(totalPrice)}</p>
      </div>
      <p className={styles.calculatedText}>
        Shipping &amp; taxes calculated at checkout
      </p>
      <Link href="/checkout">
        <a className={styles.checkoutBtn} onClick={onCloseModal}>
          checkout
        </a>
      </Link>
    </footer>
  );
};

export default CartModalFooter;
