import styles from "./AccountContent.module.css";
import { Section, SectionHeader, SectionBody } from "../Section";
import { Container } from "../UI/index";
import { AccountSignup } from "./index";

const AccountContent = () => {
  return (
    <Section className={styles.account}>
      <Container>
        <AccountSignup />
      </Container>
    </Section>
  );
};

export default AccountContent;
