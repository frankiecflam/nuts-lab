import styles from "./CartModalFooter.module.css";
import Link from "next/link";
import { formatPrice } from "../../utils/helpers";

const CartModalFooter = () => {
  return (
    <footer className={styles.cartModalFooter}>
      <div className={styles.subTotal}>
        <p className={styles.subTotalName}>sub-total</p>
        <p className={styles.subTotalPrice}>{formatPrice(20)}</p>
      </div>
      <p className={styles.calculatedText}>
        Shipping &amp; taxes calculated at checkout
      </p>
      <Link href="/checkout">
        <a className={styles.checkoutBtn}>checkout</a>
      </Link>
    </footer>
  );
};

export default CartModalFooter;
