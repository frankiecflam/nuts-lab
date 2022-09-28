import { Section, SectionBody, SectionHeader } from "../Section/index";
import { Container, LoadingSpinner } from "../UI";
import { ProductList } from "./index";
import { Product } from "../../types/index";
import { useProducts } from "../../hooks";
import { getRecommendedProducts } from "../../utils/helpers";

const ProductDetailsRecommendations = ({
  currentProductId,
}: {
  currentProductId: string;
}) => {
  const { isLoading, error, data: products } = useProducts();

  if (isLoading) return <LoadingSpinner />;

  if (error || !products)
    return (
      <div>
        Something went wrong fetching recommended products from the database!
      </div>
    );

  const recommendedProducts: Product[] = getRecommendedProducts(
    currentProductId,
    products,
    4
  );

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
