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

interface AccountLoginProps {
  onFormSwitch: () => void;
}

const AccountLogin = ({ onFormSwitch }: AccountLoginProps) => {
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

    const res = await fetch("api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailInputState,
        password: passwordInputState,
      }),
    });

    if (!res.ok) {
      const {
        error: { message },
      } = await res.json();
      setFormFeedback(message);
      return;
    }

    const {
      data: { idToken },
    } = await res.json();

    login(idToken);
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
