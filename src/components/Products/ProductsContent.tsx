import styles from "./ProductsContent.module.css";
import { Section, SectionHeader, SectionBody } from "../Section";
import Container from "../UI/Container";
import { ProductList } from "./index";
import { Product } from "../../types/index";

interface ProductsContentProps {
  products: Product[];
}

const ProductsContent = ({ products }: ProductsContentProps) => {
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
