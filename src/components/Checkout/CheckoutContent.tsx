import styles from "./CheckoutContent.module.css";
import { Section, SectionHeader, SectionBody } from "../Section";
import { Container } from "../UI/index";
import { CheckoutShippingInfo, CheckoutOrderSummary } from "./index";

const CheckoutContent = () => {
  return (
    <Section className={styles.checkout}>
      <Container>
        <SectionHeader title="checkout" />
        <SectionBody className={styles.checkoutBody}>
          <CheckoutShippingInfo />
          <CheckoutOrderSummary />
        </SectionBody>
      </Container>
    </Section>
  );
};

export default CheckoutContent;
