import styles from "./AccountContent.module.css";
import { Section } from "../Section";
import { Container } from "../UI/index";
import { AccountSignup, AccountLogin, AccountDetails } from "./index";
import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { User } from "../../types/index";

interface AccountContentProps {
  user: User;
}

const AccountContent = ({ user }: AccountContentProps) => {
  const [showSignupForm, setShowSignupForm] = useState(false);
  const [userDetails, setUserDetails] = useState(user);
  const { isLoggedIn } = useAuthContext();

  const handleFormSwitch = () => {
    setShowSignupForm((prevState) => !prevState);
  };

  const handleSetUserDetails = (user: User) => {
    setUserDetails(user);
  };

  return (
    <Section className={styles.account}>
      <Container>
        {!isLoggedIn && showSignupForm && (
          <AccountSignup
            onFormSwitch={handleFormSwitch}
            onSetUserDetails={setUserDetails}
          />
        )}
        {!isLoggedIn && !showSignupForm && (
          <AccountLogin
            onFormSwitch={handleFormSwitch}
            onSetUserDetails={handleSetUserDetails}
          />
        )}
        {isLoggedIn && userDetails && <AccountDetails user={userDetails} />}
      </Container>
    </Section>
  );
};

export default AccountContent;
