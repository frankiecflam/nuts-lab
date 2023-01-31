import styles from "./ProductDetailsContent.module.css";
import { Section, SectionBody } from "../Section/index";
import { Container } from "../UI";
import { Product } from "../../types/index";
import Image from "next/image";
import { formatPrice } from "../../utils/helpers/index";
import { Button } from "../UI/index";
import { useState, useEffect } from "react";

interface ProductDetailsContentProps {
  product: Product;
  handleAddItemToCart: ({
    product,
    addToCartQty,
  }: {
    product: Product;
    addToCartQty: number;
  }) => void;
}

const ProductDetailsContent = ({
  product,
  handleAddItemToCart,
}: ProductDetailsContentProps) => {
  const [addToCartQty, setAddAddToCartQty] = useState(1);

  useEffect(() => {
    // reset addToCartQty if productId changes upon a page switch
    setAddAddToCartQty(1);
  }, [product.id]);

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
                  priority
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
                    onClick={() =>
                      handleAddItemToCart({ product, addToCartQty })
                    }
                  />
                </footer>
              </div>
            </div>
          </SectionBody>
        </Container>
      </Section>
    </>
  );
};

export default ProductDetailsContent;
