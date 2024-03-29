import styles from "./AccountContent.module.css";
import { Section } from "../Section";
import { Container, LoadingSpinner } from "../UI/index";
import { AccountSignup, AccountLogin, AccountDetails } from "./index";
import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { User, Order } from "../../types/index";

interface AccountContentProps {
  user: User;
  submittedOrders: Order[] | null;
}

const AccountContent = ({ user, submittedOrders }: AccountContentProps) => {
  const [showSignupForm, setShowSignupForm] = useState(false);
  const [userDetails, setUserDetails] = useState(user);
  const [userSubmittedOrders, setUserSubmittedOrders] = useState<Order[]>(
    submittedOrders ? submittedOrders : []
  );
  const { isLoggedIn } = useAuthContext();

  const handleFormSwitch = () => {
    setShowSignupForm((prevState) => !prevState);
  };

  const handleSetUserDetails = (user: User) => {
    setUserDetails(user);
  };

  const handleSetUserSubmittedOrders = (orders: Order[]) => {
    setUserSubmittedOrders(orders);
  };

  return (
    <Section className={styles.account}>
      <Container>
        {isLoggedIn ? (
          userDetails ? (
            <AccountDetails
              user={userDetails}
              submittedOrders={userSubmittedOrders}
              onSetUserDetails={handleSetUserDetails}
            />
          ) : (
            <LoadingSpinner />
          )
        ) : showSignupForm ? (
          <AccountSignup
            onFormSwitch={handleFormSwitch}
            onSetUserDetails={setUserDetails}
          />
        ) : (
          <AccountLogin
            onFormSwitch={handleFormSwitch}
            onSetUserDetails={handleSetUserDetails}
            onSetUserSubmittedOrders={handleSetUserSubmittedOrders}
          />
        )}
      </Container>
    </Section>
  );
};

export default AccountContent;
