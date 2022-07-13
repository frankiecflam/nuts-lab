import styles from "./AccountContent.module.css";
import { Section } from "../Section";
import { Container } from "../UI/index";
import { AccountSignup } from "./index";
import { useState } from "react";

const AccountContent = () => {
  const [showSignupForm, setShowSignupForm] = useState(true);

  const handleFormSwitch = () => {
    setShowSignupForm((prevState) => !prevState);
  };

  return (
    <Section className={styles.account}>
      <Container>
        {showSignupForm && <AccountSignup onFormSwitch={handleFormSwitch} />}
      </Container>
    </Section>
  );
};

export default AccountContent;
