import styles from "./CartModalItem.module.css";
import Image from "next/image";

interface CartModalItemProps {
  id: string;
  title: string;
  price: number;
  image: string;
}

const CartModalItem = ({ id, title, price, image }: CartModalItemProps) => {
  return (
    <li className={styles.cartModalItem}>
      <div className={styles.cartModalItemImageDiv}>
        <Image
          src={image}
          alt={title}
          layout="fill"
          className={styles.cartModalItemImage}
        />
      </div>
      <div>
        <p>{title}</p>
        <p>{price}</p>
      </div>
    </li>
  );
};

export default CartModalItem;
