import styles from "./ContactUs.module.css";
import { Section, SectionHeader, SectionBody } from "../Section";
import { Container } from "../UI/index";
import { ContactForm } from "./index";

const CotactUs = () => {
  return (
    <Section className={styles.contact}>
      <Container>
        <SectionHeader title="contact">
          <h2 className={styles.contactSubHeading}>
            we would love to hear from you!
          </h2>
        </SectionHeader>
        <SectionBody className={styles.contactBody}>
          <ContactForm />
        </SectionBody>
      </Container>
    </Section>
  );
};

export default CotactUs;
