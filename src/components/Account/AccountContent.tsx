import styles from "./AccountContent.module.css";
import { Section } from "../Section";
import { Container } from "../UI/index";
import { AccountSignup, AccountLogin } from "./index";
import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";

const AccountContent = () => {
  const [showSignupForm, setShowSignupForm] = useState(true);
  const { isLoggedIn } = useAuthContext();

  const handleFormSwitch = () => {
    setShowSignupForm((prevState) => !prevState);
  };

  return (
    <Section className={styles.account}>
      <Container>
        {!isLoggedIn && showSignupForm && (
          <AccountSignup onFormSwitch={handleFormSwitch} />
        )}
        {!isLoggedIn && !showSignupForm && (
          <AccountLogin onFormSwitch={handleFormSwitch} />
        )}
      </Container>
    </Section>
  );
};

export default AccountContent;
