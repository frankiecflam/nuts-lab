import styles from "./ContactUs.module.css";
import { Section, SectionHeader, SectionBody } from "../Section";
import { Container } from "../UI/index";
import { ContactForm } from "./index";

interface Feedback {
  name: string;
  email: string;
  message: string;
}

const CotactUs = () => {
  const handleContactFormSubmit = async (feedback: Feedback) => {
    const response = await fetch("api/submitContactFeedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(feedback),
    });

    const { error, success } = await response.json();
    if (error) {
      throw new Error(error.message);
    }

    return { success: true };
  };

  return (
    <Section className={styles.contact}>
      <Container>
        <SectionHeader title="contact">
          <h2 className={styles.contactSubHeading}>
            we would love to hear from you!
          </h2>
        </SectionHeader>
        <SectionBody className={styles.contactBody}>
          <ContactForm onContactFormSubmit={handleContactFormSubmit} />
        </SectionBody>
      </Container>
    </Section>
  );
};

export default CotactUs;
