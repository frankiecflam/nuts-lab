import styles from "./AccountOrderDetailsModal.module.css";
import { Order } from "../../types/index";
import {
  formatOrderRef,
  formatPrice,
  formatOrderDate,
} from "../../utils/helpers/index";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface AccountOrderDetailsModalProps {
  order: Order;
  onCloseModal: () => void;
}

const AccountOrderDetailsModal = ({
  order,
  onCloseModal,
}: AccountOrderDetailsModalProps) => {
  const { items, id, price, date } = order;

  const orderRef = formatOrderRef(id);
  const orderDate = formatOrderDate(new Date(date));
  const orderPrice = formatPrice(price);

  return (
    <AnimatePresence>
      <motion.div
        className={styles.accountOrderDetailsModal}
        initial={{ clipPath: "inset(0 0 0 100%)" }}
        animate={{ clipPath: "inset(0 0 0 0)" }}
        exit={{ clipPath: "inset(0 0 0 100%)" }}
        transition={{ duration: 0.3 }}
      >
        <header className={styles.orderModalHeader}>
          <h1 className={styles.orderModalHeading}>Order Details</h1>
          <div className={styles.orderModalCloseBtn} onClick={onCloseModal} />
        </header>
        <div className={styles.orderModalBody}>
          <div className={styles.orderModalItemGroup}>
            <p className={styles.orderModalItemName}>Reference:</p>
            <p>{orderRef}</p>
          </div>
          <div className={styles.orderModalItemGroup}>
            <p className={styles.orderModalItemName}>Date:</p>
            <p>{orderDate}</p>
          </div>
          <div className={styles.orderModalItemGroup}>
            <p className={styles.orderModalItemName}>Total Price:</p>
            <p>{orderPrice} &#40;including shipping and taxes&#41;</p>
          </div>
          <ul className={styles.orderModalItemList}>
            {items.map((item) => (
              <li key={item.id} className={styles.orderModalItem}>
                <div className={styles.orderModalItemImageDiv}>
                  <Image
                    src={item.image}
                    className={styles.orderModalItemImage}
                    layout="fill"
                    alt={`image of ${item.title}`}
                  />
                  <p className={styles.orderModalItemQty}>{item.quantity}</p>
                </div>
                <p className={styles.orderModalItemTitle}>{item.title}</p>
                <p className={styles.orderModalItemPrice}>
                  {formatPrice(item.price * item.quantity)}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AccountOrderDetailsModal;
