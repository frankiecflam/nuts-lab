import styles from "./CheckoutContent.module.css";
import { Section, SectionHeader, SectionBody } from "../Section";
import { Button, Container } from "../UI/index";
import { CheckoutShippingInfo, CheckoutOrderSummary } from "./index";
import { useCartContext } from "../../context/CartContext";
import Link from "next/link";
import { User } from "../../types";

interface CheckoutContentProps {
  user: User | undefined;
}

const CheckoutContent = ({ user }: CheckoutContentProps) => {
  const { items } = useCartContext();
  const isCartEmpty = items.length === 0;

  return (
    <Section className={styles.checkout}>
      <Container>
        <SectionHeader title="checkout" />
        <SectionBody className={styles.checkoutBody}>
          {isCartEmpty && (
            <div className={styles.checkoutCartEmpty}>
              <p className={styles.checkoutCartEmptyMessage}>
                No items are currently in your cart for checkout.
              </p>
              <Link href="/products">
                <a>
                  <Button name="view products" type="button" />
                </a>
              </Link>
            </div>
          )}
          {!isCartEmpty && (
            <>
              <CheckoutShippingInfo user={user} />
              <CheckoutOrderSummary />
            </>
          )}
        </SectionBody>
      </Container>
    </Section>
  );
};

export default CheckoutContent;
