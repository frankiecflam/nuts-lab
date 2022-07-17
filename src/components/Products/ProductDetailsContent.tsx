import styles from "./ProductDetailsContent.module.css";
import { Section, SectionBody } from "../Section/index";
import { Container } from "../UI";
import { Product } from "../../types/index";
import Image from "next/image";
import { formatPrice } from "../../utils/helpers/index";
import { Button } from "../UI/index";
import { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { ProductDetailsRecommendations } from "./index";

interface ProductDetailsContentProps {
  product: Product;
  recommendedProducts: Product[];
}

const ProductDetailsContent = ({
  product,
  recommendedProducts,
}: ProductDetailsContentProps) => {
  const [addToCartQty, setAddAddToCartQty] = useState(1);
  const { addItem } = useCartContext();

  const handleAddItemToCart = () => {
    addItem(product, addToCartQty);
  };

  return (
    <>
      <Section>
        <Container>
          <SectionBody className={styles.productDetailsBody}>
            <div className={styles.productDetailsContentBody}>
              <div className={styles.productImageDiv}>
                <Image
                  className={styles.productImage}
                  src={product.image}
                  layout="fill"
                  alt={product.title}
                />
              </div>
              <div className={styles.productTextContent}>
                <header className={styles.productTextContentHeader}>
                  <h1 className={styles.productTitle}>{product.title}</h1>
                  <p className={styles.productPrice}>
                    {formatPrice(product.price)}
                  </p>
                </header>
                <div className={styles.productTextContentBody}>
                  <p className={styles.productDescription}>
                    {product.description}
                  </p>
                </div>
                <footer className={styles.productTextContentFooter}>
                  <div className={styles.productQtyDiv}>
                    <Button
                      type="button"
                      className={styles.productQtyBtn}
                      name="-"
                      onClick={() =>
                        setAddAddToCartQty((prevState) =>
                          prevState === 1 ? prevState : --prevState
                        )
                      }
                    />
                    <p className={styles.addToCartQty}>{addToCartQty}</p>
                    <Button
                      type="button"
                      className={styles.productQtyBtn}
                      name="+"
                      onClick={() =>
                        setAddAddToCartQty((prevState) => ++prevState)
                      }
                    />
                  </div>
                  <Button
                    type="button"
                    name="add to cart"
                    className={styles.productAddToCartBtn}
                    onClick={handleAddItemToCart}
                  />
                </footer>
              </div>
            </div>
          </SectionBody>
        </Container>
      </Section>
      <ProductDetailsRecommendations
        recommendedProducts={recommendedProducts}
      />
    </>
  );
};

export default ProductDetailsContent;
