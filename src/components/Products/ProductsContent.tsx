import styles from "./ProductsContent.module.css";
import { Section, SectionHeader, SectionBody } from "../Section";
import Container from "../UI/Container";
import { ProductList } from "./index";
import { useProducts } from "../../hooks";
import { LoadingSpinner } from "../UI";

const ProductsContent = () => {
  const { data: products, isLoading, error } = useProducts();

  if (isLoading) return <LoadingSpinner />;

  if (error || !products)
    return <div>Something went wrong fetching products from the database!</div>;

  return (
    <Section className={styles.products}>
      <Container>
        <SectionHeader title="products" />
        <SectionBody>
          <ProductList products={products} />
        </SectionBody>
      </Container>
    </Section>
  );
};

export default ProductsContent;
