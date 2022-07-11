import styles from "./Testimonials.module.css";
import Container from "../UI/Container";
import { Section, SectionHeader, SectionBody } from "../Section/index";
import TestimonialsList from "./TestimonialsList";

const Testimonials = () => {
  return (
    <Section className={styles.testimonials}>
      <Container>
        <SectionHeader title="customer reviews" />
        <SectionBody>
          <TestimonialsList />
        </SectionBody>
      </Container>
    </Section>
  );
};

export default Testimonials;
