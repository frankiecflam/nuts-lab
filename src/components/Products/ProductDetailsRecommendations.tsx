import styles from "./ProductDetailsRecommendations..module.css";
import { Section, SectionBody, SectionHeader } from "../Section/index";
import { Container } from "../UI";
import { ProductList } from "./index";
import { Product } from "../../types/index";

interface ProductDetailsRecommendationsProps {
  recommendedProducts: Product[];
}

const ProductDetailsRecommendations = ({
  recommendedProducts,
}: ProductDetailsRecommendationsProps) => {
  return (
    <Section>
      <Container>
        <SectionHeader title="you may also like" />
        <SectionBody>
          <ProductList products={recommendedProducts} />
        </SectionBody>
      </Container>
    </Section>
  );
};

export default ProductDetailsRecommendations;
