import styles from "./ProductItem.module.css";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import formatPrice from "../../utils/helpers/formatPrice";

interface ProductImageProps {
  src: string;
  href: string;
}

const ProductImage = React.forwardRef<HTMLAnchorElement, ProductImageProps>(
  ({ src, href }, ref) => {
    return (
      <a ref={ref} href={href}>
        <Image src={src} layout="responsive" width="250" height="320" />
      </a>
    );
  }
);

// FC
interface ProductItemProps {
  className?: string;
  id: string;
  href: string;
  src: string;
  title: string;
  price: number;
}

const ProductItem = ({
  className,
  id,
  href,
  src,
  title,
  price,
}: ProductItemProps) => {
  const classes = className ? `${styles.item} ${className}` : styles.item;

  return (
    <li className={classes} key={id}>
      <Link href="/" passHref>
        <ProductImage src={src} href={href} />
      </Link>
      <p className={styles.itemTitle}>{title}</p>
      <p className={styles.itemPrice}>{formatPrice(price)}</p>
    </li>
  );
};

export default ProductItem;
