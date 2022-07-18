import styles from "./CheckoutOrderSummary.module.css";
import { useCartContext } from "../../context/CartContext";
import Image from "next/image";
import { formatPrice } from "../../utils/helpers";
import { SHIPPING_COST } from "../../utils/constants";
import { useState } from "react";

const CheckoutOrderSummary = () => {
  const { items, totalPrice } = useCartContext();
  const [showOrderSummary, setShowOrderSummary] = useState(false);

  const handleShowOrderDetails = () => {
    setShowOrderSummary((prevState) => !prevState);
  };

  return (
    <div className={styles.summaryInfo}>
      <header>
        <h2 className={styles.summaryInfoHeading}>order summary</h2>
      </header>
      <div className={styles.summaryBody}>
        <button
          type="button"
          className={styles.summaryShowBtn}
          onClick={handleShowOrderDetails}
        >
          {showOrderSummary ? "hide" : "show"} order details
        </button>
        <ul
          className={
            showOrderSummary
              ? `${styles.summaryItemList} ${styles.active}`
              : styles.summaryItemList
          }
        >
          {items.map((item) => (
            <li key={item.id} className={styles.summaryItem}>
              <div className={styles.summaryItemImageDiv}>
                <Image
                  src={item.image}
                  className={styles.summaryItemImage}
                  layout="fill"
                  alt={`picture of ${item.title}`}
                />
                <p className={styles.summaryItemQty}>{item.quantity}</p>
              </div>
              <p className={styles.summaryItemTitle}>{item.title}</p>
              <p className={styles.summaryItemPrice}>
                {formatPrice(item.price * item.quantity)}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <footer className={styles.summaryFooter}>
        <div className={styles.footerItem}>
          <p className={styles.footerItemName}>subtotal</p>
          <p className={styles.footerItemData}>{formatPrice(totalPrice)}</p>
        </div>
        <div className={styles.footerItem}>
          <p className={styles.footerItemName}>shipping</p>
          <p className={styles.footerItemData}>{formatPrice(SHIPPING_COST)}</p>
        </div>
        <div className={`${styles.footerItem} ${styles.footerItemTotal}`}>
          <p className={styles.footerItemName}>total</p>
          <p className={styles.footerItemData}>
            {formatPrice(totalPrice + SHIPPING_COST)}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CheckoutOrderSummary;
