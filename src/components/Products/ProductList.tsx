import styles from "./ProductList.module.css";
import { ProductItem } from "./index";
import { useProducts } from "../../hooks";
import { LoadingSpinner } from "../UI";
import { Product } from "../../types";

interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <ul className={styles.productList}>
      {products.map((product) => (
        <ProductItem
          key={product.id}
          href={`/products/${product.id}`}
          src={product.image}
          title={product.title}
          price={product.price}
        />
      ))}
    </ul>
  );
};

export default ProductList;
