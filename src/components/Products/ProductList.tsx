import styles from "./ProductList.module.css";
import { Product } from "../../types/index";
import { ProductItem } from "./index";

interface ProductsListProps {
  products: Product[];
}

const ProductList = ({ products }: ProductsListProps) => {
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
