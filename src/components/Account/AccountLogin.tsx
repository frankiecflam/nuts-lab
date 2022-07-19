import styles from "./AccountLogin.module.css";
import { SectionHeader, SectionBody } from "../Section/index";
import {
  AccountForm,
  AccountInput,
  AccountInputLabel,
  AccountFormGroup,
  AccountFormFeedback,
  AccountFormToggle,
} from "./index";
import { FormEvent, useState } from "react";
import { useInput } from "../../hooks";
import { Button } from "../UI";
import { useAuthContext } from "../../context/AuthContext";
import { Order, User } from "../../types";

interface AccountLoginProps {
  onFormSwitch: () => void;
  onSetUserDetails: (user: User) => void;
  onSetUserSubmittedOrders: (orders: Order[]) => void;
}

const AccountLogin = ({
  onFormSwitch,
  onSetUserDetails,
  onSetUserSubmittedOrders,
}: AccountLoginProps) => {
  const [formFeedback, setFormFeedback] = useState("");
  const { login } = useAuthContext();

  const {
    inputValue: emailInputState,
    onChange: emailInputChange,
    onReset: emailInputReset,
  } = useInput({});

  const {
    inputValue: passwordInputState,
    onChange: passwordInputChange,
    onReset: passwordInputReset,
  } = useInput({});

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const loginRes = await fetch("api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailInputState,
        password: passwordInputState,
      }),
    });

    if (!loginRes.ok) {
      const {
        error: { message },
      } = await loginRes.json();
      setFormFeedback(message);
      return;
    }

    const {
      data: { idToken, localId },
    } = await loginRes.json();

    login(idToken);

    // Fetch user details for client-side state update
    const userDataRes = await fetch("api/getUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        localId,
      }),
    });

    const { user, error: userDataError } = await userDataRes.json();
    if (userDataError) {
      throw new Error(userDataError.message);
    }

    // Fetch user submitted orders for client-side state update
    const userSubmittedOrdersRes = await fetch("api/getSubmittedOrders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: emailInputState }),
    });
    const { orders, error: userOrderError } =
      await userSubmittedOrdersRes.json();

    if (userOrderError) {
      throw new Error(userOrderError.message);
    }

    // update user details and user submittedOrders states on client side
    onSetUserDetails(user);
    onSetUserSubmittedOrders(orders);

    // Reset all fields
    emailInputReset();
    passwordInputReset();
  };

  return (
    <>
      <SectionHeader title="log in" />
      <SectionBody className={styles.loginBody}>
        <AccountForm onSubmit={handleFormSubmit}>
          <AccountFormGroup>
            <AccountInputLabel name="email" />
            <AccountInput
              id="email"
              type="email"
              required
              value={emailInputState}
              onChange={emailInputChange}
            />
          </AccountFormGroup>
          <AccountFormGroup>
            <AccountInputLabel name="password" />
            <AccountInput
              id="password"
              type="password"
              required
              minLength={6}
              value={passwordInputState}
              onChange={passwordInputChange}
            />
          </AccountFormGroup>
          <Button type="submit" name="log in" onSubmit={handleFormSubmit} />
          {formFeedback && <AccountFormFeedback message={formFeedback} />}
        </AccountForm>
        <AccountFormToggle onClick={onFormSwitch} signupFormActive={false} />
      </SectionBody>
    </>
  );
};

export default AccountLogin;
