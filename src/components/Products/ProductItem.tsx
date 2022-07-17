import styles from "./ProductItem.module.css";
import Link from "next/link";
import Image from "next/image";
import formatPrice from "../../utils/helpers/formatPrice";

interface ProductItemProps {
  className?: string;
  href: string;
  src: string;
  title: string;
  price: number;
}

const ProductItem = ({
  className,
  href,
  src,
  title,
  price,
}: ProductItemProps) => {
  const classes = className ? `${styles.item} ${className}` : styles.item;

  return (
    <li className={classes}>
      <Link href={href}>
        <a>
          <Image
            src={src}
            width="256"
            height="384"
            layout="responsive"
            alt="product image"
          />
        </a>
      </Link>
      <p className={styles.itemTitle}>{title}</p>
      <p className={styles.itemPrice}>{formatPrice(price)}</p>
    </li>
  );
};

export default ProductItem;
