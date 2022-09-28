import styles from "./ProductList.module.css";
import { ProductItem } from "./index";
import { useProducts } from "../../hooks";
import { LoadingSpinner } from "../UI";

const ProductList = () => {
  const { data: products, isLoading, error } = useProducts();

  if (isLoading) return <LoadingSpinner />;

  if (error || !products)
    return <div>Something went wrong fetching products from the database!</div>;

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
