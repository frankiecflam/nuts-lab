import styles from "./ProductsContent.module.css";
import { Section, SectionHeader, SectionBody } from "../Section";
import Container from "../UI/Container";
import { ProductList } from "./index";
import { Product } from "../../types/index";

const ProductsContent = () => {
  return (
    <Section className={styles.products}>
      <Container>
        <SectionHeader title="products" />
        <SectionBody>
          <ProductList />
        </SectionBody>
      </Container>
    </Section>
  );
};

export default ProductsContent;
